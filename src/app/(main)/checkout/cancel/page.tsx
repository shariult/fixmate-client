import Link from "next/link";
import React from "react";
import { PiCreditCardBold } from "react-icons/pi";

function CheckoutCancelPage() {
  return (
    <>
      <section className="container-x grid min-h-[70vh] place-items-center py-14">
        <div className="w-full max-w-lg rounded-2xl border border-base-300 bg-base-50 p-8 text-center shadow-sm sm:p-10">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-warning/20 text-warning-content">
            <PiCreditCardBold className="text-4xl text-primary" />
          </span>
          <h1 className="heading-2 mt-6">Payment cancelled</h1>
          <p className="mt-2 text-muted">
            No money was taken and your booking is unchanged. You can pay
            whenever you&apos;re ready from My Bookings.
          </p>

          <div className="btn-box mt-8 flex-col sm:flex-row sm:justify-center">
            <Link
              href="/dashboard/customer/my-bookings"
              className="btn btn-primary btn-lg"
            >
              Try again
            </Link>
            <Link href="/" className="btn btn-outline btn-lg">
              Back to Home
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted">
            Test mode: use card 4242 4242 4242 4242 with any future date and any
            CVC.
          </p>
        </div>
      </section>
    </>
  );
}

export default CheckoutCancelPage;
