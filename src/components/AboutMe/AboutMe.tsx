"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ReactTerminal } from "react-terminal";
import AnimatedUnderlineTitle from "../Animations/AnimatedUnderlineTitle/AnimatedUnderlineTitle";
import { aboutMeCommands, welcomeMessage } from "./aboutMeCommands";

export default function AboutMe() {
  const [animationPlaying, setAnimationPlaying] = useState(true);

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-16 lg:px-24">
      {/* Decorative ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "#2dd4bf" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 -left-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "#a179dc" }}
      />

      {/* Header */}
      <motion.div
        className="relative z-10 mx-auto mb-14 flex max-w-4xl flex-col items-center gap-6 text-center"
        initial={{ translateX: -200, opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: true }}
        onAnimationComplete={() => setAnimationPlaying(false)}
        onAnimationStart={() => setAnimationPlaying(true)}
      >
        <AnimatedUnderlineTitle
          title="About me"
          className="text-center m-auto text-4xl lg:text-7xl font-bold text-teal-400"
          allowedToShow={!animationPlaying}
        />
        <p className="max-w-3xl text-lg leading-relaxed text-white/70">
          This isn&apos;t your average biography - it&apos;s a living terminal.
          Try <b className="text-teal-300">help</b> to see everything I can tell
          you about myself.
        </p>
      </motion.div>

      {/* Terminal window */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Ambient glow behind the window */}
        <div
          aria-hidden
          className="absolute -inset-6 rounded-[3rem] opacity-25 blur-3xl"
          style={{ background: "#2dd4bf" }}
        />

        <div className="glass-panel relative overflow-hidden rounded-[1.75rem]">
          {/* Scanline overlay for the CRT feel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 opacity-40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.028) 0px, rgba(255,255,255,0.028) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* Window chrome */}
          <div className="relative flex items-center gap-2 border-b border-white/10 bg-white/[0.05] px-4 py-3.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 font-mono text-xs tracking-wide text-white/45">
              artur@portfolio: ~/get-to-know-me
            </span>
            <span className="pointer-events-none absolute right-4 hidden font-mono text-[10px] text-white/25 sm:inline">
              bash
            </span>
          </div>

          {/* Terminal body */}
          <div
            className="relative h-[520px] md:h-[600px]"
            style={{
              backgroundColor: "#0b0f17cc",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <ReactTerminal
              commands={aboutMeCommands}
              welcomeMessage={welcomeMessage}
              errorMessage={
                "Command not found, have you maybe made a typo? 🤔"
              }
              showControlBar={false}
              showControlButtons={false}
              prompt="➜"
              themes={{
                "my-custom-theme": {
                  themeBGColor: "#0b0f17",
                  themeToolbarColor: "#0b0f17",
                  themeColor: "#c9d1d9",
                  themePromptColor: "#2dd4bf",
                },
              }}
              theme="my-custom-theme"
            />
          </div>
        </div>
      </motion.div>

      <p className="relative z-10 mt-10 text-center text-sm text-white/40">
        Psst... there&apos;s a secret command. Try{" "}
        <b className="text-teal-300">whoami</b>.
      </p>
    </section>
  );
}
