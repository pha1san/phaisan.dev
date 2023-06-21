import Image from "next/image";

import SectionContainer from "@/components/SectionContainer";
import SocialLinkButton from "@/components/SocialLinkButton";
import TechStacksWrapper from "@/components/TechStacksWrapper";
import landingPic from "@/public/assets/images/landing.svg";

export default function Landing() {
  return (
    <SectionContainer className="flex flex-col justify-center">
      <div className="flex justify-between gap-20 pt-32">
        <div>
          <h1 className="text-5xl font-bold leading-[62px]">
            <span className="text-blue-400">Phaisan U.</span> <br />
            Full-stack Developer
          </h1>
          <p className="mt-2 text-2xl text-gray-600">Based in Auckland, New Zealand </p>
          <SocialLinkButton className="mt-5" />
        </div>
        <Image src={landingPic} alt={""} priority={true} />
      </div>
      <TechStacksWrapper />
    </SectionContainer>
  );
}
