"use client";
import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import { TService, TServiceApproval, TServiceInput } from "@/types";
import { getCategoryFromSlug } from "@/lib/utils";
import {
  updateServiceAction,
  updateServiceApprovalAction,
} from "@/lib/service/serviceActions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type AdminServicesTableProps = {
  services: TService[];
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function AdminServicesTable(props: AdminServicesTableProps) {
  const { services, className, ...rest } = props;
  const router = useRouter();

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
    <table className="table min-w-[56rem]">
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
            <tr className="bg-warning/5" key={item._id}>
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
                {item.status === "active" ? "Available" : "hidden"}
              </td>
              <td>
                <span
                  className={`badge badge-soft ${item.approval === "approved" ? "badge-success" : item.approval === "pending" ? "badge-warning" : "badge-error"}`}
                >
                  {item.approval}
                </span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  {item.approval !== "approved" && (
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      onClick={() => approvalHandler(item._id, "approved")}
                    >
                      Approve
                    </button>
                  )}
                  {item.approval !== "rejected" && (
                    <button
                      type="button"
                      className="btn btn-sm btn-outline btn-error"
                      onClick={() => approvalHandler(item._id, "rejected")}
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
  );
}

export default AdminServicesTable;
