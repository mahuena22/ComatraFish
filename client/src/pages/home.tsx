import Hero from "@/components/sections/hero";
import StatsSection from "@/components/sections/stats";
import AgencyPreview from "@/components/sections/agency-preview";
import FeaturedProducts from "@/components/sections/featured-products";

export default function Home() {
  return (
    <main data-testid="page-home">
      <Hero />
      <StatsSection />
      <AgencyPreview />
      <FeaturedProducts />
    </main>
  );
}
