import React from "react";
import {
  PiInstagramLogo,
  PiYoutubeLogo,
  PiXLogo,
  PiEnvelope,
  PiPhone,
  PiMapPin,
} from "react-icons/pi";
import Link from "next/link";
import CompanyLogo from "@/components/ui/common/CompanyLogo";
import FooterItem from "./FooterItem";
import FooterSocialLink from "./FooterSocialLink";

function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-330 mx-auto px-6 py-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <CompanyLogo href={"/"} className="mb-2" />
          <p className="text-sm text-muted/80 mb-6">
            Verified technicians for your phone, laptop and home appliances.
            Track every repair and pay only when the job is done.
          </p>
          <div className="flex gap-2">
            <FooterSocialLink href={"#"}>
              <PiXLogo className="text-lg" />
            </FooterSocialLink>

            <FooterSocialLink href={"#"}>
              <PiInstagramLogo className="text-lg" />
            </FooterSocialLink>

            <FooterSocialLink href={"#"}>
              <PiYoutubeLogo className="text-lg" />
            </FooterSocialLink>
          </div>
        </div>

        <div>
          <h6 className="footer-title">Quick Links</h6>
          <ul className="space-y-2 text-sm text-muted/80">
            <FooterItem href="/">Home</FooterItem>
            <FooterItem href="/services">Services</FooterItem>
            <FooterItem href="/about">About</FooterItem>
            <FooterItem href="/signup">Become a Technician</FooterItem>
          </ul>
        </div>

        <div>
          <h6 className="footer-title">Popular Categories</h6>
          <ul className="space-y-2 text-sm text-muted/80">
            <FooterItem href="/services?category=smartphone">
              Smartphone Repair
            </FooterItem>
            <FooterItem href="/services?category=laptop">
              Laptop &amp; PC
            </FooterItem>
            <FooterItem href="/services?category=ac">AC Servicing</FooterItem>
            <FooterItem href="/services?category=Refrigerator">
              Refrigerator
            </FooterItem>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h6 className="footer-title">Contact</h6>
            <ul className="space-y-2 text-sm text-muted/80">
              <FooterItem
                href="mailto:support@fixmate.com"
                linkClass="flex gap-2"
              >
                <PiEnvelope className="text-lg" />
                support@fixmate.com
              </FooterItem>
              <FooterItem href="tel:+8801700000000" linkClass="flex gap-2">
                <PiPhone className="text-lg" />
                +880 1700-000000
              </FooterItem>
              <FooterItem href="/services?category=ac" linkClass="flex gap-2">
                <PiMapPin className="text-lg" />
                House 12, Road 5, Dhanmondi, Dhaka 1205
              </FooterItem>
            </ul>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="bg-gray-50 dark:bg-gray-950 border-t border-base-300 py-4 text-center text-xs opacity-70">
        Copyright &copy; 2026{" "}
        <Link
          href={"https://shariul.com"}
          className="link link-hover text-primary"
        >
          Shariul
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
