import React from "react";
import CustomerBookingTable from "./_components/CustomerBookingTable";
import CustomerCancelBookingModal from "./_components/CustomerCancelBookingModal";

async function CustomerMyBookingsPage() {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="heading-2">My Bookings</h1>
          <p className="mt-1 text-muted">
            9 repair requests. Pay Now appears once a job is completed.
          </p>
        </div>
        <a href="services.html" className="btn btn-primary">
          <svg className="size-4">
            <use href="#i-search" />
          </svg>
          Find a service
        </a>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-base-300 bg-base-50">
        <CustomerBookingTable />
      </div>

      <CustomerCancelBookingModal />
    </main>
  );
}

export default CustomerMyBookingsPage;
