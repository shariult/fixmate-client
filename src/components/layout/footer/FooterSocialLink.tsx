import Link, { LinkProps } from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type FooterSocialLinkProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

function FooterSocialLink(props: FooterSocialLinkProps) {
  const { href, className, children, ...rest } = props;

  return (
    <Link
      href={href}
      className={`btn btn-circle btn-ghost p-2 border border-base-content hover:bg-primary hover:text-gray-50 hover:border-gray-50 ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default FooterSocialLink;
