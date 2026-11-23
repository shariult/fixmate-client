import React from "react";
import Link from "next/link";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { getBookingStatusFromSlug, getCategoryFromSlug } from "@/lib/utils";
import EmptyData from "@/components/ui/common/EmptyData";
import { listBookingsAdminAction } from "@/lib/adminActions";

type AdminBookingsPageProps = {
  searchParams: Promise<{ status: string }>;
};

async function AdminBookingsPage(props: AdminBookingsPageProps) {
  const { status } = await props.searchParams;

  const resData = await listBookingsAdminAction(status);
  if (!resData.isSuccess) {
    return <EmptyData message="Something went wrong!" />;
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
          <PiMagnifyingGlassBold />
          Find a service
        </Link>
      </div>

      <div className="mt-8 overflow-x-auto">
        <div role="tablist" className="tabs tabs-box w-fit bg-base-50">
          <Link
            href="?status="
            className={`tab h-10 gap-2 ${!status && "tab-active"}`}
          >
            All
          </Link>
          <Link
            href="?status=requested"
            className={`tab h-10 gap-2 ${status === "requested" && "tab-active"}`}
          >
            Requested
          </Link>
          <Link
            href="?status=accepted"
            className={`tab h-10 gap-2 ${status === "accepted" && "tab-active"}`}
          >
            Accepted
          </Link>
          <Link
            href="?status=in-progress"
            className={`tab h-10 gap-2 ${status === "in-progress" && "tab-active"}`}
          >
            In Progress
          </Link>
          <Link
            href="?status=completed"
            className={`tab h-10 gap-2 ${status === "completed" && "tab-active"}`}
          >
            Completed
          </Link>
          <Link
            href="?status=rejected"
            className={`tab h-10 gap-2 ${status === "rejected" && "tab-active"}`}
          >
            Rejected
          </Link>
          <Link
            href="?status=cancelled"
            className={`tab h-10 gap-2 ${status === "cancelled" && "tab-active"}`}
          >
            Cancelled
          </Link>
        </div>
      </div>

      <div className="mt-8  overflow-x-auto rounded-2xl border border-base-300 bg-base-50">
        <table className="table">
          <thead>
            <tr className="text-muted">
              <th>Service</th>
              <th>Technician</th>
              <th>Preferred date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment</th>
              {/* <th className="text-right">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 && (
              <tr>
                <td colSpan={7} className="text-xl py-6">
                  No bookings found!
                </td>
              </tr>
            )}
            {bookings.map((item) => (
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
                          getCategoryFromSlug(item.serviceDetails!.category)
                            .title
                        }
                      </p>
                    </div>
                  </div>
                </td>
                <td>{item.technicianDetails?.name}</td>
                <td className="whitespace-nowrap">{item.preferredDate}</td>
                <td className="whitespace-nowrap">
                  <span className="font-medium">${item.basePrice}</span>
                  <span className="block text-xs text-muted">Base price</span>
                </td>
                <td>
                  <span
                    className={`badge badge-soft ${getBookingStatusFromSlug(item.status).className} capitalize`}
                  >
                    {getBookingStatusFromSlug(item.status).title}
                  </span>
                </td>
                <td>
                  <span className="badge badge-outline">
                    {item.paymentStatus}
                  </span>
                </td>
                {/*<td className="text-right">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Cancel
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AdminBookingsPage;
