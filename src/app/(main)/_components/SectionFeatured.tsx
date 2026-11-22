import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import {
  PiHouseBold,
  PiMapPinBold,
  PiStorefrontBold,
  PiUserBold,
} from "react-icons/pi";
import Link from "next/link";
import { getServicesAction } from "@/lib/serviceActions";
import EmptyData from "@/components/ui/common/EmptyData";
import ServiceCard from "@/components/layout/service/ServiceCard";

type SectionFeaturedProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

async function SectionFeatured(props: SectionFeaturedProps) {
  const { className, elClassName, ...rest } = props;
  const resData = await getServicesAction("?type=featured");

  if (!resData.isSuccess || resData.data.length <= 0) {
    return (
      <Container elClassName="bg-base-200">
        <EmptyData message="No Services found!" hideBtn />
      </Container>
    );
  }

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
        {resData.data.map((item) => (
          <ServiceCard key={item._id} service={item} />
        ))}
      </div>
    </Container>
  );
}

export default SectionFeatured;
