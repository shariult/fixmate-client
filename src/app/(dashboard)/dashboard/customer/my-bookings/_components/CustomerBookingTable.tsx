"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import Container from "@/components/ui/common/Container";
import { PiCheckBold, PiCreditCardBold } from "react-icons/pi";
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
                  <span className="font-medium">${item.price}</span>
                  <span className="block text-xs text-muted">Base price</span>
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
                    className={`badge ${item.paymentId ? "btn-success" : "badge-outline"}`}
                  >
                    {item.paymentId ? "paid" : "unpaid"}
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

                  {bookingStatus.slug === "completed" && (
                    <button type="button" className="btn btn-sm btn-success">
                      <PiCheckBold />
                      Pay Now
                    </button>
                  )}

                  {bookingStatus.slug !== "completed" &&
                    bookingStatus.slug !== "requested" && <p>no action</p>}
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
