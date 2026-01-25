"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

// --- MOCK DATA: CITIES ---
const cities = [
  { id: 1, name: "New York City", image: "/city/ny.webp" },
  { id: 2, name: "Los Angeles", image: "/city/la.jpg" },
  { id: 3, name: "Las Vegas", image: "/city/lv.webp" },
  { id: 4, name: "Chicago", image: "/city/chicago.webp" },
  { id: 5, name: "Atlanta", image: "/city/atlanta.jpg" },
  { id: 6, name: "Miami", image: "/city/miami.jpg" },
];

export default function PopularCities() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
      setTimeout(() => {
        setShowLeft(current.scrollLeft > 0);
        setShowRight(
          current.scrollLeft < current.scrollWidth - current.clientWidth - 10,
        );
      }, 500);
    }
  };

  return (
    <section
      className="py-12 bg-white border-b border-gray-100 scroll-mt-24"
      id="cities"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* CENTERED HEADER */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-tight text-center">
          POPULAR CITIES
        </h2>

        {/* CAROUSEL CONTAINER */}
        <div className="relative group">
          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white border border-gray-200 text-[#026CDF] p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all ${!showLeft ? "hidden" : "flex"}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-[#026CDF] text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all hidden md:flex ${!showRight ? "hidden" : "flex"}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* CITIES ROW */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={(e) => {
              setShowLeft(e.currentTarget.scrollLeft > 0);
              setShowRight(
                e.currentTarget.scrollLeft <
                  e.currentTarget.scrollWidth -
                    e.currentTarget.clientWidth -
                    10,
              );
            }}
          >
            {cities.map((city) => (
              <div
                key={city.id}
                className="min-w-[280px] md:min-w-[300px] flex-shrink-0 cursor-pointer group/city"
              >
                {/* IMAGE */}
                <div className="relative h-40 w-full rounded-lg overflow-hidden mb-3 border border-gray-100 shadow-sm">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover/city:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover/city:bg-black/10 transition-colors"></div>
                </div>

                {/* CITY NAME */}
                <h3 className="text-lg font-bold text-gray-900 group-hover/city:text-[#026CDF] transition-colors">
                  {city.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
