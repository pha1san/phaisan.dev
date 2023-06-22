"use client";

import React, { FC, HTMLProps } from "react";

import { Icon } from "@iconify/react";
import clsx from "clsx";

interface ITechStackBox extends HTMLProps<HTMLDivElement> {
  icon: string;
  label: string;
  size?: number;
  isActive?: boolean;
}

const TechStackBox: FC<ITechStackBox> = ({ className, icon, label, size = 48, isActive = false, ...props }) => {
  return (
    <div
      className={clsx(className, "box-shadow flex flex-col items-center rounded-2xl bg-white py-3", {
        "box-shadow-2": isActive,
      })}
      {...props}
    >
      <Icon icon={icon} width={size} height={size} />
      {isActive && <p className="mt-[10px] text-center text-xs font-medium text-black">{label}</p>}
    </div>
  );
};

export default TechStackBox;
