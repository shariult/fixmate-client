"use client";
import React, { ComponentPropsWithoutRef, useState } from "react";
import { TService, TServiceApproval } from "@/types";
import { getCategoryFromSlug } from "@/lib/utils";
import { updateServiceApprovalAction } from "@/lib/adminActions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AdminServiceRejectModal from "./AdminServiceRejectModal";

type AdminServicesTableProps = {
  services: TService[];
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function AdminServicesTable(props: AdminServicesTableProps) {
  const { services, className, ...rest } = props;
  const router = useRouter();
  const [serviceRejectId, setServiceRejectId] = useState<null | string>(null);

  async function approvalHandler(sId: string, approval: TServiceApproval) {
    const resData = await updateServiceApprovalAction(sId, approval);
    if (!resData.isSuccess) {
      toast.error("Something went wrong!");
      return;
    }

    toast.success("Service Updated successfully!");
    router.refresh();
  }
  return (
    <>
      <table
        className={`table min-w-4xl ${className ? className : ""}`}
        {...rest}
      >
        <thead>
          <tr className="text-muted">
            <th>Service</th>
            <th>Technician</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Approval</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => {
            return (
              <tr className="" key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-12 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-muted">
                        {getCategoryFromSlug(item.category).title}
                      </p>
                    </div>
                  </div>
                </td>
                <td>{item.userDetails?.name}</td>
                <td className="font-medium">${item.basePrice}</td>
                <td className="text-sm text-muted">
                  {item.isAvailable ? "Available" : "hidden"}
                </td>
                <td>
                  <span
                    className={`badge badge-soft ${item.approvalStatus === "approved" ? "badge-success" : item.approvalStatus === "pending" ? "badge-warning" : "badge-error"}`}
                  >
                    {item.approvalStatus}
                  </span>
                </td>
                <td>
                  <div className="flex gap-2 justify-end">
                    {item.approvalStatus !== "approved" && (
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={() => approvalHandler(item._id, "approved")}
                      >
                        Approve
                      </button>
                    )}
                    {item.approvalStatus !== "rejected" && (
                      <button
                        type="button"
                        className="btn btn-sm btn-outline btn-error"
                        onClick={() => setServiceRejectId(item._id)}
                      >
                        Reject
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {serviceRejectId && (
        <AdminServiceRejectModal
          onClose={() => setServiceRejectId(null)}
          sId={serviceRejectId}
        />
      )}
    </>
  );
}

export default AdminServicesTable;
