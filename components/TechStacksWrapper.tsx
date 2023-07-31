"use client";

import React, { useRef } from "react";

import { useHover } from "usehooks-ts";

import { techStacks } from "@/constants/techstack";

import TechStackBox from "./TechStackBox";

const TechStacksWrapper = () => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div className="my-16 flex flex-col items-center gap-10 pt-16">
      <h2 className="text-center text-2xl text-gray-600">Tech Stacks</h2>
      <div className="flex min-h-[136px] flex-wrap justify-center gap-8" ref={hoverRef}>
        {techStacks.map((tech) => (
          <TechStackBox
            icon={tech.icon}
            label={tech.label}
            key={tech.label}
            isActive={isHover}
            // className="h-fit w-[72px] "
          />
        ))}
      </div>
    </div>
  );
};

export default TechStacksWrapper;
