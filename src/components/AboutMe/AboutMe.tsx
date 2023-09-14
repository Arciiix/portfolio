import Image from "next/image";
import Divider from "../Divider/Divider";
import Bolded from "../Text/BoldedText";
import useCurrentView from "@/hooks/ui/useCurrentView";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      className="mt-20 w-full p-8 bg-teal-900 bg-opacity-40 flex flex-col"
      initial={{ translateY: -200, opacity: 0 }}
      whileInView={{
        translateY: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      }}
    >
      <h1 className="text-teal-400 font-bold text-7xl text-center">About me</h1>
      <Divider />
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="flex gap-4 items-center flex-col">
          <span className="text-3xl text-center">
            My name is <Bolded text="Artur" /> and I&apos;m a software engineer.
          </span>
          <span className="text-xl text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur harum molestias ea ratione consequuntur veritatis?
            Fugiat corrupti atque corporis, vitae explicabo tenetur tempora illo
            sed deserunt laboriosam quod perspiciatis iure! Quos nisi
            consequuntur ducimus ex similique laboriosam architecto, vitae
            tenetur saepe ipsa fugiat exercitationem harum, ipsum perspiciatis
            beatae eum odit nemo minima? Asperiores, quo error dicta deleniti
            cum aliquam quod?
          </span>
          <div className="flex w-full items-start gap-4">
            {/* TODO: Features */}
          </div>
        </div>
        <Image
          src="/imgs/programming.svg"
          alt="Programming"
          width={400}
          height={240}
        />
      </div>
    </motion.div>
  );
}
