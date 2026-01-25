import HeroSearch from "@/components/HeroSearch";
import TrendingCarousel from "@/components/TrendingCarousel";
import SponsoredEvents from "@/components/SponsoredEvents";
import CategorySection from "@/components/CategorySection";
import EntertainmentGuides from "@/components/EntertainmentGuides";
import DiscoverMore from "@/components/DiscoverMore";
import PopularCities from "@/components/PopularCities";

import { concertEvents } from "@/data/concertEvents";
import { sportsEvents } from "@/data/sportsEvents";
import { artsEvents } from "@/data/artsEvents";
import { familyEvents } from "@/data/familyEvents";

export default function Page() {
  return (
    <div className="text-4xl text-primary-500 mt-12">
      {/* Section 1: Hero Search */}
      <HeroSearch />

      {/* Section 2: Trending */}
      <TrendingCarousel />

      {/* Section 2: Sponsored */}
      <SponsoredEvents />

      <h2 className="text-center font-bold text-accent-500">
        Popular Near You
      </h2>

      {/* Section 4: Concerts */}
      <CategorySection
        id="concerts"
        title="Concerts"
        linkText="See All Concerts"
        events={concertEvents}
      />

      {/* Section 5: Sports */}
      <CategorySection
        id="sports"
        title="Sports"
        linkText="See All Sports"
        events={sportsEvents}
      />

      {/* Section 6: Arts, Theater & Comedy */}
      <CategorySection
        id="art"
        title="Arts, Theater & Comedy"
        linkText="See All Arts & Theater"
        events={artsEvents}
      />

      {/* Section 7: Family */}
      <CategorySection
        id="family"
        title="Family"
        linkText="See All Family"
        events={familyEvents}
      />

      {/* Section 8: Entertainment Guides */}
      <EntertainmentGuides />

      {/* Section 9: Discover More */}
      <DiscoverMore />

      {/* Section 10: Popular Cities */}
      <PopularCities />
    </div>
  );
}
