"use client";

import Image from "next/image";

// --- MOCK DATA MATCHING YOUR SCREENSHOT ---
const articles = [
  {
    id: 1,
    category: "SPORTS",
    title: "Super Bowl 2026 Ticket Guide",
    description:
      "Check out our guide to buying 100% verified tickets to Super Bowl LX.",
    image: "/discover/super-bowl.avif", // Placeholder
  },
  {
    id: 2,
    category: "SPORTS",
    title: "How To Buy NHL Tickets",
    description:
      "Everything you need to know about NHL tickets: Prices, when to buy, last-minute tips, and safe checkout.",
    image: "/discover/nhl.jpg", // Placeholder
  },
  {
    id: 3,
    category: "SPORTS",
    title: "College Football Bowl Games Explained",
    description:
      "We break down the factors that determine bowl game schedules in this guide.",
    image: "/discover/bowl.jpg", // Placeholder
  },
  {
    id: 4,
    category: "ARTS & THEATER",
    title: "10 Broadway Shows to See This Winter in NYC",
    description:
      "Need ideas for family activities in NYC this winter? Here are the best Broadway shows and musicals to see in 2026.",
    image: "/discover/shows.jpg", // Placeholder
  },
  {
    id: 5,
    category: "TIPS",
    title: "How A Ticketmasterss Queue Works",
    description: "Learn all about how the Ticketmaster queue works.",
    image: "/discover/question.webp", // Placeholder
  },
  {
    id: 6,
    category: "MUSIC",
    title: "Sign Up For What To See",
    description:
      "Get the Ticketmasterss newsletter that covers what's happening in live music, from the biggest touring artists to rising stars.",
    image: "/discover/sign-up.jpg", // Placeholder
  },
];

export default function DiscoverMore() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* CENTERED HEADER */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-tight text-center">
          DISCOVER MORE
        </h2>

        {/* GRID LAYOUT (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4 border border-gray-100 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-grow space-y-2">
                {/* Category */}
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 leading-tight group-hover:text-[#026CDF] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Link */}
                <div className="pt-2 mt-auto">
                  <span className="text-[11px] font-bold text-[#026CDF] uppercase tracking-wide hover:underline">
                    Discover More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
