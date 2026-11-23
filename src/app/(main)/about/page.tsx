import React from "react";
import AboutHero from "./_components/AboutHero";
import SectionSolution from "./_components/SectionSolution";
import SectionHow from "./_components/SectionHow";
import SectionAudience from "./_components/SectionAudience";
import AboutCta from "./_components/AboutCta";
import SectionQuestions from "./_components/SectionQuestions";
import Container from "@/components/ui/common/Container";
import Breadcrumbs from "@/components/ui/common/Breadcrumbs";

function AboutPage() {
  const crumbs = [
    {
      id: 1,
      label: "About",
    },
  ];
  return (
    <>
      <Container spaceY="pt-6">
        <Breadcrumbs data={crumbs} />
      </Container>

      <AboutHero />
      <SectionSolution elClassName="bg-base-200" />
      <SectionHow />
      <SectionAudience elClassName="bg-base-200" />
      <SectionQuestions className="grid gap-10 lg:grid-cols-3" />
      <AboutCta elClassName="bg-base-200" className="text-center" />
    </>
  );
}

export default AboutPage;
