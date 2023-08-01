"use client";

import React from "react";

import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { m } from "framer-motion";
import Link from "next/link";

import HeaderBox from "@/components/HeaderBox";
import SectionContainer from "@/components/SectionContainer";
import jobs from "@/constants/jobs";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Experience() {
  const isLarge = useMediaQuery("(min-width: 768px)");

  return (
    <SectionContainer id="experience" name="experience" className="flex flex-col items-center py-32 ">
      <div className="w-full max-w-[792px]">
        <HeaderBox
          title={"💪🏼Experience"}
          desc={"Strong trouble shooting skill with over 2 years of experience"}
          className="mb-14 text-center"
        />

        <div className="flex w-full flex-col gap-10 md:flex-row md:px-6">
          <Tab.Group vertical>
            <Tab.List className={clsx("mx-auto flex gap-4 md:mx-0 md:flex-col", { "w-full": !isLarge })}>
              {jobs.map((job, index) => (
                <Tab
                  key={index}
                  className={clsx(
                    "cursor-pointer whitespace-nowrap rounded-[32px] bg-blue-400 px-4 py-3 text-base font-medium text-white md:text-lg",
                    "w-1/2 md:w-auto",
                    "transition hover:shadow-lg ui-selected:bg-blue-primary md:focus:outline-none"
                  )}
                  as={m.div}
                  whileHover={{ scale: 1.1 }}
                >
                  <m.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-center">
                    {job.workplace}
                  </m.p>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {jobs.map((job, index) => (
                <Tab.Panel key={index} className="flex flex-col text-gray-600 focus:outline-none">
                  <h3 className="text-base font-semibold text-light-text md:text-lg">
                    {job.position} @{" "}
                    <Link href={job.url} className="text-blue-primary" target="_blank">
                      {job.workplace}
                    </Link>
                  </h3>
                  <p className="mb-4 mt-1 text-sm text-gray-500">{job.companyDesc}</p>
                  <p className="mb-2 text-base font-medium">{job.duration}</p>
                  <ul className="flex list-disc flex-col gap-1.5 pl-6 text-sm md:text-base">
                    {job.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </SectionContainer>
  );
}
