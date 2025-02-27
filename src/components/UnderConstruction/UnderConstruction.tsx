"use client";
import { motion } from "framer-motion";
import Socials from "../Socials/Socials";

export default function UnderConstruction() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center p-8 flex flex-col items-center gap-2"
      >
        <motion.h1
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Artur Nowak
        </motion.h1>
        <Socials noGithub />
        <motion.h1
          className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I&apos;m Building Something Awesome Now...
        </motion.h1>
      </motion.div>
    </div>
  );
}
