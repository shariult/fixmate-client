import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type FooterItemProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"li">;

function FooterItem(props: FooterItemProps) {
  const { href, className, children, ...rest } = props;

  return (
    <li className={`${className ? className : ""}`} {...rest}>
      <Link className="link link-hover" href={href}>
        {children}
      </Link>
    </li>
  );
}

export default FooterItem;
