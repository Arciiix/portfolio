"use client";

import styles from "./AnimatedHeader.module.css";

type StyledHeaderProps = {
  title: string;
  className?: string | null;
};

export default function AnimatedHeader({
  title,
  className,
}: StyledHeaderProps) {
  return (
    <span
      className={`${styles.glitch} text-7xl text-teal-400 font-bold font-mono ${
        className || ""
      }`}
      data-text={title}
    >
      {title}
    </span>
  );
}
