"use client";

import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import Container from "@/components/ui/common/Container";
import { useRouter } from "next/navigation";
import { TBooking, TBookingStatus } from "@/types";
import { updateBookingStatusAction } from "@/lib/bookingActions";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/ui/common/LoadingSpinner";

type BookingFinalPriceModalProps = {
  booking: TBooking;
  onClose: () => void;
  className?: string;
} & ComponentPropsWithoutRef<"dialog">;

function BookingFinalPriceModal(props: BookingFinalPriceModalProps) {
  const { booking, onClose, className, ...rest } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [finalAmount, setFinalAmount] = useState(booking.basePrice);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function inputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setFinalAmount(Number(e.target.value));
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  async function changeRequestStatusHandler() {
    setIsLoading(true);
    const resData = await updateBookingStatusAction(booking._id, {
      status: "completed",
      finalAmount: finalAmount,
    });
    if (!resData.isSuccess) {
      toast.error("Could not update request!");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    toast.success("Request updated successfully!");
    router.refresh();
  }

  return (
    <dialog
      id="complete_modal"
      className="modal modal-bottom sm:modal-middle"
      ref={dialogRef}
      onClose={onClose}
      {...rest}
    >
      <div className="modal-box">
        <h3 className="heading-3">Mark job as completed</h3>
        <p className="mt-1 text-sm text-muted">
          {booking.serviceDetails?.title} · {booking.customerDetails?.name}
        </p>
        <form className="mt-6" method="post">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Final amount (USD)</legend>
            <label className="input w-full">
              <span className="text-muted">$</span>
              <input
                type="number"
                name="finalAmount"
                min="0.01"
                step="0.01"
                value={finalAmount}
                onChange={inputChangeHandler}
                disabled={isLoading}
              />
            </label>
            <p className="label">
              Pre-filled with the base price. This is what the customer will
              pay.
            </p>
            <p className="mt-1 hidden text-xs text-error">
              Enter an amount greater than 0.
            </p>
          </fieldset>
          <div className="modal-action">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={changeRequestStatusHandler}
            >
              {isLoading && <LoadingSpinner />}
              Mark completed
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default BookingFinalPriceModal;
