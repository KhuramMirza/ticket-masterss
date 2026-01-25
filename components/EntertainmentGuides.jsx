"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

// --- MOCK DATA MATCHING YOUR SCREENSHOT ---
const guides = [
  {
    id: 1,
    title: "NFL Tickets",
    description:
      "Get tickets to catch your favorite team live at the Official Ticket Marketplace of the NFL.",
    image: "/guide/nfl.png", // Placeholder reused
  },
  {
    id: 2,
    title: "NBA Tickets",
    description:
      "See your favorite team hit the court and get tickets at the Official Ticket Marketplace of the NBA.",
    image: "/guide/nba.jpg", // Placeholder reused
  },
  {
    id: 3,
    title: "NHL Tickets",
    description:
      "Be there live when your favorite team hits the ice and get tickets at the Official Ticket Marketplace of the NHL.",
    image: "/guide/nhl.jpg", // Placeholder reused
  },
  {
    id: 4,
    title: "MLS Tickets",
    description:
      "Catch every action-packed game this season and get tickets at the Official Ticket Marketplace of the MLS.",
    image: "/guide/mls.png", // Placeholder reused
  },
  {
    id: 5,
    title: "Experience Las Vegas",
    description:
      "Make your trip to Las Vegas even more memorable with access to last-minute tickets, VIP experiences and special offers.",
    image: "/guide/lv.jpg", // Placeholder reused
  },
];

export default function EntertainmentGuides() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // Width of card + gap
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
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* CENTERED HEADER */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-tight text-center">
          ENTERTAINMENT GUIDES
        </h2>

        {/* CAROUSEL CONTAINER */}
        <div className="relative group">
          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/3 -translate-y-1/2 -ml-4 z-10 bg-white border border-gray-200 text-[#026CDF] p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all ${!showLeft ? "hidden" : "flex"}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/3 -translate-y-1/2 -mr-4 z-10 bg-[#026CDF] text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all hidden md:flex ${!showRight ? "hidden" : "flex"}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* CARDS ROW */}
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
            {guides.map((item) => (
              <div
                key={item.id}
                className="max-w-[280px] md:max-w-[340px] flex-shrink-0 cursor-pointer group/card"
              >
                {/* IMAGE */}
                <div className="relative h-50 w-full rounded-lg overflow-hidden mb-4 border border-gray-200 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors"></div>
                </div>

                {/* TEXT CONTENT */}
                <div className="space-y-2 pr-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover/card:text-[#026CDF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
