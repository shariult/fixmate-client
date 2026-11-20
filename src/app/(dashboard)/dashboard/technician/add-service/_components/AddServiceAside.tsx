import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import { PiCheckBold } from "react-icons/pi";

type AddServiceAsideProps = {
  className?: string;
} & ComponentPropsWithoutRef<"aside">;

function AddServiceAside(props: AddServiceAsideProps) {
  const { className, ...rest } = props;

  return (
    <aside
      className={`space-y-4 xl:col-span-1 ${className ? className : ""}`}
      {...rest}
    >
      <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
        <h2 className="heading-3">What happens next</h2>
        <ul className="mt-4 space-y-3 text-sm/6 text-muted">
          <li className="flex gap-3">
            <PiCheckBold className="text-primary text-base mt-1" />
            Your service is saved as
            <span className="badge badge-soft badge-warning badge-sm">
              Pending
            </span>
          </li>
          <li className="flex gap-3">
            <PiCheckBold className="text-primary text-base mt-1" />
            An admin approves or rejects it
          </li>
          <li className="flex gap-3">
            <PiCheckBold className="text-primary text-base mt-1" />
            Once approved it appears on the Services page
          </li>
          <li className="flex gap-3">
            <PiCheckBold className="text-primary text-base mt-1" />
            Editing a service later sends it back for review
          </li>
        </ul>
      </div>
      <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
        <h2 className="heading-3">Tips for a good listing</h2>
        <ul className="mt-4 space-y-3 text-sm/6 text-muted">
          <li>Use a clear photo of the device or your workspace.</li>
          <li>
            Set a base price you can honestly start from. You confirm the final
            amount after the job.
          </li>
          <li>
            Name the exact areas you cover so customers know you can reach them.
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default AddServiceAside;
