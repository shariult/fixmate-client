import Link from "next/link";
import React from "react";
import { PiCheckBold, PiWarningBold } from "react-icons/pi";
import { stripe } from "@/lib/stripe";
import { showBookingAction, updateBookingAction } from "@/lib/bookingActions";
import { storePaymentAction } from "@/lib/paymentActions";
// import { markBookingPaidAction } from "@/lib/booking/bookingActions"; // see TODO below

const BOOKINGS_URL = "/dashboard/customer/my-bookings"; // adjust to your route
const PAYMENTS_URL = "/dashboard/customer/payments"; // adjust to your route

async function verifyPayment(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") return null;

    const bookingId = session.metadata?.bookingId;
    const paymentIntentId = session.payment_intent as string;

    let booking = null;
    let paymentData = null;
    if (bookingId) {
      const res = await showBookingAction(bookingId);
      booking = res.isSuccess ? res.data : null;

      paymentData = {
        service: booking?.serviceDetails?.title ?? "Repair service",
        technician: booking?.technicianDetails?.name ?? "-",
        amount: (session.amount_total ?? 0) / 100,
        currency: (session.currency ?? "usd").toUpperCase(),
        transactionId: paymentIntentId,
        paidOn: new Date(session.created * 1000).toLocaleString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      if (booking && !booking.paymentId) {
        await updateBookingAction(bookingId, {
          paymentId: paymentIntentId,
          paymentDate: new Date(),
        });

        await storePaymentAction({
          bookingId: bookingId,
          customerId: booking.customerId,
          technicianId: booking.technicianId,
          serviceId: booking.serviceId,
          amount: paymentData.amount,
          currency: paymentData.currency,
          transactionId: paymentData.transactionId,
          stripeSessionId: sessionId,
          paymentStatus: "paid",
          paidAt: paymentData.paidOn,
        });
      }
    }

    return paymentData;
  } catch (err) {
    console.error("Payment verification failed:", err);
    return null;
  }
}

async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const payment = session_id ? await verifyPayment(session_id) : null;

  return (
    <section className="container-x grid min-h-[70vh] place-items-center py-14">
      <div className="w-full max-w-lg">
        {payment ? (
          <div className="rounded-2xl border border-base-300 bg-base-50 p-8 text-center shadow-sm sm:p-10">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
              <PiCheckBold className="text-4xl" />
            </span>
            <h1 className="heading-2 mt-6">Payment successful</h1>
            <p className="mt-2 text-muted">
              Thank you. Your repair is paid for and the technician has been
              notified.
            </p>

            <dl className="mt-8 divide-y divide-base-300 rounded-xl border border-base-300 bg-base-100 text-left text-sm">
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <dt className="text-muted">Service</dt>
                <dd className="text-right font-medium">{payment.service}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <dt className="text-muted">Technician</dt>
                <dd className="font-medium">{payment.technician}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <dt className="text-muted">Amount paid</dt>
                <dd className="font-title text-lg font-semibold text-primary">
                  ${payment.amount.toFixed(2)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <dt className="text-muted">Transaction ID</dt>
                <dd className="truncate font-mono text-xs">
                  {payment.transactionId}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <dt className="text-muted">Paid on</dt>
                <dd className="font-medium">{payment.paidOn}</dd>
              </div>
            </dl>

            <div className="btn-box mt-8 flex-col sm:flex-row sm:justify-center">
              <Link href={BOOKINGS_URL} className="btn btn-primary btn-lg">
                Back to My Bookings
              </Link>
              <Link href={PAYMENTS_URL} className="btn btn-outline btn-lg">
                Payment history
              </Link>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-base-300 bg-base-50 p-10 text-center shadow-sm">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-error/15 text-error">
              <PiWarningBold className="text-4xl" />
            </span>
            <h1 className="heading-2 mt-6">
              We couldn&apos;t confirm your payment
            </h1>
            <p className="mt-2 text-muted">
              If you were charged, don&apos;t worry. Check My Bookings in a few
              minutes, or contact support with your session ID.
            </p>
            <Link href={BOOKINGS_URL} className="btn btn-primary btn-lg mt-8">
              Back to My Bookings
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default CheckoutSuccessPage;
