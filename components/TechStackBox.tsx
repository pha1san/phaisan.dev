"use client";

import React, { FC, HTMLProps } from "react";

import { Icon } from "@iconify/react";
import clsx from "clsx";
import { m } from "framer-motion";

interface ITechStackBox extends HTMLProps<HTMLDivElement> {
  icon: string;
  label: string;
  size?: number;
  isActive?: boolean;
}

const TechStackBox: FC<ITechStackBox> = ({ className, icon, label, size = 48, isActive = false, ...props }) => {
  return (
    <m.div
      layout
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={clsx("h-[72px]", { "!h-[114px]": isActive })}
    >
      <div
        className={clsx(
          className,
          "box-shadow flex h-full w-[72px] flex-col items-center rounded-2xl bg-white p-3 transition",
          {
            "box-shadow-2": isActive,
          }
        )}
        {...props}
      >
        <Icon icon={icon} width={size} height={size} />
        {isActive && (
          <m.p
            className="mt-[10px] text-center text-xs font-medium text-black"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            {label}
          </m.p>
        )}
      </div>
    </m.div>
  );
};

export default TechStackBox;
