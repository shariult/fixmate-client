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
import { categories } from "@/data/appData";

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

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              href={`/services?category=${category.slug}`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-50 p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
              key={category.id}
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="text-3xl" />
              </span>
              <span className="font-title font-medium">{category.title}</span>
            </Link>
          );
        })}

        <Link
          href="/services"
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
