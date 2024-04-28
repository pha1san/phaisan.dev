import Link from "next/link";

import HeaderBox from "@/components/HeaderBox";
import { PROJECTS } from "@/constants/projects";

export default function Project() {
  return (
    <main className="relative mt-[60px] p-6 ">
      <HeaderBox
        title={<h1 className="mb-3 text-3xl font-bold">💻 Project</h1>}
        desc={"Each project is a unique piece of development"}
        className="mx-auto my-8 w-fit"
      />
      <div className="grid  grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg"

            // className="relative h-[380px] w-[520px] max-w-[calc(100%_-_48px)] rounded-lg bg-red-600"
          >
            <Link href={project.link} target="_blank" rel="noreferrer">
              <img src={project.img} alt="" className="h-[70%] w-full rounded-t-2xl" />
            </Link>
            <div className="h-[30%] overflow-hidden rounded-b-2xl  p-5 ">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="h-[2lh] overflow-hidden text-ellipsis text-sm">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
