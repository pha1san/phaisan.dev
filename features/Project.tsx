import HeaderBox from "@/components/HeaderBox";
import ProjectCarosel from "@/components/ProjectCarosel";
import SectionContainer from "@/components/SectionContainer";

const Project = () => {
  return (
    <SectionContainer className="py-32" id="project" name="project">
      <div className="flex items-center justify-center">
        <div className="mr-5 text-[96px]">🖥</div>
        <HeaderBox title={"💻 Project"} desc={"Each project is a unique piece of development"} className="mr-auto" />
      </div>
      <ProjectCarosel />
    </SectionContainer>
  );
};

export default Project;
