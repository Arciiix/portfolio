"use client";

import { adjustColor } from "@/utils/color";
import { useEffect, useMemo, useState } from "react";
import FancyBackground from "../Animations/FancyBackground/FancyBackground";
import AnimatedDeveloper from "../Animations/AnimatedDeveloper/AnimatedDeveloper";

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
        <div className="my-24 h-full flex items-center justify-around">
          <div className="m-16 mt-0 flex flex-col gap-4">
            <span className="text-[200px] font-extrabold">
              I&apos;m{" "}
              <span
                className="text-transparent bg-clip-text transition-all"
                style={{
                  backgroundImage: `linear-gradient(to right, ${currentColor}, ${lighterColor})`,
                }}
              >
                Artur
              </span>
            </span>
            <div className="flex flex-col gap-4">
              <span className="text-8xl font-bold">lorem ipsum</span>
              <span className="text-4xl font">that fell in ❤️ with</span>
              <span
                className="text-7xl font-bold"
                style={{
                  color: currentColor,
                }}
              >
                thing
              </span>
            </div>
            <button
              className="m-3 w-96 h-32 rounded-3xl text-5xl font-extrabold uppercase border-4 border-solid transition-all hover:-translate-y-2 hover:border-8 active:!text-white hover:!font-normal"
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
