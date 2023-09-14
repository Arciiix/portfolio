import AboutMe from "@/components/AboutMe/AboutMe";
import AnimatedTyping from "@/components/Animations/AnimatedTyping/AnimatedTyping";
import FunFact from "@/components/FunFact/FunFact";
import Landing from "@/components/Landing/Landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-0 p-0">
      <Landing />

      <div id="content-anchor"></div>
      <AboutMe />
      <FunFact />
    </main>
  );
}
