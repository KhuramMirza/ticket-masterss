"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "@/components/ui/ContactButton";

const navLinks = [
  { name: "Concerts", id: "concerts" },
  { name: "Sports", id: "sports" },
  { name: "Arts", id: "art" },
  { name: "Family", id: "family" },
  { name: "Cities", id: "cities" },
];

export default function Header() {
  // State for Mobile Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-primary-300 shadow-md text-white">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-4 py-2 sm:px-10 md:justify-around relative">
        {/* LOGO */}
        <Image
          src="/logo.jpg"
          alt="Alhabib Travel Logo"
          priority={true}
          height={100}
          width={100}
          className="object-contain" // Ensures logo doesn't stretch
        />

        {/* --- DESKTOP NAV (Hidden on Mobile) --- */}
        <ul className="hidden md:flex items-center justify-center gap-4">
          {navLinks.map((link) => (
            <li key={link.name} className="flex items-center">
              <a
                href={`#${link.id}`}
                className="font-semibold text-lg hover:text-gray-200 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}

          <ContactButton />
        </ul>

        {/* --- MOBILE HAMBURGER BUTTON (Visible on Mobile) --- */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-300 shadow-lg border-t border-white/10 flex flex-col items-center py-6 space-y-6 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`#${link.id}`}
              className="font-semibold text-lg hover:text-gray-200"
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
            >
              {link.name}
            </Link>
          ))}

          <ContactButton />
        </div>
      )}
    </header>
  );
}
