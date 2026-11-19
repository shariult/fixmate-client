import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import {
  PiClockBold,
  PiCreditCardBold,
  PiHouseBold,
  PiMapPinBold,
} from "react-icons/pi";

type ServiceShowHeroLeftProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"article">;

function ServiceShowHeroLeft(props: ServiceShowHeroLeftProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      el={"article"}
      className={`${className ? className : ""}`}
      elClassName={`lg:col-span-2 ${elClassName ? elClassName : ""}`}
      spaceX="px-0"
      spaceY="py-0"
      {...rest}
    >
      <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-base-200">
        <img
          src="https://placehold.co/1280x720/dcfce7/166534?text=iPhone+Screen+Replacement"
          alt="iPhone Screen Replacement"
          className="size-full object-cover"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <span className="badge badge-soft badge-primary">Smartphone</span>
        <span className="badge badge-outline gap-1.5">
          <PiHouseBold />
          Home Visit
        </span>
      </div>

      <h1 className="heading-2 mt-4">iPhone Screen Replacement</h1>

      <p className="mt-5 max-w-3xl text-base/8 text-muted">
        Cracked or unresponsive display? Rafiq replaces the screen at your door
        using tested parts, checks Face ID, True Tone and touch response before
        leaving, and cleans up after the job. Pricing starts at the base price
        shown and is confirmed by the technician once the model is known.
      </p>

      {/* Quick facts */}
      <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-base-300 bg-base-50 p-4">
          <dt className="flex items-center gap-2 text-xs text-muted">
            <PiCreditCardBold className="text-base" />
            Starting price
          </dt>
          <dd className="mt-2 font-title text-lg font-semibold">$49</dd>
        </div>
        <div className="rounded-xl border border-base-300 bg-base-50 p-4">
          <dt className="flex items-center gap-2 text-xs text-muted">
            <PiClockBold className="text-base" />
            Duration
          </dt>
          <dd className="mt-2 font-title text-lg font-semibold">2-3 hours</dd>
        </div>
        <div className="rounded-xl border border-base-300 bg-base-50 p-4">
          <dt className="flex items-center gap-2 text-xs text-muted">
            <PiHouseBold className="text-base" />
            Service mode
          </dt>
          <dd className="mt-2 font-title text-lg font-semibold">Home Visit</dd>
        </div>
        <div className="rounded-xl border border-base-300 bg-base-50 p-4">
          <dt className="flex items-center gap-2 text-xs text-muted">
            <PiMapPinBold className="text-base" />
            Service area
          </dt>
          <dd className="mt-2 font-title text-lg font-semibold">
            Dhanmondi, Dhaka
          </dd>
        </div>
      </dl>

      {/* What happens next */}
      <div className="mt-10 rounded-2xl border border-base-300 bg-base-50 p-6">
        <h2 className="heading-3">What happens after you request</h2>
        <ul className="mt-4 space-y-3 text-sm/6 text-muted">
          <li className="flex gap-3">
            <svg className="mt-1 size-4 shrink-0 text-primary">
              <use href="#i-check" />
            </svg>
            The technician accepts or declines your request. You can cancel
            while it is still requested.
          </li>
          <li className="flex gap-3">
            <svg className="mt-1 size-4 shrink-0 text-primary">
              <use href="#i-check" />
            </svg>
            You follow the job as it moves to in progress and then completed.
          </li>
          <li className="flex gap-3">
            <svg className="mt-1 size-4 shrink-0 text-primary">
              <use href="#i-check" />
            </svg>
            After completion you pay the final amount securely with Stripe.
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default ServiceShowHeroLeft;
