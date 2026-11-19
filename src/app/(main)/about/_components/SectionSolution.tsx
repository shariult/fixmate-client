import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import { PiCheckBold, PiXBold } from "react-icons/pi";

type SectionSolutionProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionSolution(props: SectionSolutionProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <div className="container-x grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-base-300 bg-base-50 p-8">
          <h2 className="heading-3">The problem</h2>
          <ul className="mt-5 space-y-3 text-sm/6 text-muted">
            <li className="flex gap-3 items-center">
              <PiXBold className="text-error text-base" />
              Customers cannot tell who is trustworthy.
            </li>
            <li className="flex gap-3 items-center">
              <PiXBold className="text-error text-base" />
              After handing over a device there are no updates.
            </li>
            <li className="flex gap-3 items-center">
              <PiXBold className="text-error text-base" />
              Payment often happens before any work is done.
            </li>
            <li className="flex gap-3 items-center">
              <PiXBold className="text-error text-base" />
              Skilled technicians have no structured place to show services and
              manage jobs.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
          <h2 className="heading-3">What FixMate changes</h2>
          <ul className="mt-5 space-y-3 text-sm/6 text-muted">
            <li className="flex gap-3 items-center">
              <PiCheckBold className="text-primary text-base" />
              Admins approve every service before it appears publicly.
            </li>
            <li className="flex gap-3 items-center">
              <PiCheckBold className="text-primary text-base" />
              Each job moves through clear steps you can track.
            </li>
            <li className="flex gap-3 items-center">
              <PiCheckBold className="text-primary text-base" />
              You pay with Stripe only after the job is completed.
            </li>
            <li className="flex gap-3 items-center">
              <PiCheckBold className="text-primary text-base" />
              Technicians get one dashboard for services, requests and earnings.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default SectionSolution;
