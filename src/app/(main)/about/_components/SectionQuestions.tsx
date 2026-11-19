import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";

type SectionQuestionsProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionQuestions(props: SectionQuestionsProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <div>
        <h2 className="heading-2">Common questions</h2>
        <p className="mt-3 text-muted">
          Can&apos;t find your answer? Write to support@fixmate.com.
        </p>
      </div>
      <div className="space-y-3 lg:col-span-2">
        <div className="collapse collapse-arrow border border-base-300 bg-base-100">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title font-title font-medium">
            When do I pay?
          </div>
          <div className="collapse-content text-sm/6 text-muted">
            Only after the technician marks your job completed. Until then no
            payment is taken.
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100">
          <input type="radio" name="faq" />
          <div className="collapse-title font-title font-medium">
            Can I cancel a request?
          </div>
          <div className="collapse-content text-sm/6 text-muted">
            Yes, as long as it is still in the requested state. Once a
            technician accepts, the job can no longer be cancelled.
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100">
          <input type="radio" name="faq" />
          <div className="collapse-title font-title font-medium">
            Who sets the final price?
          </div>
          <div className="collapse-content text-sm/6 text-muted">
            The listing shows a starting price. The technician confirms the
            final amount when completing the job, and that is what you pay.
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100">
          <input type="radio" name="faq" />
          <div className="collapse-title font-title font-medium">
            How are technicians verified?
          </div>
          <div className="collapse-content text-sm/6 text-muted">
            Every service listing is reviewed by an admin. It stays hidden from
            customers until it is approved.
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SectionQuestions;
