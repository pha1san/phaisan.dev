"use client";

import React from "react";

import { Icon } from "@iconify/react";
import Image from "next/image";

import SectionContainer from "@/components/SectionContainer";
import SocialLinkButton from "@/components/SocialLinkButton";

export default function Landing() {
  return (
    <SectionContainer className="flex h-full flex-col pt-14">
      <div className="flex">
        <div>
          <h1>
            <span>Phaisan U.</span> Full-stack Developer
          </h1>
          <p>Based in Auckland, New Zealand </p>
          <SocialLinkButton />
        </div>
        <div className="relative w-1/3">
          <Image src={"/assets/images/landing.png"} alt={""} fill />
        </div>
      </div>
      {/* <div>Tech Stack</div> */}
    </SectionContainer>
  );
}
