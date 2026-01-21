"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1F262D] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: Brand & Socials */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-primary-500 tracking-tight">
              TicketMasterss
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted platform for live experiences. Secure your seats
              today.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Youtube} />
            </div>
          </div>

          {/* Column 2: Discover */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">
              Discover
            </h3>
            <ul className="space-y-4 text-sm">
              <FooterLink href="#">Concerts</FooterLink>
              <FooterLink href="#">Sports Events</FooterLink>
              <FooterLink href="#">Theater & Arts</FooterLink>
              <FooterLink href="#">Family Shows</FooterLink>
              <FooterLink href="#">Festivals</FooterLink>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">My Account</FooterLink>
              <FooterLink href="#">Ticket Refunds</FooterLink>
              <FooterLink href="#">Gift Cards</FooterLink>
              <FooterLink href="#">Sell Tickets</FooterLink>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press</FooterLink>
              <FooterLink href="#">Innovation</FooterLink>
              <FooterLink href="#">Get Alerts</FooterLink>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Divider & Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <Link href="#" className="hover:text-accent-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent-500 transition-colors">
              Terms of Purchase
            </Link>
            <Link href="#" className="hover:text-accent-500 transition-colors">
              Do Not Sell My Info
            </Link>
          </div>

          <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Ticketmasterss. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Helper Components for Clean Code ---

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-accent-500 transition-colors duration-200 block"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ Icon }) {
  return (
    <Link
      href="#"
      className="bg-gray-800 p-2 rounded-full hover:bg-accent-500 hover:text-white transition-all duration-300 group"
    >
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </Link>
  );
}
