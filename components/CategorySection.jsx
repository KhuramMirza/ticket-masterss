"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";

export default function CategorySection({ title, events, linkText, id }) {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Scroll by one card width approx
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
      className="py-8 bg-white border-b border-gray-100 scroll-mt-24"
      id={id}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header: Title + See All Link */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <Link
            href="#"
            className="text-sm font-bold text-[#026CDF] hover:underline"
          >
            {linkText}
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white border border-gray-200 text-[#026CDF] p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all ${!showLeft ? "hidden" : "flex"}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white border border-gray-200 text-[#026CDF] p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all hidden md:flex ${!showRight ? "hidden" : "flex"}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-1"
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
            {events.map((event) => (
              <div
                key={event.id}
                className="min-w-[250px] md:min-w-[280px] flex-shrink-0 cursor-pointer group/card"
              >
                {/* Image */}
                <div className="relative h-40 w-full rounded-lg overflow-hidden mb-3 border border-gray-100 shadow-sm">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                    {event.category}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 group-hover/card:text-[#026CDF] transition-colors line-clamp-1">
                    {event.title}
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
