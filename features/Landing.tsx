import React from "react";

import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import clsx from "clsx";
import { BsChevronDown } from "react-icons/bs";
import Jump from "react-reveal/Jump";
import { Link } from "react-scroll";

import LinkIconBar from "@/components/LinkIconBar";
import SectionContainer from "@/components/SectionContainer";
import { links } from "@/constants/links";
// import styles from "../../styles/sections/Landing.module.css";
import { colors } from "@/theme";

export default function Landing() {
  const primary = useColorModeValue(colors.primary.dark, colors.primary.light);
  const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);

  const header = (
    <div className="text-center pb-[50px]">
      <h1 className="text-[2.5em]" style={{ color: primary }}>
        Hi, I&apos;m Phaisan Uyarnontruk,{" "}
      </h1>
      <h1 className="text-[2.5em]" style={{ color: primary }}>
        {" "}
        a <strong style={{ color: secondary }}>full stack developer.</strong>
      </h1>
    </div>
  );

  return (
    <SectionContainer id="landing" name="landing" headerText={header}>
      <LinkIconBar links={links} />
      {/* <Button
        as={URL}
        colorScheme={secondary}
        variant="ghost"
        size="lg"
        mb="2"
        href="/resume.pdf"
        isExternal
      >
        Download resume
      </Button> */}
      <Link activeClass="active" to="about" spy smooth offset={-70} duration={500}>
        <VStack>
          <Text
            as="strong"
            _hover={{ color: secondary }}
            className={clsx("font-bold text-[1.25em] pb-5 transition-[all_0.2s_ease-in-out]", "hover:scale-[1.1]")}
          >
            Learn More
          </Text>
          <Jump forever duration={1500}>
            <BsChevronDown />
          </Jump>
        </VStack>
      </Link>
    </SectionContainer>
  );
}
