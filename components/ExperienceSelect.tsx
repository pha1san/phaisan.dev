import { FC } from "react";

import { Select } from "@chakra-ui/react";

import jobs from "@/constants/jobs";

interface IExperienceSelect {
  expIndex: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ExperienceSelect: FC<IExperienceSelect> = ({ expIndex, setIndex }) => (
  <Select value={expIndex} onChange={(e) => setIndex(Number(e.target.value))}>
    {jobs.map((job, index) => (
      <option key={`${job.workplace}-select-option`} value={index}>
        {job.workplace}
      </option>
    ))}
  </Select>
);

export default ExperienceSelect;
