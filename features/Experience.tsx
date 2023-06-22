"use client";

import React, { FC } from "react";

import { Tab } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";

import HeaderBox from "@/components/HeaderBox";
import SectionContainer from "@/components/SectionContainer";
import jobs from "@/constants/jobs";

export default function Experience() {
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
            <Tab.List className="flex gap-4 md:flex-col">
              {jobs.map((job, index) => (
                <Tab
                  key={index}
                  className={clsx(
                    "whitespace-nowrap rounded-[32px] bg-blue-400 px-4 py-3 text-base font-medium text-white md:text-lg",
                    "hover:shadow-lg ui-selected:bg-[#0D6EFD] md:focus:outline-none"
                  )}
                >
                  {job.workplace}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {jobs.map((job, index) => (
                <Tab.Panel key={index} className="flex flex-col gap-5 text-gray-600 focus:outline-none">
                  <h3 className="text-base font-semibold text-light-text md:text-lg">
                    {job.position} @{" "}
                    <Link href={job.url} className="text-[#0D6EFD]" target="_blank">
                      {job.workplace}
                    </Link>
                  </h3>

                  {job.duration.map((time, index) => (
                    <p key={index} className="text-base font-medium md:text-lg">
                      {time}
                    </p>
                  ))}
                  <ul className="list-disc pl-6 text-sm	md:text-base">
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
