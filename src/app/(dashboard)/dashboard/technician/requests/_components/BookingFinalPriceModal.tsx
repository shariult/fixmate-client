"use client";

import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { TBooking } from "@/types";
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
  const [finalAmount, setFinalAmount] = useState(String(booking.basePrice));
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const parsedAmount = Number(finalAmount);
  const isInvalid =
    finalAmount.trim() === "" ||
    !Number.isFinite(parsedAmount) ||
    parsedAmount <= 0;
  const [showError, setShowError] = useState(false);

  function inputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setFinalAmount(e.target.value);
    if (showError) setShowError(false);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  async function submitHandler(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLoading) return;
    if (isInvalid) {
      setShowError(true);
      return;
    }
    setIsLoading(true);
    const resData = await updateBookingStatusAction(booking._id, {
      status: "completed",
      finalAmount: parsedAmount,
    });

    if (!resData.isSuccess) {
      toast.error("Could not update request!");
      return;
    }

    toast.success("Request updated successfully!");
    router.refresh();
    onClose();
  }

  return (
    <dialog
      {...rest}
      id="complete_modal"
      className="modal modal-bottom sm:modal-middle"
      ref={dialogRef}
      onClose={onClose}
    >
      <div className="modal-box">
        <h3 className="heading-3">Mark job as completed</h3>
        <p className="mt-1 text-sm text-muted">
          {booking.serviceDetails?.title} · {booking.customerDetails?.name}
        </p>

        <form className="mt-6" onSubmit={submitHandler} noValidate>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Final amount (USD)</legend>
            <label className="input w-full">
              <span className="text-muted">$</span>
              <input
                type="number"
                name="finalAmount"
                min="0.01"
                step="0.01"
                inputMode="decimal"
                value={finalAmount}
                onChange={inputChangeHandler}
                disabled={isLoading}
              />
            </label>
            <p className="label">
              Pre-filled with the base price. This is what the customer will
              pay.
            </p>
            {showError && (
              <p className="mt-1 text-xs text-error">
                Enter an amount greater than 0.
              </p>
            )}
          </fieldset>

          <div className="modal-action">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading && <LoadingSpinner />}
              Mark completed
            </button>
          </div>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}

export default BookingFinalPriceModal;
