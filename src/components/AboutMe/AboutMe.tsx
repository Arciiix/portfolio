import { motion } from "framer-motion";
import { useState } from "react";
import { ReactTerminal } from "react-terminal";
import AnimatedUnderlineTitle from "../Animations/AnimatedUnderlineTitle/AnimatedUnderlineTitle";
import { aboutMeCommands, welcomeMessage } from "./aboutMeCommands";

export default function AboutMe() {
  const [animationPlaying, setAnimationPlaying] = useState(true);

  return (
    <motion.div
      className="mt-20 w-full p-8 bg-teal-900 bg-opacity-40 flex flex-col"
      initial={{ translateY: -200, opacity: 0 }}
      whileInView={{
        translateY: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      }}
      onAnimationComplete={() => setAnimationPlaying(false)}
      onAnimationStart={() => setAnimationPlaying(true)}
    >
      <AnimatedUnderlineTitle
        title="About me"
        className="text-center m-auto mb-4"
        allowedToShow={!animationPlaying}
      />
      <div className="h-[80vh] my-5">
        <ReactTerminal
          commands={aboutMeCommands}
          welcomeMessage={welcomeMessage}
          errorMessage={"Command not found, have you maybe made a typo? 🤔"}
          themes={{
            "my-custom-theme": {
              themeBGColor: "#1f2229",
              themeToolbarColor: "#DBDBDB",
              themeColor: "#FFFEFC",
              themePromptColor: "#a917a8",
            },
          }}
          theme="my-custom-theme"
        />
      </div>
    </motion.div>
  );
}
