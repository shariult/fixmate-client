import React, { ComponentPropsWithoutRef } from "react";

type BookingModalProps = {
  modalRef?: React.RefObject<HTMLDialogElement | null>;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"dialog">;

function BookingModal(props: BookingModalProps) {
  const { modalRef, className, children, ...rest } = props;
  const today = new Date().toISOString().split("T")[0];

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
            <svg className="size-4">
              <use href="#i-close" />
            </svg>
          </button>
        </form>

        <h3 className="heading-3">Request a repair</h3>
        <p className="mt-1 text-sm text-muted">
          iPhone Screen Replacement · from $49
        </p>

        <form className="mt-6 space-y-4" action="#" method="post">
          <div className="grid gap-4 sm:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                className="input w-full bg-base-200"
                defaultValue="Rahim Uddin"
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                className="input w-full bg-base-200"
                defaultValue="rahim@example.com"
                readOnly
              />
            </fieldset>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Phone</legend>
              <input
                type="tel"
                name="customerPhone"
                className="input w-full"
                placeholder="01XXXXXXXXX"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Preferred date</legend>
              <input
                type="date"
                name="preferredDate"
                className="input w-full"
                min={today}
                required
              />
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Address</legend>
            <input
              type="text"
              name="address"
              className="input w-full"
              placeholder="House, road, area"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Problem description</legend>
            <textarea
              name="problemDescription"
              className="textarea h-28 w-full"
              minLength={20}
              placeholder="What is wrong with the device? (at least 20 characters)"
              required
            ></textarea>
          </fieldset>

          <div className="modal-action mt-6">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => modalRef?.current?.close()}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Send request
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

export default BookingModal;
