"use client";

// TODO: Add the real roles
const ROLES = ["TODO", "Person", "Human", "Developer"];

import { adjustColor } from "@/utils/color";
import { useEffect, useMemo, useState } from "react";
import FancyBackground from "../Animations/FancyBackground/FancyBackground";
import AnimatedDeveloper from "../Animations/AnimatedDeveloper/AnimatedDeveloper";

import styles from "./Landing.module.css";
import { motion } from "framer-motion";
import AnimatedTyping from "../Animations/AnimatedTyping/AnimatedTyping";

export default function Landing() {
  const [currentColor, setCurrentColor] = useState("#1baace");
  const lighterColor = useMemo(() => {
    return adjustColor(currentColor, 30);
  }, [currentColor]);
  const currentColorDark = useMemo(() => {
    return adjustColor(currentColor, -85);
  }, [currentColor]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentColor("#f7df06");
    }, 2000);
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
                  backgroundImage: `linear-gradient(to right, ${currentColor}, ${lighterColor})`,
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
                thing
              </span>
            </div>
            <a
              className="m-3 lg:w-96 h-32 rounded-3xl text-5xl font-extrabold uppercase border-4 border-solid transition-all hover:-translate-y-2 hover:border-8 active:!text-white hover:!font-normal text-center flex items-center justify-center cursor-pointer"
              style={{
                color: currentColor,
                borderColor: currentColor,
              }}
              href="#content-anchor"
            >
              learn more
            </a>
          </motion.div>
          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatedDeveloper />
          </motion.div>
        </div>
      </div>
    </>
  );
}
