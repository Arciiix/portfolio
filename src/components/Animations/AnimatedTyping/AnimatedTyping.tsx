"use client";

import { useEffect, useState } from "react";

interface AnimatedTypingProps {
  words: string[];
  cursorColor: string;
}

const TYPE_SPEED_MS = 90;
const DELETE_SPEED_MS = 50;
const HOLD_DURATION_MS = 1600;

export default function AnimatedTyping({
  words,
  cursorColor,
}: AnimatedTypingProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charCount < currentWord.length) {
      timeout = setTimeout(
        () => setCharCount((count) => count + 1),
        TYPE_SPEED_MS
      );
    } else if (!isDeleting && charCount === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), HOLD_DURATION_MS);
    } else if (isDeleting && charCount > 0) {
      timeout = setTimeout(
        () => setCharCount((count) => count - 1),
        DELETE_SPEED_MS
      );
    } else {
      setIsDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
      setCharCount(0);
      return;
    }

    return () => clearTimeout(timeout);
  }, [words, wordIndex, charCount, isDeleting]);

  const displayedText = (words[wordIndex % words.length] ?? "").slice(
    0,
    charCount
  );

  return (
    <div>
      <span className="break-words text-wrap">
        {displayedText}{" "}
        <span
          className="transition-all delay-300 animate-blink font-bold"
          style={{
            color: cursorColor,
          }}
        >
          |
        </span>
      </span>
    </div>
  );
}
