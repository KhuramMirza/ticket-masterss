import HeroSearch from "@/components/HeroSearch";
import TrendingCarousel from "@/components/TrendingCarousel";
import SponsoredEvents from "@/components/SponsoredEvents";
import CategorySection from "@/components/CategorySection";
import EntertainmentGuides from "@/components/EntertainmentGuides";
import DiscoverMore from "@/components/DiscoverMore";

import { concertEvents } from "@/data/concertEvents";
import { sportsEvents } from "@/data/sportsEvents";
import { artsEvents } from "@/data/artsEvents";
import { familyEvents } from "@/data/familyEvents";

export default function Page() {
  return (
    <div className="text-4xl text-primary-500 mt-12">
      <HeroSearch />
      <TrendingCarousel />
      <SponsoredEvents />

      {/* Section 2: Concerts (New!) */}
      <h2 className="text-center font-bold text-accent-500">
        Popular Near You
      </h2>
      <CategorySection
        id="concerts"
        title="Concerts"
        linkText="See All Concerts"
        events={concertEvents}
      />

      {/* Section 3: Sports (New!) */}
      <CategorySection
        id="sports"
        title="Sports"
        linkText="See All Sports"
        events={sportsEvents}
      />

      {/* Section 4: Arts, Theater & Comedy (New!) */}
      <CategorySection
        id="art"
        title="Arts, Theater & Comedy"
        linkText="See All Arts & Theater"
        events={artsEvents}
      />

      {/* Section 5: Family (New!) */}
      <CategorySection
        id="family"
        title="Family"
        linkText="See All Family"
        events={familyEvents}
      />

      {/* Section 5: Entertainment Guides */}
      <EntertainmentGuides />

      {/* Section 6: Discover More */}
      <DiscoverMore />
    </div>
  );
}
