"use client";

import React, { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import Container from "@/components/ui/common/Container";
import { PiTrashBold } from "react-icons/pi";
import { destroyServiceAction } from "@/lib/serviceActions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type ServiceDeleteModalProps = {
  sId: string;
  onClose: () => void;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"dialog">, "onClose">;

function ServiceDeleteModal(props: ServiceDeleteModalProps) {
  const { sId, onClose, className, ...rest } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  async function deleteHandler() {
    const res = await destroyServiceAction(sId);
    if (!res.isSuccess) {
      toast.error("Could not delete service!");
      return;
    }
    onClose();
    toast.success("Service deleted successfully!");
    router.refresh();
  }

  return (
    <dialog
      id="delete_modal"
      className={`modal modal-bottom sm:modal-middle ${className}`}
      ref={dialogRef}
      onClose={onClose}
      {...rest}
    >
      <div className="modal-box">
        <span className="grid size-12 place-items-center rounded-full bg-error/15 text-error">
          <PiTrashBold />
        </span>
        <h3 className="heading-3 mt-4">Delete this service?</h3>
        <p className="mt-2 text-sm/6 text-muted">
          It will disappear from the Services page.
        </p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button className="btn btn-ghost">Keep service</button>
          </form>
          <button className="btn btn-error" onClick={deleteHandler}>
            Delete service
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default ServiceDeleteModal;
