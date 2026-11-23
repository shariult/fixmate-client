import React from "react";
import ServiceHero from "./_components/ServiceHero";
import SectionServices from "./_components/SectionServices";
type ServicesPageProps = {
  searchParams: Promise<{
    page?: string;
    search?: string;
    category?: string;
    mode?: string;
    sort?: string;
  }>;
};

async function ServicesPage(props: ServicesPageProps) {
  const {
    page = "1",
    search = "",
    category = "",
    mode = "",
    sort = "newest",
  } = await props.searchParams;
  const urlQuery = new URLSearchParams({ page, search, category, mode, sort });

  return (
    <>
      <ServiceHero urlQuery={urlQuery} />
      <SectionServices urlQuery={urlQuery} />
    </>
  );
}

export default ServicesPage;
