import { FC } from "react";

import { Button, Image, useColorModeValue } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";

import jobs from "@/constants/jobs";
import { colors } from "@/theme";

interface IExperienceButtons {
  expIndex: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ExperienceButtons: FC<IExperienceButtons> = ({ expIndex, setIndex }) => {
  const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);
  return (
    <Grid container item spacing={2} justifyContent="center" style={{ margin: "auto" }}>
      {jobs.map((job, index) => (
        <Grid container item key={`${job.workplace}-btn`}>
          <Button isActive={expIndex === index} onClick={() => setIndex(index)} className="w-full">
            {job.workplace}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExperienceButtons;
