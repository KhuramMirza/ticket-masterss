"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

// --- DATA: 3 LOCAL CARDS ---
const events = [
  {
    id: 1,
    title: "Kalan.frfr - Galentines Show",
    date: "FRI • FEB 13 • 7:00 PM",
    venue: "Los Angeles, CA • Echoplex",
    image: "/sponsored/kalan.jpg",
    presaleDate: "THU • JAN 22 • 12:00 PM",
  },
  {
    id: 2,
    title: "Talkhouse, Teddy McGraw, Nolan Trotter",
    date: "WED • FEB 25 • 9:00 PM",
    venue: "New York, NY • Mercury Lounge",
    image: "/sponsored/talkhouse.jpg",
    presaleDate: "TUE • JAN 20 • 10:00 AM",
  },
  {
    id: 3,
    title: "All Your Friends - 18+",
    date: "SAT • FEB 28 • 8:00 PM",
    venue: "Denver, CO • Marquis",
    image: "/sponsored/friends.jpg",
    presaleDate: "WED • JAN 21 • 10:00 AM",
  },
];

export default function SponsoredEvents() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-6 gap-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-tight w-full text-center md:text-left">
            SPONSORED PRESALES AND OFFERS
          </h2>

          {/* Location Selector */}
          <div className="flex items-center gap-1 text-sm text-gray-900 whitespace-nowrap">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold">Near</span>
            <span className="text-[#026CDF] hover:underline cursor-pointer font-semibold">
              Select your location
            </span>
          </div>
        </div>

        {/* 3 CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* IMAGE AREA (Optimized with next/image) */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Purple Presale Badge */}
                <div className="absolute bottom-3 left-3 bg-[#8000FF] text-white text-[10px] font-bold px-2 py-1 rounded-sm tracking-wide uppercase z-10">
                  Presale
                </div>

                {/* Subtle Gradient for Text Contrast (Optional) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-4">
                {/* Date & Time */}
                <div className="text-[#d1410c] text-[11px] font-bold uppercase tracking-wide mb-1">
                  {event.date}
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base leading-tight mb-1 group-hover:text-[#026CDF] transition-colors line-clamp-2 h-10">
                  {event.title}
                </h3>

                {/* Venue */}
                <div className="text-gray-500 text-xs mb-4">{event.venue}</div>

                {/* DIVIDER */}
                <div className="border-t border-gray-100 my-3"></div>

                {/* SPONSOR FOOTER (Citi Style) */}
                <div className="flex items-center gap-3">
                  {/* CSS-Only Citi Logo Circle */}
                  <div className="w-8 h-8 rounded-full bg-[#003B70] flex items-center justify-center shrink-0 relative overflow-hidden">
                    <div className="w-4 h-1 bg-red-500 rounded-full absolute top-2 left-2 rotate-45"></div>
                    <span className="text-[8px] text-white font-bold italic relative z-10 mt-1">
                      Citi
                    </span>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-gray-900">
                      Citi® Cardmember Presale
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">
                      {event.presaleDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
