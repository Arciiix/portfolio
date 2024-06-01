import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import { SKILLS } from "./SkillsDescriptions";
import AnimatedUnderlineTitle from "../Animations/AnimatedUnderlineTitle/AnimatedUnderlineTitle";

export default function Skills() {
  const [animationPlaying, setAnimationPlaying] = useState(true);

  const technologies = useMemo(() => {
    return SKILLS.map((e, index) => {
      return (
        <motion.div
          className="group flex items-center flex-col m-2 gap-2 cursor-pointer relative"
          key={e.name}
          initial={{ translateY: -200, opacity: 0 }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: { duration: 0.8, delay: index * 0.1 },
          }}
        >
          <Image
            className="grayscale group-hover:grayscale-0 transition-all duration-500 w-[72px] h-[72px]"
            src={e.image}
            width={72}
            height={72}
            alt={e.name}
          />
          <span className="text-xl group-hover:text-teal-400 transition-all duration-500">
            {e.name}
          </span>
          <div className="hidden transition-all group-hover:flex absolute top-0 left-0">
            <CodeSnippet content={e.codeSnippetContent} />
          </div>
        </motion.div>
      );
    });
  }, []);
  return (
    <motion.div
      className="flex flex-col gap-3 text-center"
      initial={{ translateX: -200, opacity: 0 }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      }}
      onAnimationComplete={() => setAnimationPlaying(false)}
      onAnimationStart={() => setAnimationPlaying(true)}
    >
      <span className="text-teal-100 text-lg">
        Those Make Dreams Reality. ✨
      </span>
      <AnimatedUnderlineTitle
        title="Skills & technologies"
        className="text-4xl lg:text-7xl font-bold text-teal-400 text-wrap max-w-[100vw] m-auto"
        allowedToShow={!animationPlaying}
      ></AnimatedUnderlineTitle>
      <div className="m-8">
        <span className="text-xl p-3 m-3 max-w-5xl mb-5 block mx-auto">
          Since my most beloved fields of programming are{" "}
          <b>Full-Stack Development and IoT</b>, I use programming languages
          designed for those purposes. Sometimes there are some smaller tools
          that are necessary for creating an entire project, like{" "}
          <b>mobile app framework</b> for creating the &quot;control
          center&quot; of an IoT device. That&apos;s why my technologies are
          diverse - and I think that&apos;s great!
        </span>
        <div className="max-w-2xl mx-auto flex flex-wrap gap-2 items-end justify-center">
          {technologies}
        </div>
        <span className="text-teal-100">
          Hover over the technology for a brief description.
        </span>
      </div>
    </motion.div>
  );
}
