import MouseBackDrop from "@/components/MouseBackDrop";
import About from "@/features/About";
import Contact from "@/features/Contact";
import Experience from "@/features/Experience";
import Landing from "@/features/Landing";
import Project from "@/features/Project";

export default function Home() {
  return (
    <main className="relative mt-[60px] px-6 ">
      <MouseBackDrop />
      <Landing />
      <About />
      <Experience />
      {/* <Project /> */}
      <Contact />
    </main>
  );
}
