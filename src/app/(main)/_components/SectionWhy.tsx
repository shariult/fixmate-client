import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import {
  PiCreditCardBold,
  PiShieldBold,
  PiShieldCheckBold,
} from "react-icons/pi";

type SectionWhyProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionWhy(props: SectionWhyProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`grid items-center gap-12 lg:grid-cols-2 ${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <div>
        <h2 className="heading-2">Why people choose FixMate</h2>
        <p className="mt-4 max-w-lg text-muted">
          Handing over a device means trusting a stranger. We make that trust
          visible at every step.
        </p>
        <ul className="mt-8 space-y-5">
          <li className="flex gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <PiShieldBold className="text-2xl" />
            </span>
            <div>
              <h3 className="font-title text-lg font-medium">
                Every technician is verified
              </h3>
              <p className="mt-1 text-sm/6 text-muted">
                Services go live only after an admin has reviewed and approved
                them.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <PiShieldCheckBold className="text-2xl" />
            </span>
            <div>
              <h3 className="font-title text-lg font-medium">
                You always know the status
              </h3>
              <p className="mt-1 text-sm/6 text-muted">
                Requested, accepted, in progress, completed. No more guessing
                what happened to your device.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <PiCreditCardBold className="text-2xl" />
            </span>
            <div>
              <h3 className="font-title text-lg font-medium">
                Pay only after the job is done
              </h3>
              <p className="mt-1 text-sm/6 text-muted">
                The Pay Now button appears when your technician marks the repair
                completed.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
          <p className="font-title text-4xl font-semibold text-primary">250+</p>
          <p className="mt-2 text-sm text-muted">Verified technicians</p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
          <p className="font-title text-4xl font-semibold text-primary">12k+</p>
          <p className="mt-2 text-sm text-muted">Jobs completed</p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
          <p className="font-title text-4xl font-semibold text-primary">4.8</p>
          <p className="mt-2 text-sm text-muted">Average customer rating</p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
          <p className="font-title text-4xl font-semibold text-primary">100%</p>
          <p className="mt-2 text-sm text-muted">Pay after service</p>
        </div>
      </div>
    </Container>
  );
}

export default SectionWhy;
