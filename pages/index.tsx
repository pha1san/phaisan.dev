import About from "@/features/About";
import Contact from "@/features/Contact";
import Experience from "@/features/Experience";
import Landing from "@/features/Landing";

export default function Home() {
  return (
    <div className="min-h-screen p-[0_0.5rem] flex flex-col justify-center items-center">
      <Landing />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}
