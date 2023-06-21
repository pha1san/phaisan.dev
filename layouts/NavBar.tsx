import Link from "next/link";

import { MenuButton } from "@/components/MenuButton";
import { navLink } from "@/constants/links";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[999] flex h-[60px] w-screen items-center justify-between bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.075)]">
      <div className="mx-auto flex w-full max-w-[1116px] items-center justify-between px-5 md:px-0">
        <Link href="/" className="text-2xl font-bold">
          👋 Phaisan.dev
        </Link>
        <div className="hidden gap-7 md:flex">
          {navLink.map((link) => (
            <a key={link.herf} href={link.herf} className="font-medium">
              {link.label}
            </a>
          ))}
        </div>
        <MenuButton className="flex md:hidden" />
      </div>
    </nav>
  );
}
