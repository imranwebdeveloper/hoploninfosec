import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function TopContactBar() {
  return (
    <div className="bg-purple-900 container md:px-8 mx-auto px-4 text-white flex justify-end items-center  py-2 space-x-4">
      <Link href="/contact" className="flex items-center gap-2 text-sm">
        <Mail size={16} />
        <span className="hidden md:inline">Contact Us</span>
      </Link>
      <Link href="/contact" className="flex items-center gap-2 text-sm">
        <Phone size={16} />
        <span className="hidden md:inline">Contact Us</span>
      </Link>
      <Link
        href="/schedule"
        className="bg-green-800 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors"
      >
        Schedule a Consultation
      </Link>
    </div>
  );
}
