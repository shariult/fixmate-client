"use client";

import React, { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { PiWarningBold, PiXBold } from "react-icons/pi";
import ServiceForm from "@/components/layout/service/ServiceForm";
import { TService } from "@/types";

type ServicesEditModalProps = {
  service: TService;
  onClose: () => void;
} & Omit<ComponentPropsWithoutRef<"dialog">, "onClose">;

function ServicesEditModal(props: ServicesEditModalProps) {
  const { service, onClose, className = "", ...rest } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Open on mount. The parent only renders this while a service is selected.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={`modal modal-bottom sm:modal-middle ${className}`}
      onClose={onClose} // fires for Esc, close button, and backdrop click
      {...rest}
    >
      <div className="modal-box max-w-2xl">
        <form method="dialog">
          <button
            className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3"
            aria-label="Close"
          >
            <PiXBold className="text-lg" />
          </button>
        </form>

        <h3 className="heading-3">Edit service</h3>

        <div
          role="alert"
          className="alert alert-soft alert-warning my-4 text-sm"
        >
          <PiWarningBold className="text-base" />
          <span>
            Saving changes sends this service back to Pending until an admin
            approves it again.
          </span>
        </div>

        {/* Adjust these props to match what ServiceForm actually accepts */}
        <ServiceForm
          submitType="update"
          service={service}
          onSuccess={() => dialogRef.current?.close()}
        />
      </div>

      <form method="dialog" className="modal-backdrop">
        <button aria-label="Close">close</button>
      </form>
    </dialog>
  );
}

export default ServicesEditModal;
