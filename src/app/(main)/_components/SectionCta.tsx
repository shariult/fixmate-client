import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import Link from "next/link";

type SectionCtaProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionCta(props: SectionCtaProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-8 text-primary-content md:flex-row md:items-center md:p-12">
        <div className="max-w-xl">
          <h2 className="heading-2">Are you a repair technician?</h2>
          <p className="mt-3 text-primary-content/80">
            List your services, receive requests from nearby customers and
            manage every job from one dashboard.
          </p>
        </div>
        <div className="btn-box flex-wrap">
          <Link href="/signup" className="btn btn-neutral btn-lg">
            Join as a technician
          </Link>
          <Link href="/services" className="btn btn-neutral btn-outline btn-lg">
            Browse services
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default SectionCta;
