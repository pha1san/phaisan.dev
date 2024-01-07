import About from "@/features/About";
import Contact from "@/features/Contact";
import Experience from "@/features/Experience";
import Landing from "@/features/Landing";

export default function Home() {
  return (
    <>
      <main className="mt-[60px] px-6 ">
        <div
          className="mousemove z-1 pointer-events-none fixed inset-0 transition duration-300 lg:absolute"
          style={{ background: "radial-gradient(600px at 504px 500px, rgb(172 29 216 / 15%), transparent 90%)" }}
        />
        <Landing />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
