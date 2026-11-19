import React from "react";
import Link from "next/link";

function NavLinks() {
  return (
    <>
      <li>
        <Link className="text-base-content text-sm" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-base-content text-sm" href="/services">
          Services
        </Link>
      </li>
      <li>
        <Link className="text-base-content text-sm" href="/about">
          How It Works
        </Link>
      </li>
    </>
  );
}

export default NavLinks;
