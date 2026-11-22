import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";

type TechnicianAcceptRejectModalProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function TechnicianAcceptRejectModal(props: TechnicianAcceptRejectModalProps) {
  const { className, ...rest } = props;

  return (
    <dialog
      id="reject_modal"
      className="modal modal-bottom sm:modal-middle"
      {...rest}
    >
      <div className="modal-box">
        <span className="grid size-12 place-items-center rounded-full bg-error/15 text-error">
          <svg className="size-6">
            <use href="#i-alert" />
          </svg>
        </span>
        <h3 className="heading-3 mt-4">Reject this request?</h3>
        <p className="mt-2 text-sm/6 text-muted">
          The customer will see it as rejected. A rejected request is final and
          can't be reopened.
        </p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button className="btn btn-ghost">Go back</button>
            <button className="btn btn-error">Reject request</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default TechnicianAcceptRejectModal;
