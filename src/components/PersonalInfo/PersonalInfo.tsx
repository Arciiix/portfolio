"use client";

import useCurrentView from "@/hooks/ui/useCurrentView";
import { useRef } from "react";
import AboutMe from "../AboutMe/AboutMe";
import FunFact from "../FunFact/FunFact";
import Skills from "../Skills/Skills";
import Divider from "../Divider/Divider";

export default function PersonalInfo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { currentView } = useCurrentView(containerRef, "aboutMe");
  return (
    <div ref={(r) => (containerRef.current = r)}>
      <AboutMe />
      <FunFact />
      <Divider />
      <Skills />
    </div>
  );
}
