"use client";

import Image from "next/image";
import { BasicProjectDisplayProps } from "../Project";
import SocialLink from "@/components/Socials/SocialLink";

import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectIntroduction({
  project,
}: BasicProjectDisplayProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const randomText = () => {
      return Math.random().toString(36).charAt(2);
    };

    let text = project.name;

    let textArr: string[][] = [];
    setDisplayedText("");

    let maxLength = 0;
    for (let i = 0; i < text.length; i++) {
      textArr.push([]);
      let iterations = text.length - 5 * Math.random();
      for (let j = 0; j < iterations; j++) {
        let randomString = randomText();
        textArr[i].push(randomString);
      }
      if (maxLength < iterations) {
        maxLength = iterations;
      }
      textArr[i].push(text[i]);
    }

    let letters: string[] = [];
    let counter = 0;

    let changeLetter = () => {
      for (let i = 0; i < text.length; i++) {
        let char = textArr[i];
        if (counter < char.length) {
          letters[i] = char[counter];
        } else {
          letters[i] = char[char.length - 1];
        }
      }

      setDisplayedText(letters.join(""));
    };

    let animationInterval = setInterval(() => {
      changeLetter();
      counter++;
    }, 100);

    let animationTimeout = setTimeout(
      () => {
        clearInterval(animationInterval);
      },
      100 * maxLength + 1000
    );

    return () => {
      clearInterval(animationInterval);
      clearTimeout(animationTimeout);
    };
  }, [project.name]);

  return (
    <motion.div
      initial={{ translateY: -200, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="my-4 flex flex-col items-center justify-center gap-6 lg:flex-row">
        <div className="relative shrink-0">
          <div
            aria-hidden
            className="absolute -inset-5 rounded-[2rem] opacity-40 blur-2xl transition-colors duration-500"
            style={{ background: project.tag.color }}
          />
          <div className="glass-panel relative overflow-hidden rounded-2xl p-3">
            <Image
              className="rounded-xl"
              src={project.logoSrc}
              alt={project.name}
              width={140}
              height={140}
            />
          </div>
        </div>
        <h1 className="bg-gradient-to-br from-white via-white to-teal-200 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-6xl xl:text-8xl">
          {displayedText}
        </h1>
      </div>
      <div className="my-8 flex items-center justify-center gap-4">
        {project.githubURL ? (
          <SocialLink Icon={FaGithub} href={project.githubURL} />
        ) : null}
        {project.demoURL ? (
          <SocialLink Icon={FaLink} href={project.demoURL} />
        ) : null}
      </div>
    </motion.div>
  );
}
