"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  X,
  Loader2,
  CheckCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function HeroSearch() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 1. STATE: Search Data
  const [searchData, setSearchData] = useState({
    location: "",
    date: "",
    query: "",
  });

  // 2. STATE: Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Open Modal
  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  // 3. LOGIC: Send Email
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      search_query: searchData.query || "General Search",
      search_location: searchData.location || "Any Location",
      search_date: searchData.date || "Any Date",
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID,
      )
      .then(
        (response) => {
          setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setIsModalOpen(false);
            setSuccess(false);
            setFormData({ name: "", email: "", phone: "" });
          }, 3000);
        },
        (err) => {
          setLoading(false);
          alert("Something went wrong. Please check your internet connection.");
        },
      );
  };

  return (
    <section className="relative w-full py-12 md:h-[500px] flex items-center justify-center px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1459749411177-287ce3274392?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-[#026CDF]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl text-center space-y-6 md:space-y-8">
        {/* Headline */}
        <h1 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
          Let&#39;s make memories <span className="text-blue-200">live.</span>
        </h1>
        <p className="text-sm md:text-lg text-blue-100 font-medium max-w-xl mx-auto px-4">
          Millions of live events. One search. Secure your seats today.
        </p>

        {/* --- THE MODERNIZED SEARCH BAR --- */}
        {/* Desktop: Rounded-Full | Mobile: Rounded-2xl and stacked */}
        <div className="bg-white rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row w-full max-w-4xl mx-auto overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {/* 1. Search Query */}
          <div className="flex-[1.5] group flex items-center px-5 py-3 md:py-4 hover:bg-gray-50 transition-colors cursor-pointer relative">
            <Search className="text-[#026CDF] w-5 h-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div className="text-left w-full">
              <label className="block text-base font-bold text-[#026CDF] uppercase tracking-wider mb-0.5">
                Looking For
              </label>
              <input
                type="text"
                placeholder="Artist, Event or Venue"
                className="w-full text-base font-semibold text-gray-900 placeholder:text-gray-400 placeholder:font-medium outline-none bg-transparent truncate cursor-pointer"
                value={searchData.query}
                onChange={(e) =>
                  setSearchData({ ...searchData, query: e.target.value })
                }
              />
            </div>
          </div>

          {/* 2. Location */}
          <div className="flex-1 group flex items-center px-5 py-3 md:py-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <MapPin className="text-[#026CDF] w-5 h-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div className="text-left w-full">
              <label className="block text-base font-bold text-[#026CDF] uppercase tracking-wider mb-0.5">
                Location
              </label>
              <input
                type="text"
                placeholder="City or Zip Code"
                className="w-full text-base font-semibold text-gray-900 placeholder:text-gray-400 placeholder:font-medium outline-none bg-transparent truncate cursor-pointer"
                value={searchData.location}
                onChange={(e) =>
                  setSearchData({ ...searchData, location: e.target.value })
                }
              />
            </div>
          </div>

          {/* 3. Date */}
          <div className="flex-1 group flex items-center px-5 py-3 md:py-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <Calendar className="text-[#026CDF] w-5 h-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div className="text-left w-full">
              <label className="block text-base font-bold text-[#026CDF] uppercase tracking-wider mb-0.5">
                Date
              </label>
              <input
                type="text"
                placeholder="All Dates"
                className="w-full text-base font-semibold text-gray-900 placeholder:text-gray-400 placeholder:font-medium outline-none bg-transparent truncate cursor-pointer"
                value={searchData.date}
                onChange={(e) =>
                  setSearchData({ ...searchData, date: e.target.value })
                }
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="p-2 md:pl-0">
            <button
              onClick={handleSearchClick}
              className="w-full md:w-auto h-full min-h-[50px] bg-[#026CDF] hover:bg-blue-700 text-white text-sm font-bold uppercase tracking-wide px-8 py-3 rounded-xl md:rounded-full transition-all shadow-lg hover:shadow-blue-500/30 flex items-center hover:cursor-pointer justify-center gap-2"
            >
              <Search className="w-4 h-4 md:hidden hover:cursor-pointer" />{" "}
              {/* Icon only on mobile button */}
              Find Tickets
            </button>
          </div>
        </div>
      </div>

      {/* --- THE MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            {!success && (
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-white text-gray-500 hover:text-black rounded-full p-1 transition-all"
              >
                <X className="w-5 h-5 cursor-pointer" />
              </button>
            )}

            {success ? (
              // SUCCESS STATE
              <div className="p-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  You&#39;re on the list!
                </h3>
                <p className="text-gray-500 text-sm">
                  We will notify you as soon as tickets become available.
                </p>
              </div>
            ) : (
              // FORM STATE
              <>
                <div className="bg-[#026CDF] px-8 py-8 text-white relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 opacity-10">
                    <Search className="w-32 h-32" />
                  </div>
                  <h3 className="text-xl font-bold relative z-10">
                    Check Availability
                  </h3>
                  <p className="text-blue-100 text-sm mt-1 relative z-10 pr-8">
                    Enter your details to view pricing for:
                  </p>

                  {/* Dynamic Badge */}
                  <div className="mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 inline-flex items-center gap-2 relative z-10">
                    <span className="font-semibold text-xs tracking-wide">
                      {searchData.query ? searchData.query : "Upcoming Events"}
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#026CDF] focus:border-transparent outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#026CDF] focus:border-transparent outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#026CDF] focus:border-transparent outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#026CDF] cursor-pointer hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all mt-2 flex items-center justify-center text-base"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Continue to Tickets"
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed px-4">
                    By proceeding, you consent to receive emails about this
                    event. We value your privacy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
