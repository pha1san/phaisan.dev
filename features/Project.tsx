import HeaderBox from "@/components/HeaderBox";
import ProjectCarosel from "@/components/ProjectCarosel";
import SectionContainer from "@/components/SectionContainer";
import Link from "next/link";

const Project = () => {
  return (
    <SectionContainer className="py-32" id="project" name="project">
      <div className="flex items-center justify-center">
        <div className="mr-5 text-[96px]">🖥</div>
        <HeaderBox title={"💻 Project"} desc={"Each project is a unique piece of development"} className="mr-auto" />
      </div>
      <ProjectCarosel />
      <div className="w-full text-center mt-10">
        <Link href={"/projects"} className="text-blue-700 underline font-medium text-sm">
          See all projects
        </Link>
      </div>
    </SectionContainer>
  );
};

export default Project;
