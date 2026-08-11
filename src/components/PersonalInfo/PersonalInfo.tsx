"use client";

import { TerminalContextProvider } from "react-terminal";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";

export default function PersonalInfo() {
  return (
    <TerminalContextProvider>
      <div>
        <AboutMe />
        <Skills />
      </div>
    </TerminalContextProvider>
  );
}
