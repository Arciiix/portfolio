import { useMemo } from "react";
import Divider from "../Divider/Divider";
import Image from "next/image";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  image: string;
}
const SKILLS: Skill[] = [
  {
    name: "TypeScript",
    image: "/imgs/technologies/typescript.svg",
  },
  {
    name: "JavaScript",
    image: "/imgs/technologies/javascript.svg",
  },
  {
    name: "React",
    image: "/imgs/technologies/react.svg",
  },
  {
    name: "CSS3",
    image: "/imgs/technologies/css.svg",
  },
  {
    name: "HTML5",
    image: "/imgs/technologies/html.svg",
  },
  {
    name: "Node.js",
    image: "/imgs/technologies/nodejs.svg",
  },
  {
    name: "Python",
    image: "/imgs/technologies/python.svg",
  },
  {
    name: "Flutter",
    image: "/imgs/technologies/flutter.svg",
  },
  {
    name: "Visual Studio Code",
    image: "/imgs/technologies/vscode.svg",
  },
  {
    name: "Linux",
    image: "/imgs/technologies/linux.svg",
  },
  {
    name: "Git",
    image: "/imgs/technologies/git.svg",
  },
];

export default function Skills() {
  const technologies = useMemo(() => {
    return SKILLS.map((e, index) => {
      return (
        <motion.div
          className="group flex items-center flex-col m-2 gap-2 cursor-pointer"
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
    >
      <span className="text-teal-100 text-lg">
        Those Make Dreams Reality. ✨
      </span>
      <span className="text-7xl font-bold text-teal-400">
        Skills, technologies
      </span>
      <div className="m-8">
        <span className="text-xl">
          description of skills Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quibusdam excepturi quo
        </span>
        <div className="max-w-2xl mx-auto flex flex-wrap gap-2 items-end justify-center">
          {technologies}
        </div>
        <span className="text-teal-100">
          Order means the importance of that technology in my set of skills.
        </span>
      </div>
    </motion.div>
  );
}
