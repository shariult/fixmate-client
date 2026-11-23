"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import { PiCheckBold } from "react-icons/pi";
import { TBooking } from "@/types";
import { getBookingStatusFromSlug, getCategoryFromSlug } from "@/lib/utils";
import CustomerCancelBookingModal from "./CustomerCancelBookingModal";

type CustomerBookingTableProps = {
  bookings: TBooking[];
  className?: string;
} & ComponentPropsWithoutRef<"table">;

function CustomerBookingTable(props: CustomerBookingTableProps) {
  const { bookings, className, ...rest } = props;
  const [bookingId, setBooking] = useState<string | null>(null);
  const [payingId, setPayingId] = useState<string | null>(null);

  async function handlePay(id: string) {
    try {
      setPayingId(id);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: id }), // only send the ID
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not start payment");

      window.location.href = data.url; // go to Stripe Checkout
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Payment failed");
      setPayingId(null);
    }
  }
  return (
    <>
      <table className={`table ${className}`} {...rest}>
        <thead>
          <tr className="text-muted">
            <th>Service</th>
            <th>Technician</th>
            <th>Preferred date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Payment</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center text-xl py-6">
                No Data found!
              </td>
            </tr>
          )}
          {bookings.map((item) => {
            const bookingStatus = getBookingStatusFromSlug(item.status);
            return (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={item.serviceDetails?.image}
                      alt={item.serviceDetails?.title}
                      className="size-12 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0">
                      <p className="font-medium">
                        {item.serviceDetails?.title}
                      </p>
                      <p className="text-xs text-muted">
                        {
                          getCategoryFromSlug(
                            item.serviceDetails?.category as string,
                          ).title
                        }
                      </p>
                    </div>
                  </div>
                </td>
                <td>{item.technicianDetails?.name}</td>
                <td className="whitespace-nowrap">{item.preferredDate}</td>
                <td className="whitespace-nowrap">
                  <span className="font-medium">${item.basePrice}</span>
                  <span className="block text-xs text-muted">Price to Pay</span>
                </td>
                <td>
                  <span
                    className={`badge badge-soft ${bookingStatus.className}`}
                  >
                    {bookingStatus.title}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${item.paymentStatus === "paid" ? "btn-success" : "badge-outline"}`}
                  >
                    {item.paymentStatus}
                  </span>
                </td>
                <td className="text-right">
                  {bookingStatus.slug === "requested" && (
                    <button
                      type="button"
                      className="btn btn-sm btn-outline btn-error"
                      onClick={() => setBooking(item._id)}
                    >
                      Cancel
                    </button>
                  )}

                  {bookingStatus.slug === "completed" &&
                    item.paymentStatus === "unpaid" && (
                      <button
                        type="button"
                        className="btn btn-sm btn-success"
                        disabled={payingId === item._id}
                        onClick={() => handlePay(item._id)}
                      >
                        {payingId === item._id ? (
                          <span className="loading loading-spinner loading-xs" />
                        ) : (
                          <PiCheckBold />
                        )}
                        Pay Now
                      </button>
                    )}

                  {bookingStatus.slug === "completed" &&
                    item.paymentStatus === "paid" && <p>—</p>}

                  {bookingStatus.slug !== "completed" &&
                    bookingStatus.slug !== "requested" && <p>—</p>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {bookingId && (
        <CustomerCancelBookingModal
          key={bookingId}
          bId={bookingId}
          onClose={() => setBooking(null)}
        />
      )}
    </>
  );
}

export default CustomerBookingTable;
