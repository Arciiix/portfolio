"use client";

import useCurrentView from "@/hooks/ui/useCurrentView";
import { useRef } from "react";
import AboutMe from "../AboutMe/AboutMe";
import FunFact from "../FunFact/FunFact";
import Skills from "../Skills/Skills";
import Divider from "../Divider/Divider";

export default function PersonalInfo() {
  return (
    <div>
      <AboutMe />
      <FunFact />
      <Divider />
      <Skills />
    </div>
  );
}
