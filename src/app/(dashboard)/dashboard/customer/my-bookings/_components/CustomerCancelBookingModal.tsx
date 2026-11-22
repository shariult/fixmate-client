import React, { ComponentPropsWithoutRef } from "react";

type CustomerCancelBookingModalProps = {
  className?: string;
} & ComponentPropsWithoutRef<"dialog">;

function CustomerCancelBookingModal(props: CustomerCancelBookingModalProps) {
  const { className, ...rest } = props;

  return (
    <dialog
      id="cancel_modal"
      className={`modal modal-bottom sm:modal-middle ${className}`}
      {...rest}
    >
      <div className="modal-box">
        <span className="grid size-12 place-items-center rounded-full bg-error/15 text-error">
          <svg className="size-6">
            <use href="#i-alert" />
          </svg>
        </span>
        <h3 className="heading-3 mt-4">Cancel this request?</h3>
        <p className="mt-2 text-sm/6 text-muted">
          The technician won't be notified to start work. A cancelled request
          can't be reopened, but you can send a new one any time.
        </p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button className="btn btn-ghost">Keep request</button>
            <button className="btn btn-error">Yes, cancel request</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default CustomerCancelBookingModal;
