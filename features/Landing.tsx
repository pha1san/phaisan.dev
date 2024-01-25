"use client";
import clsx from "clsx";
import { m } from "framer-motion";

import { varContainer, varFade } from "@/components/animate";
import SectionContainer from "@/components/SectionContainer";
import SocialLinkButton from "@/components/SocialLinkButton";
import TechStacksWrapper from "@/components/TechStacksWrapper";

const string = "Phaisan U.";

export default function Landing() {
  return (
    <SectionContainer className="flex flex-col justify-center">
      <m.div
        className={clsx(
          "flex flex-col-reverse items-center justify-between gap-20 pt-14",
          "md:flex-row md:items-start md:pt-32"
        )}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={varContainer()}
      >
        <m.div variants={varFade().inUp} className="cursor-default">
          <h1 className="text-3xl font-bold md:text-5xl">
            <span className="text-blue-400">Phaisan U.</span> <br />
            Frontend Developer
          </h1>
          <p className="mt-2 text-lg text-gray-600 md:text-2xl">Based in Auckland, New Zealand </p>
          <SocialLinkButton className="mt-10 md:mt-28 " />
        </m.div>
        {/* <m.img variants={varFade().inUp} src="/assets/images/landing.svg" alt={""} className="md:w-[min(45%,420px)]" /> */}
        <m.div className="relative w-3/5 md:w-[min(45%,320px)]" variants={varFade().inUp}>
          <m.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src="/me.jpg"
            alt="Phaisan"
            className="box-shadow-3 rounded-full"
          />
          <m.img
            src="/assets/icons/picIconSet.svg"
            alt="icons"
            className="absolute bottom-0 left-[-22px] z-[-1]"
            variants={varFade().inRight}
          />
          <div className="bg-blur absolute inset-y-0 right-0 z-[-2] w-2/3 translate-x-[-10%] translate-y-[35%] rounded-full" />
        </m.div>
      </m.div>
      <TechStacksWrapper />
    </SectionContainer>
  );
}
