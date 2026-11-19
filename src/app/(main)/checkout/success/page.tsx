import Link from "next/link";
import React from "react";
import { PiCheckBold } from "react-icons/pi";

function CheckoutSuccessPage() {
  return (
    <>
      <section className="container-x grid min-h-[70vh] place-items-center py-14">
        <div className="w-full max-w-lg">
          {/* <!-- ===== STATE 1: payment verified ===== --> */}
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
                <dd className="text-right font-medium">
                  iPhone Screen Replacement
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <dt className="text-muted">Technician</dt>
                <dd className="font-medium">Rafiq Hasan</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <dt className="text-muted">Amount paid</dt>
                <dd className="font-title text-lg font-semibold text-primary">
                  $55.00
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <dt className="text-muted">Transaction ID</dt>
                <dd className="truncate font-mono text-xs">
                  pi_3Q9xYzKJ8aBcD1234567
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <dt className="text-muted">Paid on</dt>
                <dd className="font-medium">18 Nov 2026, 3:42 PM</dd>
              </div>
            </dl>

            <div className="btn-box mt-8 flex-col sm:flex-row sm:justify-center">
              <Link href="#" className="btn btn-primary btn-lg">
                Back to My Bookings
              </Link>
              <Link href="#" className="btn btn-outline btn-lg">
                Payment history
              </Link>
            </div>
          </div>

          {/* <!-- ===== STATE 2: verifying (show first while the verify request runs) =====
    <div className="rounded-2xl border border-base-300 bg-base-50 p-10 text-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <h1 className="heading-3 mt-5">Confirming your payment…</h1>
      <p className="mt-2 text-sm text-muted">Please don't close this page.</p>
    </div>
    --> */}

          {/* <!-- ===== STATE 3: verification failed or session not paid =====
    <div className="rounded-2xl border border-base-300 bg-base-50 p-10 text-center">
      <span className="mx-auto grid size-16 place-items-center rounded-full bg-error/15 text-error"><svg className="size-8"><use href="#i-alert"/></svg></span>
      <h1 className="heading-2 mt-6">We couldn't confirm your payment</h1>
      <p className="mt-2 text-muted">If you were charged, don't worry. Check My Bookings in a few minutes, or contact support with your session ID.</p>
      <Link href="#" className="btn btn-primary btn-lg mt-8">Back to My Bookings</Link>
    </div>
    --> */}
        </div>
      </section>
    </>
  );
}

export default CheckoutSuccessPage;
