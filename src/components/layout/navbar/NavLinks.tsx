import React from "react";
import NavLink from "./NavLink";

function NavLinks() {
  return (
    <>
      <NavLink href={"/"}>Home</NavLink>
      <NavLink href={"/services"}>Services</NavLink>
      <NavLink href={"/about"}>How It Works</NavLink>
    </>
  );
}

export default NavLinks;
