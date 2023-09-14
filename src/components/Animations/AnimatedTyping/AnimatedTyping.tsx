"use client";
import React, { useState, useEffect } from "react";

interface AnimatedTypingProps {
  words: string[];
  cursorColor: string;
}

export default function AnimatedTyping({
  words,
  cursorColor,
}: AnimatedTypingProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let displayedText = "";
    let wait = false; // If the untyping animation is done
    const timer = setInterval(async () => {
      if (wait) return;

      if (currentCharIndex < words[currentWordIndex].length) {
        displayedText =
          displayedText + words[currentWordIndex][currentCharIndex];
        setDisplayedText(displayedText);
        currentCharIndex++;
      } else {
        // Delay before untyping the word
        wait = true;
        setTimeout(() => {
          const untypeTimer = setInterval(() => {
            if (displayedText.length > 0) {
              displayedText = displayedText.slice(0, -1); // Remove the last character
              setDisplayedText(displayedText);
            } else {
              clearInterval(untypeTimer);
              wait = false;
              currentCharIndex = 0;
              currentWordIndex = (currentWordIndex + 1) % words.length;
            }
          }, 100); // Speed at which characters are untyped (100ms per character)
        }, 1500); // Delay for 1,5 second after displaying a word
      }
    }, 100); // Speed at which characters are typed (100ms per character)

    return () => {
      clearInterval(timer);
    };
  }, [words]);

  return (
    <div>
      <span>{displayedText}</span>
      <span
        className="transition-all delay-300 animate-blink font-bold"
        style={{
          color: cursorColor,
        }}
      >
        |
      </span>
    </div>
  );
}
