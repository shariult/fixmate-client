import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import Link from "next/link";

type AboutCtaProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function AboutCta(props: AboutCtaProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <h2 className="heading-2">Ready to get something fixed?</h2>
      <p className="mx-auto mt-3 max-w-xl text-muted">
        Browse approved services or create a free account in under a minute.
      </p>
      <div className="btn-box mt-8 justify-center">
        <Link href="/services" className="btn btn-primary btn-lg">
          Browse services
        </Link>
        <Link href="/sign-up" className="btn btn-outline btn-lg">
          Create account
        </Link>
      </div>
    </Container>
  );
}

export default AboutCta;
