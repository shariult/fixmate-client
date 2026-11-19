import React from "react";
import Link, { LinkProps } from "next/link";
import { PiWrenchBold } from "react-icons/pi";

type CompanyLogoProps = {
  children?: React.ReactNode;
  className?: string;
} & LinkProps;

function CompanyLogo(props: CompanyLogoProps) {
  const { className, href } = props;
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 text-sm md:text-md font-title ${className ? className : ""}`}
    >
      <PiWrenchBold className="text-3xl text-primary" />
      <p className="flex font-extrabold uppercase text-2xl">
        <span className="">Fix</span>
        <span className="text-primary">Mate</span>
      </p>
    </Link>
  );
}

export default CompanyLogo;
