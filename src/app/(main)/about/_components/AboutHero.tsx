import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";

type AboutHeroProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function AboutHero(props: AboutHeroProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      el={"header"}
      className={className}
      elClassName={elClassName}
      spaceY="pt-12 pb-20"
      {...rest}
    >
      <p className="heading-sub">About FixMate</p>
      <h1 className="heading-1 mt-4 max-w-3xl">
        Repairs you can follow from request to receipt.
      </h1>
      <p className="mt-5 max-w-2xl text-lg/8 text-muted">
        Finding a trustworthy technician is hard, and handing over a device with
        no updates is worse. FixMate gives every job a clear status and moves
        payment to the end, after the work is delivered.
      </p>
    </Container>
  );
}

export default AboutHero;
