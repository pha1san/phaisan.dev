import React, { FC } from "react";

import { Heading, Link, ListItem, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";

import jobs from "@/constants/jobs";
import { colors } from "@/theme";

const ExperienceDetails: FC<{ index: number }> = ({ index }) => {
  const job = jobs[index];
  const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);
  return (
    <Grid container item direction="column">
      <Grid container item style={{ margin: "12px" }}>
        <Heading as="h1" size="md">
          {job.position} @{" "}
          <Link href={job.url} isExternal color={secondary}>
            {job.workplace}
          </Link>
        </Heading>
      </Grid>
      <Grid container item style={{ marginLeft: "12px" }}>
        {job.duration.map((duration) => (
          <Grid key={duration} container item>
            <Text mt={2}>{duration}</Text>
          </Grid>
        ))}
      </Grid>
      <Grid container item style={{ marginLeft: "12px", marginBottom: "12px" }}>
        <UnorderedList mt={2}>
          {job.description.map((desc) => (
            <ListItem key={desc}>{desc}</ListItem>
          ))}
        </UnorderedList>
      </Grid>
    </Grid>
  );
};

export default ExperienceDetails;
