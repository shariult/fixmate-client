import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import {
  PiDeviceMobileBold,
  PiMagnifyingGlassBold,
  PiShieldCheckBold,
  PiStarFill,
} from "react-icons/pi";
import Form from "next/form";

type HeroProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function Hero(props: HeroProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      el={"header"}
      className={`relative grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-24 ${className ? className : ""}`}
      elClassName={`overflow-x-clip ${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="min-w-0">
        <p className="heading-sub">Device &amp; appliance repair</p>
        <h1 className="heading-1 mt-4 wrap-break-word">
          Broken device? Get it fixed by verified technicians.
        </h1>
        <p className="mt-5 max-w-xl text-base/7 text-muted sm:text-lg/8">
          Book a technician, follow the job from request to completion, and pay
          online only after the work is delivered.
        </p>

        {/* <!-- Search → GET /services?search=... --> */}
        <Form
          action="/services"
          role="search"
          className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label className="input input-lg w-full min-w-0">
            <PiMagnifyingGlassBold />
            <input
              type="search"
              name="search"
              className="min-w-0"
              placeholder='Try "AC servicing" or "laptop"'
            />
          </label>
          <button type="submit" className="btn btn-primary btn-lg">
            Find a service
          </button>
        </Form>

        <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-base-300 pt-6 sm:gap-6">
          <div className="min-w-0">
            <dt className="text-xs text-muted sm:text-sm">
              Verified technicians
            </dt>
            <dd className="mt-1 font-title text-xl font-semibold sm:text-2xl">
              250+
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs text-muted sm:text-sm">Jobs completed</dt>
            <dd className="mt-1 font-title text-xl font-semibold sm:text-2xl">
              12,000+
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs text-muted sm:text-sm">Paid before work</dt>
            <dd className="mt-1 font-title text-xl font-semibold sm:text-2xl">
              Never
            </dd>
          </div>
        </dl>
      </div>

      {/* <!-- Hero visual: a live "job tracker" card — the product's core idea --> */}
      <div className="relative mx-auto w-full min-w-0 max-w-md px-3 sm:px-0">
        <div className="absolute inset-x-0 -inset-y-3 -rotate-2 rounded-3xl bg-primary/10 sm:-inset-3"></div>
        <div className="relative rounded-2xl border border-base-300 bg-base-50 p-4 shadow-xl sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary sm:size-12">
              <PiDeviceMobileBold className="text-xl sm:text-2xl" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-title text-base font-medium sm:text-lg">
                iPhone 14 screen replacement
              </p>
              <p className="truncate text-sm text-muted">
                Job #FM-1042 · Dhanmondi, Dhaka
              </p>
            </div>
            <span className="badge badge-soft badge-warning shrink-0 whitespace-nowrap">
              In Progress
            </span>
          </div>

          <ul className="steps mt-6 w-full text-[11px] sm:mt-8 sm:text-xs">
            <li className="step step-primary">Requested</li>
            <li className="step step-primary">Accepted</li>
            <li className="step step-primary">In Progress</li>
            <li className="step">Completed</li>
          </ul>

          <div className="mt-6 flex items-center gap-3 rounded-xl bg-base-100 p-3 sm:mt-8">
            <div className="avatar avatar-placeholder">
              <div className="w-10 rounded-full bg-secondary text-secondary-content">
                <span className="text-sm">RH</span>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Rafiq Hasan</p>
              <p className="flex items-center gap-1 text-xs text-muted">
                <PiStarFill className="shrink-0" />
                <span className="truncate">4.9 · Verified technician</span>
              </p>
            </div>
            <p className="shrink-0 font-title text-lg font-semibold">$49</p>
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            Pay Now unlocks only after the technician marks the job completed.
          </p>
        </div>

        <div className="absolute -left-4 bottom-10 hidden items-center gap-2 rounded-xl border border-base-300 bg-base-50 px-3 py-2 text-sm shadow-lg sm:flex">
          <PiShieldCheckBold className="text-lg text-primary" />
          Identity-checked
        </div>
      </div>
    </Container>
  );
}

export default Hero;
