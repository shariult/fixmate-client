import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import {
  PiHouseBold,
  PiMagnifyingGlassBold,
  PiMapPinBold,
  PiStorefrontBold,
  PiUserBold,
  PiXBold,
} from "react-icons/pi";
import Link from "next/link";

type SectionServicesProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function SectionServices(props: SectionServicesProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
      spaceY="pt-6 pb-40"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          Showing <span className="font-medium text-base-content">9</span>{" "}
          services
        </p>
        {/* <!-- Active filter chips (render only the ones that are set) --> */}
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-soft badge-primary gap-1.5 py-3">
            Category: AC
            <Link href="/services" aria-label="Remove filter">
              <PiXBold />
            </Link>
          </span>
        </div>
      </div>

      {/* <!-- 1 col mobile · 2 tablet · 3 desktop (use lg:grid-cols-4 if you prefer 4 per row) --> */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <Link href="/service/01" className="btn btn-primary btn-sm">
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
              <Link href="/service/01" className="btn btn-primary btn-sm">
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
              <Link href="/service/01" className="btn btn-primary btn-sm">
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
              <Link href="/service/01" className="btn btn-primary btn-sm">
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
              <Link href="/service/01" className="btn btn-primary btn-sm">
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
              <Link href="/service/01" className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          </div>
        </article>
        <article className="card h-full overflow-hidden border border-base-300 bg-base-50 transition-colors hover:border-primary/50">
          <figure className="aspect-[4/3] bg-base-200">
            <img
              src="https://placehold.co/640x480/e0f2fe/075985?text=Refrigerator+Compressor+Repair"
              alt="Refrigerator Compressor Repair"
              className="size-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="card-body gap-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="badge badge-soft badge-primary">
                Refrigerator
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <PiHouseBold />
                Home Visit
              </span>
            </div>
            <h3 className="heading-3 line-clamp-2 min-h-14">
              Refrigerator Compressor Repair
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <PiUserBold />
                <span className="truncate">Imran Hossain</span>
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
                  $70
                </span>
              </p>
              <Link href="/service/01" className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          </div>
        </article>
        <article className="card h-full overflow-hidden border border-base-300 bg-base-50 transition-colors hover:border-primary/50">
          <figure className="aspect-[4/3] bg-base-200">
            <img
              src="https://placehold.co/640x480/fae8ff/86198f?text=Smart+TV+Panel+Diagnosis"
              alt="Smart TV Panel Diagnosis"
              className="size-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="card-body gap-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="badge badge-soft badge-primary">TV</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <PiStorefrontBold />
                Shop Drop-off
              </span>
            </div>
            <h3 className="heading-3 line-clamp-2 min-h-14">
              Smart TV Panel Diagnosis
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <PiUserBold />
                <span className="truncate">Imran Hossain</span>
              </li>
              <li className="flex items-center gap-2">
                <PiMapPinBold />
                <span className="truncate">Farmgate, Dhaka</span>
              </li>
            </ul>
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-base-300 pt-4">
              <p className="text-sm text-muted">
                From{" "}
                <span className="font-title text-xl font-semibold text-base-content">
                  $40
                </span>
              </p>
              <Link href="/service/01" className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          </div>
        </article>
        <article className="card h-full overflow-hidden border border-base-300 bg-base-50 transition-colors hover:border-primary/50">
          <figure className="aspect-[4/3] bg-base-200">
            <img
              src="https://placehold.co/640x480/fef3c7/92400e?text=Front-Load+Washer+Repair"
              alt="Front-Load Washer Repair"
              className="size-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="card-body gap-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="badge badge-soft badge-primary">
                Washing Machine
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <PiHouseBold />
                Home Visit
              </span>
            </div>
            <h3 className="heading-3 line-clamp-2 min-h-14">
              Front-Load Washer Repair
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <PiUserBold />
                <span className="truncate">Sabbir Rahman</span>
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
                  $45
                </span>
              </p>
              <Link href="/service/01" className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          </div>
        </article>
      </div>

      {/* <!-- ===== Pagination (optional requirement: server-side .skip()/.limit()) ===== --> */}
      <div className="mt-12 flex justify-center">
        <div className="join">
          <a
            href="?page=1"
            className="join-item btn btn-sm"
            aria-disabled="true"
          >
            Previous
          </a>
          <a
            href="?page=1"
            className="join-item btn btn-sm btn-active btn-primary"
          >
            1
          </a>
          <Link href="?page=2" className="join-item btn btn-sm">
            2
          </Link>
          <Link href="?page=3" className="join-item btn btn-sm">
            3
          </Link>
          <Link href="?page=2" className="join-item btn btn-sm">
            Next
          </Link>
        </div>
      </div>

      {/* <!-- ===== EMPTY STATE (render this INSTEAD of the grid when results.length === 0) ===== --> */}
      <div
        className="mt-16 hidden rounded-2xl border border-dashed border-base-300 bg-base-50 px-6 py-16 text-center"
        id="empty-state-demo"
      >
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-base-200 text-muted">
          <PiMagnifyingGlassBold />
        </span>
        <h2 className="mt-5 font-title text-xl font-medium">
          No services match your search
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm/6 text-muted">
          Try a different keyword, or clear the filters to see every available
          repair service.
        </p>
        <Link href="/services" className="btn btn-primary mt-6">
          Clear filters
        </Link>
      </div>
    </Container>
  );
}

export default SectionServices;
