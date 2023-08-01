import { ReactNode } from "react";

export type JobsType = {
  workplace: string;
  position: string;
  companyDesc: string;
  duration: string;
  description: ReactNode[];
  url: string;
};

const jobs: JobsType[] = [
  {
    workplace: "ForwardX (FWX)",
    position: "Lead Frontend Developer",
    companyDesc: "A FinTech Startup, providing financial services in blockchain.",
    duration: "July 2021 - Present",
    description: [
      <p key="1">
        <b>Project structure and development</b>: Evaluate and research the most effective frameworks and best practices
        to meet product needs.
      </p>,
      <p key="2">
        <b>Collaboration</b>: Participate in the early stages of product and UX thinking. Collaborate with UX/UI
        designers and researchers to inform the direction of the products we craft.
      </p>,
      <p key="3">
        <b>Resource management</b>: Utilize and initiate an agile workflow with JIRA, and lead a frontend team with
        excellent teamwork, leading to a 25% increase in productivity.
      </p>,
      "Software Testing: Proficient in Cypress to create automate end to end-testing projects and unit testing",
    ],
    url: "https://fwx.finance/",
  },
  {
    workplace: "Intnode",
    position: "Frontend Developer",
    companyDesc: "Providing Crypto Investment Advice, Insights and Analysis.",
    duration: "February 2023 - Present",
    description: [""],
    url: "https://intnode.com/",
  },
];

export default jobs;
