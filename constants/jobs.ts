export type JobsType = {
  workplace: string;
  position: string;
  duration: string[];
  description: string[];
  url: string;
};

const jobs: JobsType[] = [
  {
    workplace: "ForwardX (FWX)",
    position: "Frontend Developer",
    duration: ["July 2021 - Present"],
    description: [
      "Resource management: Conduct thorough agile workflow with JIRA, recommended process improvement, and led a frontend team with great teamwork to implement initiatives, leading to a 25% productivity increase within 2 months",
      "Project structure and development: Evaluate and research the most effective frameworks and structures for achieving product needs",
      "Software Testing: Proficient in Cypress to create automate end to end-testing projects and unit testing",
    ],
    url: "https://fwx.finance/",
  },
  // {
  //   workplace: "Intnode",
  //   position: "Frontend Developer",
  //   duration: ["February 2023 - Present"],
  //   description: [
  //     "Resource management – Conduct thorough agile workflow with JIRA, recommended process improvement, and led a frontend team with great teamwork to implement initiatives, leading to a 25% productivity increase within 2 months",
  //     "Project structure and development – Evaluate and research the most effective frameworks and structures for achieving product needs",
  //     "Software Testing – Proficient in Cypress to create automate end to end-testing projects and unit testing",
  //   ],
  //   url: "https://intnode.com/",
  // },
];

export default jobs;
