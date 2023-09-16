"use client";

// TODO: Add the real roles
const ROLES = ["TODO", "Person", "Human", "Developer"];

// TODO: Add the real items
const FELL_IN_LOVE_TEXTS: AnimatedText[] = [
  {
    text: "Thing",
    color: "#1baace",
  },
  {
    text: "Programming",
    color: "#e3392d",
  },
  { text: "TypeScript", color: "#f7df06" },
];

import { adjustColor } from "@/utils/color";
import { useEffect, useMemo, useRef, useState } from "react";
import FancyBackground from "../Animations/FancyBackground/FancyBackground";
import AnimatedDeveloper from "../Animations/AnimatedDeveloper/AnimatedDeveloper";

import styles from "./Landing.module.css";
import { motion, useInView, useScroll } from "framer-motion";
import AnimatedTyping from "../Animations/AnimatedTyping/AnimatedTyping";
import useCurrentView from "@/hooks/ui/useCurrentView";
import AnimatedTexts, {
  AnimatedText,
} from "../Animations/AnimatedTexts/AnimatedTexts";
import Link from "next/link";
import Socials from "../Socials/Socials";

export default function Landing() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { currentView } = useCurrentView(containerRef, "intro");

  const [currentFellInLoveIndex, setCurrentFellInLoveIndex] = useState(0);

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

  return (
    <>
      <div
        ref={(r) => (containerRef.current = r)}
        className="min-h-screen w-full bg-opacity-10 transition-all duration-500"
        style={{
          backgroundColor: currentColorDark,
        }}
      >
        <FancyBackground />
        <div className="my-24 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-around">
          <motion.div
            className="m-16 mt-0 flex flex-col gap-4 whitespace-pre"
            initial={{ translateY: -200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[100px] lg:text-[200px] font-extrabold flex flex-col">
              <span className="text-6xl">I&apos;m</span>
              <span
                className="text-transparent bg-clip-text transition-all cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(to right, ${currentColor}, ${currentColorLight})`,
                }}
              >
                <span className={`${styles.letter} ${styles.letterA}`}>A</span>
                <span className={`${styles.letter} ${styles.letterR}`}>r</span>
                <span className={`${styles.letter} ${styles.letterT}`}>t</span>
                <span className={`${styles.letter} ${styles.letterU}`}>u</span>
                <span className={`${styles.letter} ${styles.letterR2}`}>r</span>
              </span>
            </span>
            <div className="flex flex-col gap-4">
              <div className="text-6xl lg:text-8xl font-bold">
                <AnimatedTyping words={ROLES} cursorColor={currentColor} />
              </div>
              <span className="text-2xl lg:text-4xl font">
                that fell in ❤️ with
              </span>
              <span
                className="text-5xl lg:text-7xl font-bold"
                style={{
                  color: currentColor,
                }}
              >
                <AnimatedTexts
                  texts={FELL_IN_LOVE_TEXTS}
                  currentIndex={currentFellInLoveIndex}
                />
              </span>
            </div>
            <Link
              className="m-3 lg:w-96 h-32 rounded-3xl text-5xl font-extrabold uppercase transition-all hover:-translate-y-2 text-center flex items-center justify-center cursor-pointer hover:border-4 hover:!bg-transparent hover:!text-white"
              style={{
                color: currentColorDark,
                backgroundColor: currentColor,
              }}
              href="#content-anchor"
            >
              learn more
            </Link>
          </motion.div>
          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatedDeveloper />
            <div className="flex items-center my-3 justify-center">
              <Socials />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
