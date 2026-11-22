"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { PiXBold } from "react-icons/pi";

type BookingModalInfoProps = {
  message: string;
  modalRef?: React.RefObject<HTMLDialogElement | null>;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"dialog">;

function BookingModalInfo(props: BookingModalInfoProps) {
  const { message, modalRef, className, children, ...rest } = props;

  return (
    <dialog
      ref={modalRef}
      className={`modal modal-bottom sm:modal-middle ${className ? className : ""}`}
      {...rest}
    >
      <div className="modal-box max-w-lg">
        <form method="dialog">
          <button
            className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3"
            aria-label="Close"
          >
            <PiXBold className="text-xl" />
          </button>
        </form>

        <h3 className="heading-3">Booking Unavailable!</h3>
        <p className="mt-1 text-sm text-muted">{message}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default BookingModalInfo;
