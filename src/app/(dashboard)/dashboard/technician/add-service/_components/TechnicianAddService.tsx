import ServiceForm from "@/components/layout/service/ServiceForm";
import React, { ComponentPropsWithoutRef } from "react";

type TechnicianAddServiceProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function TechnicianAddService(props: TechnicianAddServiceProps) {
  const { className, ...rest } = props;

  return (
    <main className="flex-1 p-4 md:p-8">
      <div>
        <h1 className="heading-2">Add a service</h1>
        <p className="mt-1 text-muted">
          Describe what you repair. An admin reviews every service before
          customers can see it.
        </p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        <ServiceForm technician={{ name: "", email: "" }} />

        <aside className="space-y-4 xl:col-span-1">
          <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
            <h2 className="heading-3">What happens next</h2>
            <ul className="mt-4 space-y-3 text-sm/6 text-muted">
              <li className="flex gap-3">
                <svg className="mt-1 size-4 shrink-0 text-primary">
                  <use href="#i-check" />
                </svg>
                Your service is saved as{" "}
                <span className="badge badge-soft badge-warning badge-sm">
                  Pending
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="mt-1 size-4 shrink-0 text-primary">
                  <use href="#i-check" />
                </svg>
                An admin approves or rejects it
              </li>
              <li className="flex gap-3">
                <svg className="mt-1 size-4 shrink-0 text-primary">
                  <use href="#i-check" />
                </svg>
                Once approved it appears on the Services page
              </li>
              <li className="flex gap-3">
                <svg className="mt-1 size-4 shrink-0 text-primary">
                  <use href="#i-check" />
                </svg>
                Editing a service later sends it back for review
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
            <h2 className="heading-3">Tips for a good listing</h2>
            <ul className="mt-4 space-y-3 text-sm/6 text-muted">
              <li>Use a clear photo of the device or your workspace.</li>
              <li>
                Set a base price you can honestly start from. You confirm the
                final amount after the job.
              </li>
              <li>
                Name the exact areas you cover so customers know you can reach
                them.
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default TechnicianAddService;
