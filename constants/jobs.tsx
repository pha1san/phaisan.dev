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
    duration: "July 2021 - December 2023",
    description: [
      <p key="Project">
        <b>Project structure and development</b>: Evaluate and research the most effective frameworks and best practices
        to meet product needs.
      </p>,
      <p key="Collaboration">
        <b>Collaboration</b>: Participate in the early stages of product and UX thinking. Collaborate with UX/UI
        designers and researchers to inform the direction of the products we craft.
      </p>,
      <p key="management">
        <b>Resource management</b>: Utilize and initiate an agile workflow with JIRA, and lead a frontend team with
        excellent teamwork, leading to a 25% increase in productivity.
      </p>,
    ],
    url: "https://fwx.finance/",
  },
  {
    workplace: "Intnode",
    position: "Frontend Developer",
    companyDesc: "Providing Crypto Investment Advice, Insights and Analysis.",
    duration: "February 2023 - December 2023",
    description: [
      <p key="1">
        <b>Project Development</b>: Developed interactive charts using the TradingView Chart Library, enhancing user
        experience by providing visually engaging data representations.
      </p>,
      <p key="2">
        <b>Quality Assurance</b>: Implemented and designed automated end-to-end testing using Cypress, ensuring the
        highest level of software quality and significantly reducing testing time.
      </p>,
    ],
    url: "https://intnode.com/",
  },
];

export default jobs;
