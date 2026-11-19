import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import {
  PiClipboardTextBold,
  PiCreditCardBold,
  PiMagnifyingGlassBold,
  PiWrenchBold,
} from "react-icons/pi";

type SectionProcessProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionProcess(props: SectionProcessProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-2">How FixMate works</h2>
        <p className="mt-3 text-muted">
          Four steps, and you only pay at the end.
        </p>
      </div>

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li className="relative rounded-2xl border border-base-300 bg-base-100 p-6">
          <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-content">
            <PiMagnifyingGlassBold className="text-2xl" />
          </span>
          <h3 className="heading-3 mt-5">Find a service</h3>
          <p className="mt-2 text-sm/6 text-muted">
            Search by device or category and compare approved technicians,
            prices and service areas.
          </p>
        </li>
        <li className="relative rounded-2xl border border-base-300 bg-base-100 p-6">
          <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-content">
            <PiClipboardTextBold className="text-2xl" />
          </span>
          <h3 className="heading-3 mt-5">Send a request</h3>
          <p className="mt-2 text-sm/6 text-muted">
            Describe the problem, add your address and pick a date. Cancel any
            time before it is accepted.
          </p>
        </li>
        <li className="relative rounded-2xl border border-base-300 bg-base-100 p-6">
          <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-content">
            <PiWrenchBold className="text-2xl" />
          </span>
          <h3 className="heading-3 mt-5">Technician fixes it</h3>
          <p className="mt-2 text-sm/6 text-muted">
            Follow the job from accepted to in progress to completed, with the
            final amount confirmed.
          </p>
        </li>
        <li className="relative rounded-2xl border border-base-300 bg-base-100 p-6">
          <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-content">
            <PiCreditCardBold className="text-2xl" />
          </span>
          <h3 className="heading-3 mt-5">Pay after completion</h3>
          <p className="mt-2 text-sm/6 text-muted">
            Pay securely with Stripe once the work is delivered. Not a taka
            before.
          </p>
        </li>
      </ol>
    </Container>
  );
}

export default SectionProcess;
