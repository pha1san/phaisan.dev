"use client";
import { m } from "framer-motion";
import Link from "next/link";

import HeaderBox from "@/components/HeaderBox";
import SectionContainer from "@/components/SectionContainer";

export default function About() {
  return (
    <SectionContainer id="about" name="about" className="flex flex-col items-center gap-12 py-32 md:flex-row">
      <div className="relative w-3/5 md:w-1/3">
        <m.img whileHover={{ scale: 1.1 }} src="/me.jpg" alt="Phaisan" className="box-shadow-3 rounded-full" />
        <img src="/assets/icons/picIconSet.svg" alt="icons" className="absolute bottom-0 left-[-22px] z-[-1]" />
        <div className="bg-blur absolute inset-y-0 right-0 z-[-2] w-2/3 translate-x-[-10%] translate-y-[35%] rounded-full" />
      </div>
      <div className="flex flex-col md:w-2/3">
        <HeaderBox title={"👨🏻‍💻About me"} desc={"Highly skilled frontend developer, Seeking challenges"} />
        <div className="mt-7 px-6 text-sm md:text-base">
          <p>
            Hello! My name is Phaisan, a software engineering graduate from AUT. I have 2+ years of substantial
            experience as a<span className="font-semibold text-blue-300"> Frontend Developer. </span>
            My key strengths lie in <strong className="text-blue-300">React and NextJs,</strong> technologies I&apos;ve
            honed over my career and used to deliver effective, user-focused solutions.
          </p>
          <br />
          <p>
            One of my most significant accomplishments includes leading a dedicated team to develop MVP that played a
            vital role in securing a{" "}
            <strong className="text-blue-300">
              <Link
                href="https://blockchain.news/news/defi-platform-forward-raises-$5m-in-seed-funding"
                target="_blank"
              >
                $5M investment in seed funding{" "}
              </Link>
            </strong>
            for the company.
          </p>
          <br />
          <p>
            As I look to the future, I&apos;m eager to apply my experience and skills in a new, challenging environment
            where I can continue to make significant contributions and drive the evolution of the digital landscape.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
