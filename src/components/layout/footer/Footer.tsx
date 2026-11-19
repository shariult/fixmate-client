import React from "react";
import Link from "next/link";
import { PiInstagramLogo, PiYoutubeLogo, PiXLogo } from "react-icons/pi";
import CompanyLogo from "@/components/ui/common/CompanyLogo";
import FooterItem from "./FooterItem";
import FooterSocialLink from "./FooterSocialLink";

function Footer() {
  return (
    <footer className="bg-base-100 border-t border-base-300">
      <div className="max-w-330 mx-auto px-6 py-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <CompanyLogo href={"/"} />
          <p className="text-sm text-muted/80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus, rerum natus. Quae illo pariatur modi praesentium?
          </p>
        </div>

        <div>
          <h6 className="footer-title">Quick Links</h6>
          <ul className="space-y-2 text-sm text-muted/80">
            <FooterItem href="/">Home</FooterItem>
            <FooterItem href="/about-us">About Us</FooterItem>
          </ul>
        </div>

        <div>
          <h6 className="footer-title">Legal</h6>
          <ul className="space-y-2 text-sm text-muted/80">
            <FooterItem href="/privacy-policy">Privacy Policy</FooterItem>
            <FooterItem href="/terms-of-use">Terms of Use</FooterItem>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h6 className="footer-title">Social Links</h6>
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
            <h6 className="footer-title">Newsletter</h6>
            <form className="flex w-full">
              <input
                type="email"
                required
                className="input input-bordered w-full rounded-e-none"
                placeholder="you@email.com"
              />
              <button className="btn bg-primary text-primary-content hover:bg-primary-hover rounded-s-none border-none">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="border-t border-base-300 py-4 text-center text-xs opacity-70">
        &copy; 2026 Shariul. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
