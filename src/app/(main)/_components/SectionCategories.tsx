import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import {
  PiArrowRightBold,
  PiDeviceMobileBold,
  PiFanBold,
  PiLaptopBold,
  PiLightningBold,
  PiTelevisionBold,
  PiThermometerColdBold,
  PiWashingMachineBold,
} from "react-icons/pi";
import Link from "next/link";

type SectionCategoriesProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionCategories(props: SectionCategoriesProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-2">Popular repair categories</h2>
        <p className="mt-3 text-muted">
          Pick a category to see only the services that match.
        </p>
      </div>

      {/* <!-- each links to /services?category=<value>  (encodeURIComponent for "Laptop & PC") --> */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Link
          href="services.html?category=Smartphone"
          className="group flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-50 p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <PiDeviceMobileBold className="text-3xl" />
          </span>
          <span className="font-title font-medium">Smartphone</span>
        </Link>
        <Link
          href="services.html?category=Laptop%20%26%20PC"
          className="group flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-50 p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <PiLaptopBold className="text-3xl" />
          </span>
          <span className="font-title font-medium">Laptop &amp; PC</span>
        </Link>
        <Link
          href="services.html?category=AC"
          className="group flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-50 p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <PiFanBold className="text-3xl" />
          </span>
          <span className="font-title font-medium">AC</span>
        </Link>
        <Link
          href="services.html?category=Refrigerator"
          className="group flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-50 p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <PiThermometerColdBold className="text-3xl" />
          </span>
          <span className="font-title font-medium">Refrigerator</span>
        </Link>
        <Link
          href="services.html?category=TV"
          className="group flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-50 p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <PiTelevisionBold className="text-3xl" />
          </span>
          <span className="font-title font-medium">TV</span>
        </Link>
        <Link
          href="services.html?category=Washing%20Machine"
          className="group flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-50 p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <PiWashingMachineBold className="text-3xl" />
          </span>
          <span className="font-title font-medium">Washing Machine</span>
        </Link>
        <Link
          href="services.html?category=Electrical"
          className="group flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-50 p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <PiLightningBold className="text-3xl" />
          </span>
          <span className="font-title font-medium">Electrical</span>
        </Link>
        <Link
          href="services.html"
          className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-base-300 p-6 text-center text-muted transition-colors hover:border-primary hover:text-primary"
        >
          <PiArrowRightBold className="text-3xl" />
          <span className="font-title font-medium">All services</span>
        </Link>
      </div>
    </Container>
  );
}

export default SectionCategories;
