"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { ArrowRight } from "lucide-react";

import AnimatedCode from "../Animations/AnimatedCode/AnimatedCode";
import AnimatedTexts, {
  AnimatedText,
} from "../Animations/AnimatedTexts/AnimatedTexts";
import AnimatedTyping from "../Animations/AnimatedTyping/AnimatedTyping";
import FancyBackground from "../Animations/FancyBackground/FancyBackground";
import Socials from "../Socials/Socials";
import { adjustColor } from "@/utils/color";
import { TubesBackground } from "../Decoration/NeonFlow";
import styles from "./Landing.module.css";

const ROLES = [
  "Software engineer",
  "Full-stack developer",
  "IoT engineer",
  "Hobbyist",
];

const FELL_IN_LOVE_TEXTS: AnimatedText[] = [
  {
    text: "TypeScript",
    color: "#00A9F9",
  },
  {
    text: "React",
    color: "#2EE5E3",
  },
  {
    text: "Web",
    color: "#7A81DF",
  },
  {
    text: "IoT",
    color: "#A853A8",
  },
  {
    text: "Cybersecurity",
    color: "#96F7B1",
  },
  {
    text: "Programming",
    color: "#ACC3FF",
  },
  {
    text: "Coding",
    color: "#85B5A4",
  },
  {
    text: "Innovation",
    color: "#2EE5E3",
  },
  {
    text: "Automation",
    color: "#E7FEFD",
  },
];

export default function Landing() {
  const [currentFellInLoveIndex, setCurrentFellInLoveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion() ?? false;

  const currentColor = useMemo(
    () => FELL_IN_LOVE_TEXTS[currentFellInLoveIndex].color,
    [currentFellInLoveIndex]
  );

  const currentColorLight = useMemo(() => {
    return adjustColor(currentColor, 30);
  }, [currentColor]);
  const currentColorDark = useMemo(() => {
    return adjustColor(currentColor, -85);
  }, [currentColor]);

  useEffect(() => {
    const changeInterval = setInterval(
      () =>
        setCurrentFellInLoveIndex(
          (index) => (index + 1) % FELL_IN_LOVE_TEXTS.length
        ),
      3000
    );
    return () => clearInterval(changeInterval);
  }, []);

  const stopPropagation = (event: MouseEvent<HTMLDivElement>) =>
    event.stopPropagation();

  return (
    <TubesBackground>
      {/* Ambient overlays for readability */}
      <div aria-hidden className="absolute inset-0 bg-[#08080f]/40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#08080f]/90 via-[#08080f]/15 to-[#08080f]/75"
      />
      <div
        aria-hidden
        className="absolute inset-0 transition-[background] duration-700"
        style={{
          background: `radial-gradient(ellipse 75% 60% at 22% 45%, ${currentColor}30, transparent 65%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-20"
      >
        <FancyBackground />
      </div>

      {/* Main content */}
      <div
        onClick={stopPropagation}
        className="pointer-events-auto relative z-10 flex min-h-screen items-center px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto grid min-w-0 w-full max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6">
          {/* Left column */}
          <div className="flex min-w-0 flex-col items-center gap-7 text-center lg:items-start lg:text-left">
            {/* Name with letter reveals */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -40 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="max-w-full select-none"
            >
              <div className="mb-4 text-base font-light uppercase tracking-[0.45em] text-white/50 md:text-lg">
                I&apos;m
              </div>
              <h1
                className="max-w-full text-[clamp(4rem,14vw,11rem)] font-extrabold leading-none"
                style={{
                  filter: `drop-shadow(0 0 30px ${currentColor}59)`,
                }}
              >
                <span
                  className="relative inline-block whitespace-nowrap transition-all duration-700"
                  style={{
                    ["--name-gradient" as string]: `linear-gradient(120deg, #ffffff 0%, ${currentColorLight} 55%, ${currentColor} 100%)`,
                    ["--accent" as string]: currentColor,
                  }}
                >
                  <span className={`${styles.letter} ${styles.letterA}`}>
                    A
                  </span>
                  <span className={`${styles.letter} ${styles.letterR}`}>
                    r
                  </span>
                  <span className={`${styles.letter} ${styles.letterT}`}>
                    t
                  </span>
                  <span className={`${styles.letter} ${styles.letterU}`}>
                    u
                  </span>
                  <span className={`${styles.letter} ${styles.letterR2}`}>
                    r
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Typing effect */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="min-w-0 max-w-full text-3xl font-bold lg:text-5xl"
            >
              <AnimatedTyping words={ROLES} cursorColor={currentColor} />
            </motion.div>

            {/* Rolling technologies */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center gap-1.5 lg:items-start"
            >
              <span className="text-lg font-light text-white/60 lg:text-2xl">
                that fell in ❤️ with
              </span>
              <span
                className="text-4xl font-extrabold transition-all duration-700 lg:text-6xl"
                style={{
                  color: currentColor,
                  textShadow: `0 0 34px ${currentColor}80`,
                }}
              >
                <AnimatedTexts
                  texts={FELL_IN_LOVE_TEXTS}
                  currentIndex={currentFellInLoveIndex}
                />
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-2 flex flex-col items-center gap-5 sm:flex-row"
            >
              <a
                href="#aboutMe"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl px-9 py-4 text-base font-extrabold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                style={{
                  backgroundColor: currentColor,
                  color: currentColorDark,
                  boxShadow: `0 14px 44px -12px ${currentColor}`,
                }}
              >
                Learn more
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <div className="glass-panel rounded-2xl px-6 py-3">
                <Socials />
              </div>
            </motion.div>
          </div>

          {/* Right column - developer code window */}
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }
            }
            animate={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative mx-auto min-w-0 w-full max-w-full lg:max-w-lg"
          >
            <motion.div
              animate={
                prefersReducedMotion ? undefined : { y: [0, -12, 0] }
              }
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Ambient glow behind the window */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[3rem] opacity-30 blur-3xl transition-all duration-700"
                style={{ background: currentColor }}
              />

              <AnimatedCode accentColor={currentColor} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </TubesBackground>
  );
}
