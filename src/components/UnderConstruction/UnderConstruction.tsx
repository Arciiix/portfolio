import React from "react";
import { motion } from "framer-motion";

export default function UnderConstruction() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-purple-600">
      <motion.div
        className="text-white text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        I&apos;m building now...
      </motion.div>
    </div>
  );
}
