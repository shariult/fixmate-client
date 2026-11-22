"use client";

import React, { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { PiXBold } from "react-icons/pi";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<"dialog">, "onClose">;

function Modal(props: ModalProps) {
  const { onClose, children, className = "", ...rest } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={`modal modal-bottom sm:modal-middle ${className}`}
      onClose={onClose}
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
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button aria-label="Close">close</button>
      </form>
    </dialog>
  );
}

export default Modal;
