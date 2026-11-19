"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & LinkProps;

function NavLink(props: NavLinkProps) {
  const { href, className, children, ...rest } = props;

  const currentUrl = usePathname();
  let isActive = href.startsWith(currentUrl);

  if (currentUrl === "/") {
    isActive = href === currentUrl;
  }

  return (
    <li>
      <Link
        href={href}
        className={`text-base-content text-sm ${isActive ? "bg-primary text-primary-content" : ""} ${className ? className : ""}`}
        {...rest}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
