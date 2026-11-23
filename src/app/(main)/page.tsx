import Hero from "./_components/Hero";
import SectionFeatured from "./_components/SectionFeatured";
import SectionProcess from "./_components/SectionProcess";
import SectionCategories from "./_components/SectionCategories";
import SectionWhy from "./_components/SectionWhy";
import SectionCta from "./_components/SectionCta";
import SeedBtn from "@/components/layout/homepage/SeedBtn";

async function Homepage() {
  return (
    <>
      <Hero />
      <SectionFeatured elClassName="bg-base-200" />
      <SectionProcess />
      <SectionCategories elClassName="bg-base-200" />
      <SectionWhy />
      <SectionCta elClassName="bg-base-200" />
      <div className="px-6 py-4 bg-base-300 z-50 text-base-content text-center fixed bottom-0 w-full">
        If you would like to reset the Services, Bookings data you can{" "}
        <SeedBtn />
      </div>
    </>
  );
}
export default Homepage;
