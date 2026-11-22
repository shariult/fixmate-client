"use client";
import { cancelMyBookingAction } from "@/lib/booking/bookingActions";
import { TBooking } from "@/types";
import { useRouter } from "next/navigation";
import React, { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { PiWarningBold } from "react-icons/pi";

type CustomerCancelBookingModalProps = {
  bId: string;
  onClose: () => void;
  className?: string;
} & ComponentPropsWithoutRef<"dialog">;

function CustomerCancelBookingModal(props: CustomerCancelBookingModalProps) {
  const { bId, onClose, className, ...rest } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  async function cancelHandler() {
    const res = await cancelMyBookingAction(bId);
    if (!res.isSuccess) {
      toast.error("Could not cancel booking!");
      return;
    }
    onClose();
    toast.success("Booking cancelled successfully!");
    router.refresh();
  }

  return (
    <dialog
      id="cancel_modal"
      className={`modal modal-bottom sm:modal-middle ${className}`}
      onClose={onClose}
      ref={dialogRef}
      {...rest}
    >
      <div className="modal-box">
        <span className="grid size-12 place-items-center rounded-full bg-error/15 text-error">
          <PiWarningBold className="text-2xl" />
        </span>
        <h3 className="heading-3 mt-4">Cancel this request?</h3>
        <p className="mt-2 text-sm/6 text-muted">
          The technician won't be notified to start work. A cancelled request
          can't be reopened, but you can send a new one any time.
        </p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button className="btn btn-ghost">Keep request</button>
          </form>
          <button className="btn btn-error" onClick={cancelHandler}>
            Yes, cancel request
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default CustomerCancelBookingModal;
