import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";

type SectionHowProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionHow(props: SectionHowProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <SectionTitle
        heading="How a repair works"
        headingText="The same six steps, every time."
      />

      <ol className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
        <li className="flex gap-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-title font-semibold text-primary-content">
            1
          </span>
          <div>
            <h3 className="heading-3">Sign up with the right role</h3>
            <p className="mt-1 text-sm/6 text-muted">
              Join as a customer to book repairs, or as a technician to offer
              them.
            </p>
          </div>
        </li>
        <li className="flex gap-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-title font-semibold text-primary-content">
            2
          </span>
          <div>
            <h3 className="heading-3">Technicians list services</h3>
            <p className="mt-1 text-sm/6 text-muted">
              Each listing waits for admin approval before customers can see it.
            </p>
          </div>
        </li>
        <li className="flex gap-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-title font-semibold text-primary-content">
            3
          </span>
          <div>
            <h3 className="heading-3">Customers send a request</h3>
            <p className="mt-1 text-sm/6 text-muted">
              Browse, search and filter, then share your address, date and the
              problem.
            </p>
          </div>
        </li>
        <li className="flex gap-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-title font-semibold text-primary-content">
            4
          </span>
          <div>
            <h3 className="heading-3">The job moves step by step</h3>
            <p className="mt-1 text-sm/6 text-muted">
              Requested, accepted, in progress, completed. The technician sets
              the final amount.
            </p>
          </div>
        </li>
        <li className="flex gap-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-title font-semibold text-primary-content">
            5
          </span>
          <div>
            <h3 className="heading-3">Pay after completion</h3>
            <p className="mt-1 text-sm/6 text-muted">
              A Pay Now button appears on completed jobs. Checkout is handled by
              Stripe.
            </p>
          </div>
        </li>
        <li className="flex gap-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-title font-semibold text-primary-content">
            6
          </span>
          <div>
            <h3 className="heading-3">Everything stays on record</h3>
            <p className="mt-1 text-sm/6 text-muted">
              Bookings and payments remain in your dashboard for reference.
            </p>
          </div>
        </li>
      </ol>
    </Container>
  );
}

export default SectionHow;
