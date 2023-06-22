import About from "@/features/About";
import Contact from "@/features/Contact";
import Experience from "@/features/Experience";
import Landing from "@/features/Landing";

export default function Home() {
  return (
    <main className="mt-[60px] px-5 ">
      <Landing />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
