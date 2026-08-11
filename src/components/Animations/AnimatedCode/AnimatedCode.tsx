"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import styles from "./AnimatedCode.module.css";

interface Token {
  text: string;
  color?: string;
  italic?: boolean;
}

type Line = Token[];

const TYPE_SPEED_MS = 24;
const LINE_PAUSE_MS = 420;
const END_PAUSE_MS = 2600;

const SYNTAX = {
  base: "#c9d1d9",
  keyword: "#c678dd",
  string: "#98c379",
  func: "#61afef",
  prop: "#e5c07b",
  number: "#d19a66",
  comment: "#7f848e",
  type: "#e06c75",
};

const CODE: Line[] = [
  [
    { text: "import", color: SYNTAX.keyword },
    { text: " Developer", color: SYNTAX.type },
    { text: " from ", color: SYNTAX.base },
    { text: '"./Artur"', color: SYNTAX.string },
    { text: ";" },
  ],
  [],
  [
    { text: "const", color: SYNTAX.keyword },
    { text: " artur", color: SYNTAX.base },
    { text: " = " },
    { text: "new", color: SYNTAX.keyword },
    { text: " Developer", color: SYNTAX.type },
    { text: "({" },
  ],
  [
    { text: "  name", color: SYNTAX.prop },
    { text: ": " },
    { text: '"Artur Nowak"', color: SYNTAX.string },
    { text: "," },
  ],
  [
    { text: "  roles", color: SYNTAX.prop },
    { text: ": [" },
    { text: '"Full-stack"', color: SYNTAX.string },
    { text: ", " },
    { text: '"Back-end"', color: SYNTAX.string },
    { text: ", " },
    { text: '"IoT"', color: SYNTAX.string },
    { text: "]," },
  ],
  [
    { text: "  loves", color: SYNTAX.prop },
    { text: ": [" },
    { text: '"TypeScript"', color: SYNTAX.string },
    { text: ", " },
    { text: '"C#"', color: SYNTAX.string },
    { text: ", " },
    { text: '"Python"', color: SYNTAX.string },
    { text: "]," },
  ],
  [{ text: "});" }],
  [],
  [
    { text: "while", color: SYNTAX.keyword },
    { text: " (artur" },
    { text: ".isCoding", color: SYNTAX.func },
    { text: "()) {" },
  ],
  [
    { text: "  artur" },
    { text: ".build", color: SYNTAX.func },
    { text: "({" },
  ],
  [
    { text: "    fun", color: SYNTAX.prop },
    { text: ": " },
    { text: "true", color: SYNTAX.number },
    { text: "," },
  ],
  [{ text: "  });" }],
  [{ text: "}" }],
];

interface AnimatedCodeProps {
  accentColor: string;
}

export default function AnimatedCode({ accentColor }: AnimatedCodeProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (lineIndex >= CODE.length) {
      const timeout = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, END_PAUSE_MS);
      return () => clearTimeout(timeout);
    }

    const lineLength = CODE[lineIndex].reduce(
      (count, token) => count + token.text.length,
      0
    );

    if (charIndex < lineLength) {
      const timeout = setTimeout(
        () => setCharIndex((index) => index + 1),
        TYPE_SPEED_MS
      );
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setLineIndex((index) => index + 1);
      setCharIndex(0);
    }, LINE_PAUSE_MS);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion, lineIndex, charIndex]);

  const visibleLines = useMemo(() => {
    const totalLines = prefersReducedMotion ? CODE.length : lineIndex + 1;
    return CODE.slice(0, totalLines).map((line, index) => {
      if (prefersReducedMotion || index < lineIndex) return line;

      let remaining = charIndex;
      const partial: Line = [];
      for (const token of line) {
        if (remaining <= 0) break;
        if (token.text.length <= remaining) {
          partial.push(token);
          remaining -= token.text.length;
        } else {
          partial.push({ ...token, text: token.text.slice(0, remaining) });
          remaining = 0;
        }
      }
      return partial;
    });
  }, [prefersReducedMotion, lineIndex, charIndex]);

  const activeLineLength = useMemo(
    () =>
      prefersReducedMotion
        ? 0
        : CODE[lineIndex]?.reduce(
            (count, token) => count + token.text.length,
            0
          ) ?? 0,
    [prefersReducedMotion, lineIndex]
  );

  const cursorLine = Math.min(lineIndex + 1, CODE.length);
  const cursorColumn = Math.min(charIndex + 1, activeLineLength + 1);

  return (
    <div className="glass-panel relative min-w-0 w-full overflow-hidden rounded-[1.75rem]">
      {/* Scanline overlay for the CRT feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.028) 0px, rgba(255,255,255,0.028) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Window chrome */}
      <div className="relative flex items-center gap-2 border-b border-white/10 bg-white/[0.05] px-4 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 font-mono text-xs tracking-wide text-white/45">
          artur.ts
        </span>
        <span className="pointer-events-none absolute right-4 hidden font-mono text-[10px] text-white/25 sm:inline">
          TS
        </span>
      </div>

      {/* Code area */}
      <div
        className="relative overflow-x-auto px-4 py-4 md:px-6 md:py-5"
        style={{
          backgroundColor: "#0b0f17cc",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div className="flex gap-4 font-mono text-[12.5px] leading-6 md:gap-6 md:text-[13.5px] md:leading-7">
          <div
            aria-hidden
            className="select-none text-right text-white/20"
          >
            {CODE.map((_, lineNumber) => (
              <div key={lineNumber} className="tabular-nums">
                {lineNumber + 1}
              </div>
            ))}
          </div>
          <div className="min-w-0 flex-1">
            {visibleLines.map((line, index) => (
              <div
                key={index}
                className={`whitespace-pre rounded px-1 -mx-1 ${
                  !prefersReducedMotion && index === lineIndex
                    ? "bg-white/[0.045]"
                    : ""
                }`}
              >
                {line.map((token, tokenIndex) => (
                  <span
                    key={tokenIndex}
                    className={token.italic ? "italic" : undefined}
                    style={{ color: token.color ?? SYNTAX.base }}
                  >
                    {token.text}
                  </span>
                ))}
                {!prefersReducedMotion &&
                  index === visibleLines.length - 1 && (
                    <span
                      className={styles.cursor}
                      style={{ ["--cursor" as string]: accentColor }}
                    />
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="relative flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] text-white/40">
        <span className="hidden sm:inline">
          Ln {cursorLine}, Col {cursorColumn}
        </span>
        <span className="flex items-center gap-3">
          <span className="hidden sm:inline">UTF-8</span>
          <span className="animate-pulse text-[#7ee787]/90">
            ✓ No errors
          </span>
        </span>
      </div>
    </div>
  );
}
