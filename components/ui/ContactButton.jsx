import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href={`https://wa.me/${process.env.NEXT_PUBLIC_TM_PHONE_NUMBER}`}
      className="bg-white text-accent-500 px-4 py-2 rounded-2xl font-semibold hover:scale-105 transition-all"
    >
      Contact Us
    </Link>
  );
}
