import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";

type SectionAudienceProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionAudience(props: SectionAudienceProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <div className="max-w-2xl">
        <h2 className="heading-2">Built for three kinds of people</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
          <span className="badge badge-soft badge-primary">Customer</span>
          <ul className="mt-4 space-y-2 text-sm/6 text-muted">
            <li>Browse and compare approved services</li>
            <li>Send and track repair requests</li>
            <li>Cancel while a request is still open</li>
            <li>Pay for completed jobs and see history</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
          <span className="badge badge-soft badge-secondary">Technician</span>
          <ul className="mt-4 space-y-2 text-sm/6 text-muted">
            <li>List and manage repair services</li>
            <li>Accept or reject incoming requests</li>
            <li>Update job status as work progresses</li>
            <li>Set the final amount on completion</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
          <span className="badge badge-soft badge-accent">Admin</span>
          <ul className="mt-4 space-y-2 text-sm/6 text-muted">
            <li>Approve or reject service listings</li>
            <li>Manage users and roles</li>
            <li>Monitor every repair job</li>
            <li>Track Stripe transactions and revenue</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default SectionAudience;
