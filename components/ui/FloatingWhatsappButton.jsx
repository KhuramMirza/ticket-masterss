"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function FloatingWhatsappBtn() {
  const phone = process.env.NEXT_PUBLIC_TM_PHONE_NUMBER;
  if (!phone) return null;

  return (
    <FloatingWhatsApp
      phoneNumber={phone}
      accountName="Ticket Masterss"
      avatar="/logo.jpg"
      buttonStyle={{ width: "45px", height: "45px" }}
      statusMessage="Typically replies within 1 minute"
      placeholder="I want to inquire about the tickets for an event."
    />
  );
}
