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
import { updateRequestStatusAction } from "@/lib/booking/bookingActions";
import toast from "react-hot-toast";

type TechnicianMarkCompletedModalProps = {
  booking: TBooking;
  onClose: () => void;
  className?: string;
} & ComponentPropsWithoutRef<"dialog">;

function TechnicianMarkCompletedModal(
  props: TechnicianMarkCompletedModalProps,
) {
  const { booking, onClose, className, ...rest } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [newPrice, setNewPrice] = useState(booking.price);
  const router = useRouter();

  function inputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setNewPrice(Number(e.target.value));
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  async function changeRequestStatusHandler() {
    const resData = await updateRequestStatusAction(booking._id, {
      status: "completed",
      price: newPrice,
    });
    if (!resData.isSuccess) {
      toast.error("Could not update request!");
      return;
    }
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
          Phone Water Damage Cleaning · Farhana Akter
        </p>
        <form className="mt-6" action="#" method="post">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Final amount (USD)</legend>
            <label className="input w-full">
              <span className="text-muted">$</span>
              <input
                type="number"
                name="finalAmount"
                min="0.01"
                step="0.01"
                value={newPrice}
                onChange={inputChangeHandler}
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
            <button type="button" className="btn btn-ghost">
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={changeRequestStatusHandler}
            >
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

export default TechnicianMarkCompletedModal;
