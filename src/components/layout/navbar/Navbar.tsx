import React from "react";
import CompanyLogo from "@/components/ui/common/CompanyLogo";
import NavMobile from "@/components/layout/navbar/NavMobile";
import NavCenter from "@/components/layout/navbar/NavCenter";
import NavEnd from "@/components/layout/navbar/NavEnd";

function Navbar() {
  return (
    <nav className="bg-base-50 dark:bg-base-200 shadow-sm sticky top-0 left-0 z-40 opacity-95">
      <div className="navbar max-w-330 mx-auto px-6">
        <div className="navbar-start">
          <NavMobile />
          <CompanyLogo href="/" />
        </div>
        <NavCenter />
        <NavEnd />
      </div>
    </nav>
  );
}

export default Navbar;
