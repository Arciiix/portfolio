import { motion } from "framer-motion";
import { useMemo } from "react";

let FUN_FACTS = [
  `The term "computer bug" was coined when a moth caused a malfunction in the Mark II computer in 1947.`,
  `The world's first computer programmer was Ada Lovelace, who wrote the first algorithm for Charles Babbage's Analytical Engine in the 1840s.`,
  `The first computer mouse was invented by Douglas Engelbart in 1964 and was made of wood.`,
  `The term "Wi-Fi" doesn't stand for anything. It's a play on "Hi-Fi," which means high fidelity.`,
  `The QWERTY keyboard layout was designed to slow typists down to prevent jamming on early typewriters.`,
  `The world's first website, created by Tim Berners-Lee, is still online. It was launched in 1991.`,
  `The term "byte" was coined by Dr. Werner Buchholz in 1956 and represents a unit of digital information storage.`,
  `The concept of virtual reality (VR) dates back to the 1960s, but it gained mainstream attention in the 1990s.`,
  `The first video game, "Tennis for Two," was created by physicist William Higinbotham in 1958.`,
  `The shortest program ever written simply prints "Hello, World!" It's a common beginner's exercise in programming.`,
  `The term "algorithm" is derived from the name of the Persian mathematician Al-Khwarizmi, who lived in the 9th century.`,
  `The largest distributed computing project in the world is Folding@home, which uses volunteers' computers to simulate protein folding for medical research.`,
  `The concept of open-source software gained prominence with the Free Software Foundation, founded by Richard Stallman in 1985.`,
  `The first computer virus, called the "Creeper," was created in the early 1970s as an experimental program.`,
  `In 1999, the "I Love You" virus became one of the most destructive computer viruses, infecting millions of computers worldwide.`,
  `The concept of cloud computing traces its roots back to the 1960s with the development of ARPANET, the precursor to the internet.`,
  `The world's first 1GB hard drive, released by IBM in 1980, was the size of a refrigerator and cost $40,000.`,
];

export default function FunFact() {
  const randomFact = useMemo(() => {
    const index = Math.floor(Math.random() * FUN_FACTS.length);
    const item = FUN_FACTS[index];
    FUN_FACTS.splice(index, 1);
    return item;
  }, []);

  const didYouKnowThat = useMemo(() => {
    return (
      <div className="flex flex-nowrap whitespace-pre">
        {Array.from("Did you know, that...").map((e, index) => {
          return (
            <span
              key={e + index}
              className="text-2xl hover:scale-110 hover:text-teal-200 transition-all cursor-pointer"
            >
              {e}
            </span>
          );
        })}
      </div>
    );
  }, []);
  return (
    <motion.div
      className="flex flex-col items-center m-3 p-2"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "anticipate" },
      }}
    >
      {didYouKnowThat}

      <span>{randomFact}</span>
    </motion.div>
  );
}
