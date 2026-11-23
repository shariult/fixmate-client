import React, { ComponentPropsWithoutRef } from "react";
import { PiXBold } from "react-icons/pi";
import Link from "next/link";
import { listServicesAction } from "@/lib/serviceActions";
import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";
import ServiceCard from "@/components/layout/service/ServiceCard";
import Pagination from "@/components/ui/common/Pagination";

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

  const services = resData.data.items;
  const pagination = resData.data.pagination;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
      spaceY="pt-6 pb-40"
    >
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

          <Pagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            urlQuery={urlQuery}
          />
        </>
      )}
    </Container>
  );
}

export default SectionServices;
