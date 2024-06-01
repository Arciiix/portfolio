"use client";

import { TerminalContextProvider } from "react-terminal";
import AboutMe from "../AboutMe/AboutMe";
import Divider from "../Divider/Divider";
import FunFact from "../FunFact/FunFact";
import Skills from "../Skills/Skills";

export default function PersonalInfo() {
  return (
    <TerminalContextProvider>
      <div>
        <AboutMe />
        <FunFact />
        <Divider />
        <Skills />
      </div>
    </TerminalContextProvider>
  );
}
