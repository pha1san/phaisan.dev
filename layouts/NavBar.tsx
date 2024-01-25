import Link from "next/link";

import { navLink } from "@/constants/links";

import ResumeButton from "./ResumeButton";

const webName = "Phaisan.dev";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[99] flex h-[60px] w-screen items-center justify-between bg-white px-6 shadow-[0px_2px_4px_rgba(0,0,0,0.075)]">
      <div className="mx-auto flex w-full items-center justify-between">
        {/* <MobileMenu /> */}
        <Link href="/" className="text-3xl font-bold " scroll={false}>
          <span className="text-2xl">👋 </span>
          {webName.split("").map((char, index) => (
            <span key={index} className="text-2xl transition-all hover:text-3xl">
              {char}
            </span>
          ))}
        </Link>
        {/* <div className="ml-auto mr-6 hidden gap-6 text-sm text-blue-400 md:flex">
          {navLink.map((link) => (
            <a key={link.herf} href={link.herf} className="font-medium">
              {link.label}
            </a>
          ))}
        </div> */}
        <ResumeButton />
      </div>
    </nav>
  );
}
