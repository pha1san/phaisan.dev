import Link from "next/link";

import { navLink } from "@/constants/links";

export default function Navbar() {
  return (
    <nav className="h-[60px] flex items-center justify-between fixed top-0 inset-x-0 bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.075)] z-[999]">
      <div className="  flex items-center justify-between max-w-[1116px] w-full mx-auto">
        <Link href="/">👋 Phaisan.dev</Link>
        <div className="flex gap-7">
          {navLink.map((link) => (
            <a key={link.herf} href={link.herf} className="font-medium">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
