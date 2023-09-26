"use client";

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

import { adjustColor } from "@/utils/color";
import { useEffect, useMemo, useRef, useState } from "react";
import AnimatedDeveloper from "../Animations/AnimatedDeveloper/AnimatedDeveloper";
import FancyBackground from "../Animations/FancyBackground/FancyBackground";

import useCurrentView from "@/hooks/ui/useCurrentView";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedTexts, {
  AnimatedText,
} from "../Animations/AnimatedTexts/AnimatedTexts";
import AnimatedTyping from "../Animations/AnimatedTyping/AnimatedTyping";
import Socials from "../Socials/Socials";
import styles from "./Landing.module.css";

export default function Landing() {
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
            <div className="flex flex-col gap-4 mb-6">
              <div className="text-4xl lg:text-6xl font-bold">
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
              className="m-3 lg:w-96 h-32 rounded-3xl text-4xl lg:text-5xl font-extrabold uppercase transition-all hover:-translate-y-2 text-center flex items-center justify-center cursor-pointer hover:border-4 hover:!bg-transparent hover:!text-white"
              style={{
                color: currentColorDark,
                backgroundColor: currentColor,
              }}
              href="/#aboutMe"
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
