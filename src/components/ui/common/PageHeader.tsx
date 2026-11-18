import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import { TBreadCrumbs } from "@/types";
import Breadcrumbs from "./Breadcrumbs";

type PageHeaderProps = {
  crumbs: TBreadCrumbs[];
  heading: string;
  details?: string;
  className?: string;
} & ComponentPropsWithoutRef<"header">;

function PageHeader(props: PageHeaderProps) {
  const { heading, details, crumbs, className, ...rest } = props;

  return (
    <Container
      el={"header"}
      elClassName="bg-base-200"
      className={`${className ? className : ""}`}
      {...rest}
    >
      <Breadcrumbs data={crumbs} className="mb-8" />

      <h2 className="heading-2 capitalize">{heading}</h2>
      {details && <p className="text-muted">{details}</p>}
    </Container>
  );
}

export default PageHeader;
