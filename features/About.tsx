import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import SectionContainer from "@/components/SectionContainer";
import mePic from "@/public/me.png";
import idk from "@/public/assets/icons/picIconSet.svg";
import HeaderBox from "@/components/HeaderBox";

export default function About() {
  return (
    <SectionContainer id="about" name="about" className="flex items-center gap-12">
      <div className="relative w-1/3">
        <Image src={mePic} alt="Phaisan" style={{ borderRadius: "50%" }} placeholder="blur" />
        <Image
          src={idk}
          alt="icons"
          style={{ borderRadius: "50%" }}
          className="absolute bottom-0 left-[-22px] z-[-1]"
        />
      </div>
      <div className="flex w-2/3 flex-col">
        <HeaderBox title={"👨🏻‍💻About me"} desc={"Highly skilled frontend developer, Seeking challenges."} />
        <div className="mt-7 px-6 text-base">
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
                $5M investment for the company.
              </Link>
            </strong>
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
