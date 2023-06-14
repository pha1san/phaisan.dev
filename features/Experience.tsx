import React, { useState } from "react";

import { Flex, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";

import ExperienceButtons from "@/components/ExperienceButtons";
import ExperienceDetails from "@/components/ExperienceDetails";
import ExperienceSelect from "@/components/ExperienceSelect";
import SectionContainer from "@/components/SectionContainer";
import { colors } from "@/theme";

export default function Experience() {
  const [index, setIndex] = useState(0);
  const showSelect = useBreakpointValue({
    base: false,
    lg: true,
  });
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  return (
    <SectionContainer id="experience" name="experience" headerText="Experience" useHeaderStyle>
      <Flex
        as={Grid}
        container
        item
        direction="row"
        justifyContent="center"
        xs={9}
        sm={9}
        borderRadius="lg"
        borderWidth={bg === colors.bg.light ? "1px" : ""}
        rounded="md"
        style={{
          margin: "24px",
          marginTop: "3vh",
          width: "75vw",
          height: "60vh",
        }}
      >
        <Grid
          container
          direction="column"
          item
          xs={9}
          sm={6}
          md={2}
          alignItems="center"
          justifyContent="flex-start"
          style={{ marginTop: "24px", marginBottom: "24px", marginRight: "3vw" }}
        >
          {showSelect ? (
            <ExperienceButtons expIndex={index} setIndex={setIndex} />
          ) : (
            <ExperienceSelect expIndex={index} setIndex={setIndex} />
          )}
        </Grid>
        <Grid container item xs={9} sm={6} style={{ marginTop: "24px", marginBottom: "24px", marginLeft: "12px" }}>
          <ExperienceDetails index={index} />
        </Grid>
      </Flex>
    </SectionContainer>
  );
}
