import React from "react";
import ServiceHero from "./_components/ServiceHero";
import SectionServices from "./_components/SectionServices";
type ServicesPageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
    mode?: string;
    sort?: string;
  }>;
};

async function ServicesPage(props: ServicesPageProps) {
  const {
    search = "",
    category = "",
    mode = "",
    sort = "newest",
  } = await props.searchParams;
  const urlQuery = new URLSearchParams({ search, category, mode, sort });

  return (
    <>
      <ServiceHero urlQuery={urlQuery} />
      <SectionServices urlQuery={urlQuery} />
    </>
  );
}

export default ServicesPage;
