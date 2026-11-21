import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import {
  PiCheckBold,
  PiClockBold,
  PiCreditCardBold,
  PiHouseBold,
  PiMapPinBold,
} from "react-icons/pi";
import { TService } from "@/types";
import { getCategoryFromSlug, getServiceModeFromSlug } from "@/lib/utils";

type ServiceShowLeftProps = {
  service: TService;
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"article">;

function ServiceShowLeft(props: ServiceShowLeftProps) {
  const { service, className, elClassName, ...rest } = props;
  const category = getCategoryFromSlug(service.category);
  const { title: serviceModeTitle, icon: ServiceModeIcon } =
    getServiceModeFromSlug(service.serviceMode);

  return (
    <Container
      el={"article"}
      className={`${className ? className : ""}`}
      elClassName={`lg:col-span-2 ${elClassName ? elClassName : ""}`}
      spaceX="px-0"
      spaceY="py-0"
      {...rest}
    >
      <div className="aspect-video overflow-hidden rounded-2xl bg-base-200">
        <img
          src={service.image}
          alt={service.title}
          className="size-full object-cover"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <span className="badge badge-soft badge-primary">{category.title}</span>
        <span className="badge badge-outline gap-1.5">
          <ServiceModeIcon />
          {serviceModeTitle}
        </span>
      </div>

      <h1 className="heading-2 mt-4">{service.title}</h1>

      <p className="mt-5 max-w-3xl text-base/8 text-muted">
        {service.description}
      </p>

      {/* Quick facts */}
      <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-base-300 bg-base-50 p-4">
          <dt className="flex items-center gap-2 text-xs text-muted">
            <PiCreditCardBold className="text-base" />
            Starting price
          </dt>
          <dd className="mt-2 font-title text-lg font-semibold">
            ${service.basePrice}
          </dd>
        </div>
        <div className="rounded-xl border border-base-300 bg-base-50 p-4">
          <dt className="flex items-center gap-2 text-xs text-muted">
            <PiClockBold className="text-base" />
            Duration
          </dt>
          <dd className="mt-2 font-title text-lg font-semibold">
            {service.basePrice}
          </dd>
        </div>
        <div className="rounded-xl border border-base-300 bg-base-50 p-4">
          <dt className="flex items-center gap-2 text-xs text-muted">
            <PiHouseBold className="text-base" />
            Service mode
          </dt>
          <dd className="mt-2 font-title text-lg font-semibold">
            {serviceModeTitle}
          </dd>
        </div>
        <div className="rounded-xl border border-base-300 bg-base-50 p-4">
          <dt className="flex items-center gap-2 text-xs text-muted">
            <PiMapPinBold className="text-base" />
            Service area
          </dt>
          <dd className="mt-2 font-title text-lg font-semibold">
            {service.serviceArea}
          </dd>
        </div>
      </dl>

      {/* What happens next */}
      <div className="mt-10 rounded-2xl border border-base-300 bg-base-50 p-6">
        <h2 className="heading-3">What happens after you request</h2>
        <ul className="mt-4 space-y-3 text-sm/6 text-muted">
          <li className="flex gap-3">
            <PiCheckBold className="text-lg text-primary mt-1" />
            The technician accepts or declines your request. You can cancel
            while it is still requested.
          </li>
          <li className="flex gap-3">
            <PiCheckBold className="text-lg text-primary mt-1" />
            You follow the job as it moves to in progress and then completed.
          </li>
          <li className="flex gap-3">
            <PiCheckBold className="text-lg text-primary mt-1" />
            After completion you pay the final amount securely with Stripe.
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default ServiceShowLeft;
