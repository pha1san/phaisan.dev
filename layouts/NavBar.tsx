import Link from "next/link";

import { navLink } from "@/constants/links";

import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[99] flex h-[60px] w-screen items-center justify-between bg-white px-5 shadow-[0px_2px_4px_rgba(0,0,0,0.075)]">
      <div className="mx-auto flex w-full max-w-[1116px] items-center justify-between">
        <Link href="/" className="text-2xl font-bold" scroll={false}>
          👋 Phaisan.dev
        </Link>
        <div className="hidden gap-7 md:flex">
          {navLink.map((link) => (
            <a key={link.herf} href={link.herf} className="font-medium">
              {link.label}
            </a>
          ))}
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
