"use client";

import React, { useState } from "react";

import { Icon } from "@iconify/react";

import { MenuButton } from "@/components/MenuButton";
import { navLink } from "@/constants/links";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const MobileMenu = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [isOpen, setOpen] = useState<boolean>(false);

  if (matches) return;

  return (
    <div>
      <MenuButton
        isOpen={isOpen}
        onClick={() => setOpen((isOpen) => !isOpen)}
        strokeWidth="2"
        color="#454561"
        lineProps={{ strokeLinecap: "round" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        width="18"
        height="14"
      />
      {isOpen && (
        <div className="fixed left-0 top-[60px] z-[10] flex h-screen w-screen flex-col gap-11 bg-white px-6 py-11">
          {navLink.map((link) => (
            <a
              key={link.herf}
              href={link.herf}
              className={"flex shrink-0 items-center justify-between"}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <Icon icon={"carbon:chevron-right"} width={20} height={20} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
