import HeroSearch from "@/components/HeroSearch";
import TrendingCarousel from "@/components/TrendingCarousel";
import SponsoredEvents from "@/components/SponsoredEvents";

export default function Page() {
  return (
    <div className="text-4xl text-primary-500">
      <HeroSearch />
      <TrendingCarousel />
      <SponsoredEvents />
    </div>
  );
}
