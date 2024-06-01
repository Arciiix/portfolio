"use client";

import currentViewAtom, { CurrentView } from "@/atoms/ui/currentView.atom";
import Contact from "@/components/Contact/Contact";
import { NAVIGATION_ITEMS } from "@/components/Header/Header";
import Landing from "@/components/Landing/Landing";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import Projects from "@/components/Projects/Projects";
import TechnologiesVideo from "@/components/TechnologiesVideo/TechnologiesVideo";
import { useEffect } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { useSetRecoilState } from "recoil";

export default function Home() {
  const setCurrentView = useSetRecoilState(currentViewAtom);

  useEffect(() => {
    // Only at first render
    // If there is a hash in the url, it means a specific navigation item has been selected. Scroll to this item
    const hash = window.location.hash;
    const slicedHash = hash.slice(1);
    if (slicedHash) {
      if (NAVIGATION_ITEMS.find((e) => e.name === slicedHash)) {
        console.log("SCROLL");
        // TODO: Think of a better way to do that
        document.getElementById(slicedHash)?.scrollIntoView();
      }
    }
  }, []);

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
        <div id="projects">
          <Projects />
        </div>
        <div id="showcase">
          <TechnologiesVideo />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </ScrollSpy>
    </main>
  );
}
