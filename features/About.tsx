import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";

import { colors } from "@/theme";
import SectionContainer from "@/components/SectionContainer";

const Bio: FC<{ secondary: string }> = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hello! My name is Phaisan, a software engineering graduate from AUT. I have 2+ years of substantial experience
        as a<strong style={{ color: secondary }}> Frontend Developer. </strong>
        My key strengths lie in <strong style={{ color: secondary }}>React and NextJs,</strong> technologies I've honed
        over my career and used to deliver effective, user-focused solutions.
      </Text>
      <Text>
        One of my most significant accomplishments includes leading a dedicated team to develop MVP that played a vital
        role in securing a{" "}
        <strong style={{ color: secondary }}>
          <Link href="https://blockchain.news/news/defi-platform-forward-raises-$5m-in-seed-funding" isExternal>
            $5M investment for the company.
          </Link>
        </strong>
      </Text>
      <Text>
        As I look to the future, I'm eager to apply my experience and skills in a new, challenging environment where I
        can continue to make significant contributions and drive the evolution of the digital landscape.
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/me.jpg"
      alt="Phaisan Uyarnontruk"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("http://linkedin.com/in/phaisan01");
      }}
      width={300}
      // height={300}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);
  return (
    <SectionContainer id="about" name="about" headerMt="-5%" headerText="About Me" useHeaderStyle>
      <SimpleGrid pl="10%" pt="5%" pr="10%" spacing={12} columns={[1, null, 2]} justifyContent="center">
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
