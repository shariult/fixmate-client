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
import { getServicesAction } from "@/lib/service/serviceActions";
import EmptyData from "@/components/ui/common/EmptyData";
import ServiceCard from "@/components/layout/service/ServiceCard";

type SectionServicesProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

async function SectionServices(props: SectionServicesProps) {
  const { className, elClassName, ...rest } = props;
  const resData = await getServicesAction();

  if (!resData.isSuccess || resData.data.length <= 0) {
    return (
      <Container elClassName="bg-base-200">
        <EmptyData message="No services found!" />
      </Container>
    );
  }

  const services = resData.data;

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
        {services.map((item) => (
          <ServiceCard key={item._id} service={item} />
        ))}
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
    </Container>
  );
}

export default SectionServices;
