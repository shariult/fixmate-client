import React from "react";
import CustomerBookingTable from "./_components/CustomerBookingTable";
import { listCustomerBookingsAction } from "@/lib/bookingActions";
import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import Link from "next/link";

async function CustomerMyBookingsPage() {
  const resData = await listCustomerBookingsAction();
  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData message="Something went wrong!" isError />
      </Container>
    );
  }

  const bookings = resData.data;

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="heading-2">My Bookings</h1>
          <p className="mt-1 text-muted">
            {bookings.length} repair requests. Pay Now appears once a job is
            completed.
          </p>
        </div>
        <Link href="/services" className="btn btn-primary">
          <PiMagnifyingGlassBold className="text-2xl" />
          Find a service
        </Link>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-base-300 bg-base-50">
        <CustomerBookingTable bookings={bookings} />
      </div>
    </main>
  );
}

export default CustomerMyBookingsPage;
