import Image from "next/image";
import Divider from "../Divider/Divider";
import Bolded from "../Text/BoldedText";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="flex gap-4 items-center flex-col">
          <span className="text-3xl w-full text-left">
            My name is <Bolded text="Artur" /> and I&apos;m a software engineer.
          </span>
          <span className="text-xl text-justify">
            <span className="text-teal-400 font-bold">
              Passionate Back-End and IoT Enthusiast 🚀
            </span>
            <p>
              <b>Passionate about programming since childhood</b>, dedicated to
              transforming ideas into remarkable digital solutions and ready to
              show off his hobby to people. I am a software engineer deeply
              passionate about IoT, a hobby that was ignited by my father&apos;s
              inspiration. My professional expertise is primarily focused on
              full-stack development (with IoT), where I harmonize the virtual
              and the tangible. Within this portfolio, you&apos;ll find a
              collection of my IoT creations and full-stack symphonies, each
              reflecting my dedication to both fields. Join me on this journey
              as I continue to compose innovative digital melodies inspired by
              my lifelong love for programming.
            </p>
            <Divider />
            <span className="text-teal-400 font-bold">
              Top Student at Poland&apos;s Top Technical College 📚
            </span>
            <p>
              Currently studying at{" "}
              <Link
                className="link text-teal-400"
                href="https://zs6sobieski.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                4th Technical College in School Complex no. 6 in
                Jastrzębie-Zdrój, Poland
              </Link>
              , ranked as the best technical college in the voivodeship and 7th{" "}
              <Link
                className="link text-teal-400"
                href="https://2023.technika.perspektywy.pl/2023/rankings/ranking-glowny-technikow"
                target="_blank"
                rel="noopener noreferrer"
              >
                best one in Poland.
              </Link>{" "}
              Managed to get the highest grade out of entire school for two
              years in a row.
            </p>
            <Divider />
            <span className="text-teal-400 font-bold">
              Young yet experienced 🌟
            </span>
            <p>
              Already gained experience during the internship at{" "}
              <Link
                className="link text-teal-400"
                href="https://www.pol-eko.com.pl/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>POL-EKO</b>
              </Link>
              , delivering top-notch IT solutions for their equipment. I was
              able to took part in it thanks to{" "}
              <b>winning a regional programming competition</b>, which resulted
              in creating{" "}
              <Link className="link text-teal-400" href="/projects/coldtime">
                <b>Coldtime</b>
              </Link>
              , one of my projects you can see below. During the internship, I
              was responsible for creating{" "}
              <Link className="link text-teal-400" href="/projects/enmet">
                <b>Enmet</b>
              </Link>
              .
            </p>
            <Divider />

            <p>And I&apos;m only 17 years old and a high school student :)</p>
          </span>
          <div className="flex w-full items-center gap-4 flex-wrap justify-center">
            {[
              "problem-solver",
              "creative",
              "patient",
              "analytical",
              "passionate",
              "organized",
            ].map((e) => (
              <span
                key={e}
                className="border-teal-400 border-2 p-4 rounded-xl text-xl"
              >
                {e}
              </span>
            ))}
            <span className="text-3xl text-teal-400">= me</span>
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
