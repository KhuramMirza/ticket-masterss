"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- DATA: 7 LOCAL CARDS ---
const items = [
  {
    id: 1,
    category: "POP",
    title: "BTS",
    image: "/trending/bts.jpg",
  },
  {
    id: 2,
    category: "LATIN",
    title: "Peso Pluma",
    image: "/trending/peso.jpg",
  },
  {
    id: 3,
    category: "COUNTRY",
    title: "Chris Stapleton",
    image: "/trending/chris.jpg",
  },
  {
    id: 4,
    category: "POP",
    title: "Taylor Swift",
    image: "/trending/taylor.jpg",
  },
  {
    id: 5,
    category: "HIP HOP",
    title: "Drake",
    image: "/trending/drake.jpg",
  },
  {
    id: 6,
    category: "ROCK",
    title: "Metallica",
    image: "/trending/metallica.jpg",
  },
  {
    id: 7,
    category: "R&B",
    title: "The Weeknd",
    image: "/trending/weeknd.jpg",
  },
];

export default function TrendingCarousel() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Scroll Logic (Smooth)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll amount = Card Width (320px) + Gap (24px) = 344px
      const scrollAmount = 344;

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }

      // Update arrow visibility
      setTimeout(() => {
        setShowLeftArrow(current.scrollLeft > 0);
        setShowRightArrow(
          current.scrollLeft < current.scrollWidth - current.clientWidth - 10,
        );
      }, 500);
    }
  };

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight text-center md:text-left">
          TRENDING SEARCHES
        </h2>

        {/* Carousel Container */}
        <div className="relative group">
          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-[60%] -ml-5 z-20 bg-[#026CDF] text-white p-3 rounded-full shadow-xl hover:bg-blue-700 hover:scale-110 transition-all duration-300 ${!showLeftArrow ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-[60%] -mr-5 z-20 bg-[#026CDF] text-white p-3 rounded-full shadow-xl hover:bg-blue-700 hover:scale-110 transition-all duration-300 hidden md:flex ${!showRightArrow ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 pt-2 px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onScroll={(e) => {
              const target = e.currentTarget;
              setShowLeftArrow(target.scrollLeft > 0);
              setShowRightArrow(
                target.scrollLeft <
                  target.scrollWidth - target.clientWidth - 10,
              );
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="min-w-[280px] md:min-w-[320px] flex-shrink-0 cursor-pointer group/card"
              >
                {/* NEXT IMAGE AREA */}
                <div className="rounded-lg overflow-hidden h-48 w-full mb-3 relative shadow-sm border border-gray-100 group-hover/card:shadow-md transition-all">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Subtle Blue Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-900/0 group-hover/card:bg-blue-900/10 transition-colors duration-300"></div>
                </div>

                {/* Text Area */}
                <div className="space-y-1 px-1">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-bold text-[#026CDF] group-hover/card:underline underline-offset-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
