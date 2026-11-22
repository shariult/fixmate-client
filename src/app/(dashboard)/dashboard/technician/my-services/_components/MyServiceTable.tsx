"use client";

import React, { ChangeEvent, ComponentPropsWithoutRef, useState } from "react";
import { PiPencilSimpleBold, PiTrashBold } from "react-icons/pi";
import { TService } from "@/types";
import ServicesEditModal from "./ServicesEditModal";
import EmptyData from "@/components/ui/common/EmptyData";
import { getCategoryFromSlug, getServiceModeFromSlug } from "@/lib/utils";
import ServiceDeleteModal from "./ServiceDeleteModal";
import { updateServiceAvailabilityAction } from "@/lib/serviceActions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type MyServicesTableProps = {
  myServices: TService[];
  className?: string;
} & ComponentPropsWithoutRef<"table">;

const approvalBadge: Record<string, string> = {
  approved: "badge-success",
  pending: "badge-warning",
};

function MyServicesTable(props: MyServicesTableProps) {
  const { myServices, className = "", ...rest } = props;
  const [editService, setEditService] = useState<TService | null>(null);
  const [deleteService, setDeleteService] = useState<string | null>(null);
  const router = useRouter();

  async function availabilityChangeHandler(
    e: ChangeEvent<HTMLInputElement>,
    sId: string,
  ) {
    const resData = await updateServiceAvailabilityAction(sId, {
      isAvailable: e.target.checked,
    });
    if (!resData.isSuccess) {
      toast.error("Could not update service status!");
      return;
    }
    toast.success("Service status updated successfully!");
    router.refresh();
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className={`table ${className}`} {...rest}>
          <thead>
            <tr className="text-muted">
              <th>Service</th>
              <th>Category</th>
              <th>Price</th>
              <th>Approval</th>
              <th>Availability</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myServices.length === 0 && (
              <EmptyData message="No services yet! You can create new ones" />
            )}
            {myServices.length > 0 &&
              myServices.map((item) => (
                <tr key={item._id}>
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
                          {getServiceModeFromSlug(item.serviceMode)?.title} ·{" "}
                          {item.serviceArea}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>{getCategoryFromSlug(item.category)?.title}</td>
                  <td className="font-medium">${item.basePrice}</td>
                  <td>
                    <span
                      className={`badge badge-soft capitalize ${
                        approvalBadge[item.approvalStatus] ?? "badge-error"
                      }`}
                    >
                      {item.approvalStatus}
                    </span>
                  </td>
                  <td>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        className="toggle toggle-primary toggle-sm"
                        aria-label="Toggle availability"
                        defaultChecked={item.isAvailable}
                        onChange={(e) => availabilityChangeHandler(e, item._id)}
                      />
                      <span className="text-muted">
                        {item.isAvailable ? "Available" : "Hidden"}
                      </span>
                    </label>
                  </td>
                  <td>
                    <div className="flex justify-end gap-1">
                      <button
                        type="button"
                        className="btn btn-sm btn-ghost btn-square"
                        aria-label="Edit service"
                        onClick={() => setEditService(item)}
                      >
                        <PiPencilSimpleBold className="text-lg" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-ghost btn-square text-error"
                        aria-label="Delete service"
                        onClick={() => setDeleteService(item._id)}
                      >
                        <PiTrashBold className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {deleteService && (
        <ServiceDeleteModal
          key={deleteService}
          sId={deleteService}
          onClose={() => setDeleteService(null)}
        />
      )}

      {editService && (
        <ServicesEditModal
          key={editService._id}
          service={editService}
          onClose={() => setEditService(null)}
        />
      )}
    </>
  );
}

export default MyServicesTable;
