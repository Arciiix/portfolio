"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  useLayoutEffect,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import AnimatedUnderlineTitle from "../Animations/AnimatedUnderlineTitle/AnimatedUnderlineTitle";
import { SKILLS, type Skill } from "./SkillsDescriptions";

const CATEGORY_ORDER: Skill["category"][] = [
  "Frontend",
  "Backend",
  "Mobile & IoT",
  "Tools",
];

const CATEGORY_LABELS: Record<Skill["category"], string> = {
  Frontend: "Frontend",
  Backend: "Backend",
  "Mobile & IoT": "Mobile & IoT",
  Tools: "Tools",
};

const STATS = [
  { value: SKILLS.length, label: "technologies" },
  { value: CATEGORY_ORDER.length, label: "domains" },
  { value: "100%", label: "passion" },
];

const POPOVER_WIDTH = 420;
const POPOVER_GAP = 18;

function TechCard({
  skill,
  active,
  onHover,
  onLeave,
}: {
  skill: Skill;
  active: boolean;
  onHover: (skill: Skill, rect: DOMRect) => void;
  onLeave: () => void;
}) {
  return (
    <motion.button
      type="button"
      onMouseEnter={(event) =>
        onHover(skill, event.currentTarget.getBoundingClientRect())
      }
      onFocus={(event) =>
        onHover(skill, event.currentTarget.getBoundingClientRect())
      }
      onMouseLeave={onLeave}
      onBlur={onLeave}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col items-center gap-3 rounded-2xl px-6 py-6 transition-colors duration-300"
      style={{
        backgroundColor: active ? undefined : "rgba(20,34,39,0.45)",
        backgroundImage: active
          ? `linear-gradient(160deg, ${skill.color}1f, rgba(11,15,23,0.65))`
          : undefined,
        border: `1px solid ${
          active ? `${skill.color}80` : "rgba(210,250,244,0.14)"
        }`,
        boxShadow: active
          ? `0 18px 50px -18px ${skill.color}`
          : "0 18px 50px rgba(0,0,0,0.2)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${skill.color}45, transparent 70%)`,
        }}
      />
      <Image
        src={skill.image}
        width={56}
        height={56}
        alt={skill.name}
        className="relative z-10 h-14 w-14 transition-transform duration-300 group-hover:scale-110"
        style={{ filter: `drop-shadow(0 0 12px ${skill.color}55)` }}
      />
      <span className="relative z-10 text-sm font-semibold text-white/85 transition-colors duration-300 group-hover:text-white">
        {skill.name}
      </span>
    </motion.button>
  );
}

export default function Skills() {
  const [animationPlaying, setAnimationPlaying] = useState(true);
  const [activeSkill, setActiveSkill] = useState<Skill>(SKILLS[0]);
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState<DOMRect | null>(null);
  const [pos, setPos] = useState({ left: 0, top: 0 });
  const [flip, setFlip] = useState<"above" | "below">("above");

  const popoverRef = useRef<HTMLDivElement | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const grouped = useMemo(
    () =>
      CATEGORY_ORDER.map((category) => ({
        category,
        skills: SKILLS.filter((skill) => skill.category === category),
      })).filter((group) => group.skills.length > 0),
    []
  );

  const handleHover = (skill: Skill, rect: DOMRect) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActiveSkill(skill);
    setAnchor(rect);
    setOpen(true);
  };

  const scheduleClose = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const keepOpen = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  };

  // Position the popover right above (or below) the hovered card.
  useLayoutEffect(() => {
    if (!anchor || !open || !popoverRef.current) return;

    const height = popoverRef.current.offsetHeight;
    const width = POPOVER_WIDTH;
    const placeBelow = anchor.top - height - POPOVER_GAP < 8;

    const left = Math.max(
      12,
      Math.min(
        anchor.left + anchor.width / 2 - width / 2,
        window.innerWidth - width - 12
      )
    );
    const top = placeBelow
      ? anchor.bottom + POPOVER_GAP
      : anchor.top - height - POPOVER_GAP;

    setPos({ left, top });
    setFlip(placeBelow ? "below" : "above");
  }, [anchor, open, activeSkill]);

  // Close the popover while scrolling so it never drifts away from the card.
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, true);
    return () => window.removeEventListener("scroll", close, true);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 md:px-16 lg:px-24"
    >
      {/* Decorative ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "#61DAFB" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "#A179DC" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "#00979D" }}
      />

      {/* Header */}
      <motion.div
        className="relative z-10 mx-auto mb-14 flex max-w-5xl flex-col items-center gap-6 text-center"
        initial={{ translateX: -200, opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: true }}
        onAnimationComplete={() => setAnimationPlaying(false)}
        onAnimationStart={() => setAnimationPlaying(true)}
      >
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm tracking-widest text-teal-100/80">
          TOOLKIT ✨
        </span>
        <AnimatedUnderlineTitle
          title="Skills"
          className="text-4xl lg:text-7xl font-bold text-teal-400 text-wrap max-w-[100vw] m-auto"
          allowedToShow={!animationPlaying}
        />
        <p className="max-w-3xl text-lg leading-relaxed text-white/70">
          Since my most beloved fields of programming are{" "}
          <b className="text-white">Full-Stack Development and IoT</b>, I use
          programming languages designed for those purposes. Sometimes there
          are smaller tools that are necessary for creating an entire project,
          like a <b className="text-white">mobile app framework</b> for
          building the &quot;control center&quot; of an IoT device. That&apos;s
          why my technologies are diverse - and I think that&apos;s great!
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-2.5"
            >
              <span className="text-2xl font-extrabold text-teal-300">
                {stat.value}
              </span>
              <span className="text-sm text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Category grids */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10">
        {grouped.map(({ category, skills }, groupIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
          >
            <h3 className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-white/40">
              <span className="h-px flex-1 bg-white/10" />
              {CATEGORY_LABELS[category]}
              <span className="h-px flex-1 bg-white/10" />
            </h3>
            <div className="flex flex-wrap items-start justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ translateY: -40, opacity: 0 }}
                  whileInView={{
                    translateY: 0,
                    opacity: 1,
                    transition: { duration: 0.6, delay: index * 0.06 },
                  }}
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <TechCard
                    skill={skill}
                    active={activeSkill.name === skill.name}
                    onHover={handleHover}
                    onLeave={scheduleClose}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <span className="relative z-10 mt-10 block text-center text-sm text-teal-100/70">
        Hover over a technology to see it in action.
      </span>

      {/* Hover code popover */}
      <AnimatePresence>
        {open && anchor && (
          <motion.div
            ref={popoverRef}
            role="tooltip"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: flip === "above" ? 10 : -10,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: flip === "above" ? 10 : -10,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed z-50"
            style={{
              left: pos.left,
              top: pos.top,
              width: `min(92vw, ${POPOVER_WIDTH}px)`,
              transformOrigin:
                flip === "above" ? "bottom center" : "top center",
            }}
            onMouseEnter={keepOpen}
            onMouseLeave={scheduleClose}
          >
            {/* Pointer arrow */}
            {flip === "above" ? (
              <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-[#0b0f17]" />
            ) : (
              <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-t border-l border-white/10 bg-[#0b0f17]" />
            )}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl transition-colors duration-300"
              style={{ background: activeSkill.color }}
            />
            <CodeSnippet
              content={activeSkill.codeSnippetContent}
              title={activeSkill.name.toLowerCase()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
