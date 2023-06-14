import About from "@/features/About";
import Landing from "@/features/Landing";

export default function Home() {
  return (
    <div className="min-h-screen p-[0_0.5rem] flex flex-col justify-center items-center">
      <Landing />
      <About />
      {/* <Experience /> */}
    </div>
  );
}
