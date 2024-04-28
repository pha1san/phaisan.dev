"use client";

import React, { useRef } from "react";

import { m } from "framer-motion";
// import { useHover } from "usehooks-ts";

import { techStacks } from "@/constants/techstack";

import { varFade } from "./animate";
import TechStackBox from "./TechStackBox";

const TechStacksWrapper = () => {
  const hoverRef = useRef(null);
  // const isHover = useHover(hoverRef);

  return (
    <m.div
      className="my-16 flex flex-col items-center gap-10 pt-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      // variants={varContainer()}
    >
      <m.h2 className="text-center text-2xl text-gray-600" variants={varFade().inUp}>
        Tech Stacks
      </m.h2>
      <m.div className="flex min-h-[136px] flex-wrap justify-center gap-8" ref={hoverRef}>
        {techStacks.map((tech) => (
          <m.div key={tech.label} variants={varFade().inUp}>
            <TechStackBox
              icon={tech.icon}
              label={tech.label}
              isActive={true}
              // className="h-fit w-[72px] "
            />
          </m.div>
        ))}
      </m.div>
    </m.div>
  );
};

export default TechStacksWrapper;
