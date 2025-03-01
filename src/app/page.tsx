"use client";

import currentViewAtom, { CurrentView } from "@/atoms/ui/currentView.atom";
import { NAVIGATION_ITEMS } from "@/components/Header/Header";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef } from "react";
import { useSetRecoilState } from "recoil";
import Projects from "@/components/Projects/Projects";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ScrollSpy from "react-ui-scrollspy";
import Landing from "@/components/Landing/Landing";
import Contact from "@/components/Contact/Contact";

const TechnologiesVideo = dynamic(
  () => import("@/components/TechnologiesVideo/TechnologiesVideo"),
  { ssr: false }
);

export default function Home() {
  const setCurrentView = useSetRecoilState(currentViewAtom);

  const introRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useMemo(
    () =>
      ({
        intro: introRef,
        aboutMe: aboutMeRef,
        projects: projectsRef,
        showcase: showcaseRef,
        contact: contactRef,
      }) as Record<
        keyof typeof NAVIGATION_ITEMS,
        React.RefObject<HTMLDivElement>
      >,
    [introRef, aboutMeRef, projectsRef, showcaseRef, contactRef]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only at first render
      // If there is a hash in the url, it means a specific navigation item has been selected. Scroll to this item
      const hash = window.location.hash;
      const slicedHash = hash.slice(1);
      if (slicedHash) {
        if (NAVIGATION_ITEMS?.[slicedHash]) {
          // TODO: Think of a better way to do that
          const ref = sectionRefs[slicedHash];
          if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
  }, [sectionRefs]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-0 p-0">
      <Landing />

      <ScrollSpy
        onUpdateCallback={(id: string) => {
          setCurrentView(id as CurrentView);
        }}
        scrollThrottle={0}
        offsetTop={-20}
      >
        {/* For scroll spy */}
        <div
          id="intro"
          ref={introRef}
          className="relative bottom-[101vh] left-0 w-full"
        ></div>
        <div id="aboutMe" ref={aboutMeRef}>
          <PersonalInfo />
        </div>
        <div id="projects" ref={projectsRef}>
          <Projects />
        </div>
        <div id="showcase" ref={showcaseRef}>
          <TechnologiesVideo />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </ScrollSpy>
    </main>
  );
}
