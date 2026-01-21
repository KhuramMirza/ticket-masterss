import { Geist, Geist_Mono } from "next/font/google";
import "@/app/_styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TicketMasterss | Premium Event Tickets & Live Entertainment",
  description:
    "Join the TicketMasterss exclusive list for early access to concerts, sports, and theater events. Secure the best seats for top live entertainment worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
