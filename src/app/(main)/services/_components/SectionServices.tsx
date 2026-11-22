import React, { ComponentPropsWithoutRef } from "react";
import { PiXBold } from "react-icons/pi";
import Link from "next/link";
import { listServicesAction } from "@/lib/serviceActions";
import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";
import ServiceCard from "@/components/layout/service/ServiceCard";

type SectionServicesProps = {
  urlQuery: URLSearchParams;
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

async function SectionServices(props: SectionServicesProps) {
  const { urlQuery, className, elClassName, ...rest } = props;
  const resData = await listServicesAction(urlQuery.toString());

  if (!resData.isSuccess) {
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
      {/* <!-- 1 col mobile · 2 tablet · 3 desktop (use lg:grid-cols-4 if you prefer 4 per row) --> */}
      {services.length === 0 && (
        <Container elClassName="bg-base-200">
          <EmptyData message="No services found!" />
        </Container>
      )}

      {services.length > 0 && (
        <>
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
        </>
      )}
    </Container>
  );
}

export default SectionServices;
