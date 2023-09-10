"use client";

import { adjustColor } from "@/utils/color";
import { useEffect, useMemo, useState } from "react";
import FancyBackground from "../Animations/FancyBackground/FancyBackground";
import AnimatedDeveloper from "../Animations/AnimatedDeveloper/AnimatedDeveloper";

import styles from "./Landing.module.css";

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
          <div className="m-16 mt-0 flex flex-col gap-4 whitespace-pre">
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
              <span className="text-6xl lg:text-8xl font-bold">
                lorem ipsum
              </span>
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
            <button
              className="m-3 lg:w-96 h-32 rounded-3xl text-5xl font-extrabold uppercase border-4 border-solid transition-all hover:-translate-y-2 hover:border-8 active:!text-white hover:!font-normal"
              style={{
                color: currentColor,
                borderColor: currentColor,
              }}
            >
              learn more
            </button>
          </div>
          <div>
            <AnimatedDeveloper />
          </div>
        </div>
      </div>
    </>
  );
}
