"use client";

import Container from "@/components/ui/common/Container";
import ServiceShowHeroLeft from "./_components/ServiceShowHeroLeft";
import ServiceShowHeroRight from "./_components/ServiceShowHeroRight";

function ServiceDetailsPage() {
  return (
    <Container className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-12">
      <ServiceShowHeroLeft />
      <ServiceShowHeroRight />
    </Container>
  );
}

export default ServiceDetailsPage;
