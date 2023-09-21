"use client";

import currentViewAtom, { CurrentView } from "@/atoms/ui/currentView.atom";
import Contact from "@/components/Contact/Contact";
import Divider from "@/components/Divider/Divider";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import Projects from "@/components/Projects/Projects";
import TechnologiesVideo from "@/components/TechnologiesVideo/TechnologiesVideo";
import ScrollSpy from "react-ui-scrollspy";
import { useRecoilState } from "recoil";

export default function Home() {
  const [currentView, setCurrentView] = useRecoilState(currentViewAtom);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-0 p-0">
      <Landing />

      <ScrollSpy
        onUpdateCallback={(id: string) => {
          console.log("view", id);
          setCurrentView(id as CurrentView);
        }}
        scrollThrottle={0}
        offsetTop={-20}
      >
        {/* For scroll spy */}
        <div id="intro" className="relative bottom-[101vh] left-0 w-full"></div>
        <div id="aboutMe">
          <PersonalInfo />
        </div>
        <div id="showcase">
          <Divider />
          <TechnologiesVideo />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </ScrollSpy>
    </main>
  );
}
