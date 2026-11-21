import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";

type ServicesDeleteModalProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function ServicesDeleteModal(props: ServicesDeleteModalProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <span className="grid size-12 place-items-center rounded-full bg-error/15 text-error">
          <svg className="size-6">
            <use href="#i-trash" />
          </svg>
        </span>
        <h3 className="heading-3 mt-4">Delete this service?</h3>
        <p className="mt-2 text-sm/6 text-muted">
          It will disappear from the Services page. Existing bookings keep their
          copied details, so past jobs still display correctly.
        </p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button className="btn btn-ghost">Keep service</button>
            <button className="btn btn-error">Delete service</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default ServicesDeleteModal;
