import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import {
  PiHouseBold,
  PiMapPinBold,
  PiStorefrontBold,
  PiUserBold,
} from "react-icons/pi";
import Link from "next/link";

type SectionFeaturedProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionFeatured(props: SectionFeaturedProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="heading-2">Latest repair services</h2>
          <p className="mt-3 max-w-xl text-muted">
            Freshly approved listings from verified technicians near you.
          </p>
        </div>
        <Link href="/services" className="btn btn-outline btn-primary">
          View all services
        </Link>
      </div>

      {/* <!-- services.slice(0, 6).map(s => <ServiceCard />) --> */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="card h-full overflow-hidden border border-base-300 bg-base-50 transition-colors hover:border-primary/50">
          <figure className="aspect-[4/3] bg-base-200">
            <img
              src="https://placehold.co/640x480/dcfce7/166534?text=iPhone+Screen+Replacement"
              alt="iPhone Screen Replacement"
              className="size-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="card-body gap-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="badge badge-soft badge-primary">Smartphone</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <PiHouseBold />
                Home Visit
              </span>
            </div>
            <h3 className="heading-3 line-clamp-2 min-h-14">
              iPhone Screen Replacement
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <PiUserBold />
                <span className="truncate">Rafiq Hasan</span>
              </li>
              <li className="flex items-center gap-2">
                <PiMapPinBold />
                <span className="truncate">Dhanmondi, Dhaka</span>
              </li>
            </ul>
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-base-300 pt-4">
              <p className="text-sm text-muted">
                From{" "}
                <span className="font-title text-xl font-semibold text-base-content">
                  $49
                </span>
              </p>
              <Link href="/services/01" className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          </div>
        </article>
        <article className="card h-full overflow-hidden border border-base-300 bg-base-50 transition-colors hover:border-primary/50">
          <figure className="aspect-[4/3] bg-base-200">
            <img
              src="https://placehold.co/640x480/dcfce7/166534?text=Samsung+Battery+Replacement"
              alt="Samsung Battery Replacement"
              className="size-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="card-body gap-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="badge badge-soft badge-primary">Smartphone</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <PiStorefrontBold />
                Shop Drop-off
              </span>
            </div>
            <h3 className="heading-3 line-clamp-2 min-h-14">
              Samsung Battery Replacement
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <PiUserBold />
                <span className="truncate">Rafiq Hasan</span>
              </li>
              <li className="flex items-center gap-2">
                <PiMapPinBold />
                <span className="truncate">Mirpur, Dhaka</span>
              </li>
            </ul>
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-base-300 pt-4">
              <p className="text-sm text-muted">
                From{" "}
                <span className="font-title text-xl font-semibold text-base-content">
                  $29
                </span>
              </p>
              <Link href="/services/01" className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          </div>
        </article>
        <article className="card h-full overflow-hidden border border-base-300 bg-base-50 transition-colors hover:border-primary/50">
          <figure className="aspect-[4/3] bg-base-200">
            <img
              src="https://placehold.co/640x480/e0e7ff/3730a3?text=Laptop+Keyboard+%26+Fan+Servicing"
              alt="Laptop Keyboard &amp; Fan Servicing"
              className="size-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="card-body gap-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="badge badge-soft badge-primary">
                Laptop &amp; PC
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <PiStorefrontBold />
                Shop Drop-off
              </span>
            </div>
            <h3 className="heading-3 line-clamp-2 min-h-14">
              Laptop Keyboard &amp; Fan Servicing
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <PiUserBold />
                <span className="truncate">Nadia Karim</span>
              </li>
              <li className="flex items-center gap-2">
                <PiMapPinBold />
                <span className="truncate">Uttara, Dhaka</span>
              </li>
            </ul>
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-base-300 pt-4">
              <p className="text-sm text-muted">
                From{" "}
                <span className="font-title text-xl font-semibold text-base-content">
                  $35
                </span>
              </p>
              <Link href="/services/01" className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          </div>
        </article>
        <article className="card h-full overflow-hidden border border-base-300 bg-base-50 transition-colors hover:border-primary/50">
          <figure className="aspect-[4/3] bg-base-200">
            <img
              src="https://placehold.co/640x480/e0e7ff/3730a3?text=Windows+Reinstall+%26+Data+Backup"
              alt="Windows Reinstall &amp; Data Backup"
              className="size-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="card-body gap-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="badge badge-soft badge-primary">
                Laptop &amp; PC
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <PiHouseBold />
                Home Visit
              </span>
            </div>
            <h3 className="heading-3 line-clamp-2 min-h-14">
              Windows Reinstall &amp; Data Backup
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <PiUserBold />
                <span className="truncate">Nadia Karim</span>
              </li>
              <li className="flex items-center gap-2">
                <PiMapPinBold />
                <span className="truncate">Gulshan, Dhaka</span>
              </li>
            </ul>
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-base-300 pt-4">
              <p className="text-sm text-muted">
                From{" "}
                <span className="font-title text-xl font-semibold text-base-content">
                  $25
                </span>
              </p>
              <Link href="/services/01" className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          </div>
        </article>
        <article className="card h-full overflow-hidden border border-base-300 bg-base-50 transition-colors hover:border-primary/50">
          <figure className="aspect-[4/3] bg-base-200">
            <img
              src="https://placehold.co/640x480/cffafe/155e75?text=Split+AC+Deep+Cleaning"
              alt="Split AC Deep Cleaning"
              className="size-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="card-body gap-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="badge badge-soft badge-primary">AC</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <PiHouseBold />
                Home Visit
              </span>
            </div>
            <h3 className="heading-3 line-clamp-2 min-h-14">
              Split AC Deep Cleaning
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <PiUserBold />
                <span className="truncate">Tanvir Ahmed</span>
              </li>
              <li className="flex items-center gap-2">
                <PiMapPinBold />
                <span className="truncate">Banani, Dhaka</span>
              </li>
            </ul>
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-base-300 pt-4">
              <p className="text-sm text-muted">
                From{" "}
                <span className="font-title text-xl font-semibold text-base-content">
                  $30
                </span>
              </p>
              <Link href="/services/01" className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          </div>
        </article>
        <article className="card h-full overflow-hidden border border-base-300 bg-base-50 transition-colors hover:border-primary/50">
          <figure className="aspect-[4/3] bg-base-200">
            <img
              src="https://placehold.co/640x480/cffafe/155e75?text=AC+Gas+Refill+%26+Leak+Check"
              alt="AC Gas Refill &amp; Leak Check"
              className="size-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="card-body gap-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="badge badge-soft badge-primary">AC</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <PiHouseBold />
                Home Visit
              </span>
            </div>
            <h3 className="heading-3 line-clamp-2 min-h-14">
              AC Gas Refill &amp; Leak Check
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <PiUserBold />
                <span className="truncate">Tanvir Ahmed</span>
              </li>
              <li className="flex items-center gap-2">
                <PiMapPinBold />
                <span className="truncate">Mohakhali, Dhaka</span>
              </li>
            </ul>
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-base-300 pt-4">
              <p className="text-sm text-muted">
                From{" "}
                <span className="font-title text-xl font-semibold text-base-content">
                  $55
                </span>
              </p>
              <Link href="/services/01" className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
}

export default SectionFeatured;
