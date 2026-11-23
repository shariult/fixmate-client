"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import Container from "@/components/ui/common/Container";
import { TBooking, TBookingStatus } from "@/types";
import { getBookingStatusFromSlug } from "@/lib/utils";
import { updateBookingStatusAction } from "@/lib/bookingActions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import BookingFinalPriceModal from "./BookingFinalPriceModal";

type TechnicianRequestsTableProps = {
  requests: TBooking[];
  className?: string;
} & ComponentPropsWithoutRef<"table">;

function TechnicianRequestsTable(props: TechnicianRequestsTableProps) {
  const { requests, className, ...rest } = props;
  const [bookingToComp, setBookingToComp] = useState<null | TBooking>(null);
  const router = useRouter();

  async function changeRequestStatusHandler(
    bId: string,
    data: { status: TBookingStatus },
  ) {
    const resData = await updateBookingStatusAction(bId, data);
    if (!resData.isSuccess) {
      toast.error("Could not update request!");
      return;
    }
    toast.success("Request updated successfully!");
    router.refresh();
  }

  return (
    <>
      <table className="table min-w-5xl" {...rest}>
        <thead>
          <tr className="text-muted">
            <th>Customer</th>
            <th>Service</th>
            <th>Preferred date</th>
            <th>Address</th>
            <th>Problem</th>
            <th>Status</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center text-xl py-6">
                No Data found!
              </td>
            </tr>
          )}
          {requests.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <p className="font-medium">{item.customerDetails?.name}</p>
                  <p className="text-xs text-muted">{item.customerPhone}</p>
                </td>
                <td>
                  <p className="font-medium">{item.serviceDetails?.title}</p>
                  <p className="text-xs text-muted">
                    ${item.serviceDetails?.basePrice} base
                  </p>
                </td>
                <td className="whitespace-nowrap">{item.preferredDate}</td>
                <td className="max-w-48 text-sm text-muted">{item.address}</td>
                <td className="max-w-[16rem]">
                  <p
                    className="line-clamp-2 text-sm text-muted"
                    title="Cracked screen after a fall. Touch still works but a line runs across the display."
                  >
                    {item.problemDescription}
                  </p>
                </td>
                <td>
                  <span
                    className={`badge badge-soft ${getBookingStatusFromSlug(item.status).className}`}
                  >
                    {getBookingStatusFromSlug(item.status).title}
                  </span>
                </td>
                <td className="text-right">
                  {item.status === "requested" && (
                    <div className="flex gap-2 justify-end">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={() =>
                          changeRequestStatusHandler(item._id, {
                            status: "accepted",
                          })
                        }
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline btn-error"
                        onClick={() =>
                          changeRequestStatusHandler(item._id, {
                            status: "rejected",
                          })
                        }
                      >
                        Reject
                      </button>
                    </div>
                  )}

                  {item.status === "accepted" && (
                    <div className="flex gap-2 justify-end">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={() =>
                          changeRequestStatusHandler(item._id, {
                            status: "in-progress",
                          })
                        }
                      >
                        Start Work
                      </button>
                    </div>
                  )}

                  {item.status === "in-progress" && (
                    <div className="flex gap-2 justify-end">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={() => setBookingToComp(item)}
                      >
                        Mark Complete
                      </button>
                    </div>
                  )}

                  {item.status === "completed" && (
                    <div className="flex flex-col gap-2 justify-end">
                      <div className="mb-2">
                        <p className="text-xl text-muted">
                          ${item.finalAmount}
                        </p>
                        final
                      </div>
                      <p
                        className={`badge ${item.paymentStatus === "paid" ? "badge-success" : "badge-info"} badge-outline ml-auto`}
                      >
                        {item.paymentStatus}
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {bookingToComp && (
        <BookingFinalPriceModal
          booking={bookingToComp}
          onClose={() => setBookingToComp(null)}
        />
      )}
    </>
  );
}

export default TechnicianRequestsTable;
