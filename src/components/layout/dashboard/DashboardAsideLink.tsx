"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type DashboardAsideLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
} & LinkProps;

function DashboardAsideLink(props: DashboardAsideLinkProps) {
  const { label, href, icon, className, children, ...rest } = props;

  const urlPath = usePathname();
  const isActive = urlPath === href;

  return (
    <li>
      <Link
        href={href}
        className={`${isActive ? "bg-primary/10 text-primary" : ""} font-medium ${className ? className : ""}`}
        {...rest}
      >
        {icon}
        {label}
      </Link>
    </li>
  );
}

export default DashboardAsideLink;
