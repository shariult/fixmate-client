import Hero from "./_components/Hero";
import SectionFeatured from "./_components/SectionFeatured";
import SectionProcess from "./_components/SectionProcess";
import SectionCategories from "./_components/SectionCategories";
import SectionWhy from "./_components/SectionWhy";
import SectionCta from "./_components/SectionCta";
import { getTokenFromServer } from "@/lib/authActions";

async function Homepage() {
  const token = await getTokenFromServer();
  console.log(token);
  return (
    <>
      <Hero />
      <SectionFeatured elClassName="bg-base-200" />
      <SectionProcess />
      <SectionCategories elClassName="bg-base-200" />
      <SectionWhy />
      <SectionCta elClassName="bg-base-200" />
    </>
  );
}
export default Homepage;
