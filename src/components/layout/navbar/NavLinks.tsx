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
        <Link className="text-base-content text-sm" href="/about-us">
          About Us
        </Link>
      </li>
    </>
  );
}

export default NavLinks;
