import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";

type SectionTemplateProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionTemplate(props: SectionTemplateProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <h2 className="heading-2 mb-4">Section Template Title</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi harum
        incidunt officia sed ab, quod perspiciatis aliquam nobis atque, aliquid
        hic natus vero odit, ipsam suscipit quas doloribus facilis cum!
      </p>
    </Container>
  );
}

export default SectionTemplate;
