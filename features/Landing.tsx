import clsx from "clsx";

import SectionContainer from "@/components/SectionContainer";
import SocialLinkButton from "@/components/SocialLinkButton";
import TechStacksWrapper from "@/components/TechStacksWrapper";

export default function Landing() {
  return (
    <SectionContainer className="flex flex-col justify-center">
      <div
        className={clsx(
          "flex flex-col-reverse items-center justify-between gap-20 pt-14",
          "md:flex-row md:items-start md:pt-32"
        )}
      >
        <div>
          <h1 className="text-3xl font-bold leading-[62px] md:text-5xl">
            <span className="text-blue-400">Phaisan U.</span> <br />
            Frontend Developer
          </h1>
          <p className="mt-2 text-lg text-gray-600 md:text-2xl">Based in Auckland, New Zealand </p>
          <SocialLinkButton className="mt-5" />
        </div>
        <img src="/assets/images/landing.svg" alt={""} className="md:w-[min(45%,420px)]" />
      </div>
      <TechStacksWrapper />
    </SectionContainer>
  );
}
