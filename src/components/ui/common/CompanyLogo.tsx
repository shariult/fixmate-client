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
      className={`flex items-center gap-2 font-title ${className ? className : ""}`}
    >
      <PiWrenchBold className="text-lg md:text-2xl text-primary" />
      <p className="flex font-extrabold uppercase text-2xl">
        <span className="text-lg md:text-2xl ">Fix</span>
        <span className="text-lg md:text-2xl text-primary">Mate</span>
      </p>
    </Link>
  );
}

export default CompanyLogo;
