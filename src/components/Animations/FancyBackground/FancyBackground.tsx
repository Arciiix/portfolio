import { useMemo } from "react";
import styles from "./FancyBackground.module.css";
import { getRandomItem } from "@/utils/array";

const shapes = ["circle", "triangle", "cross", "square"];

// From 10% to 90%
let positions = Array.from({ length: 80 }, (_, i) => `${i + 10}%`);
// Increased rate at corners - duplicate position from 10% to 15% and 85% to 90%
positions = [
  ...positions,
  ...Array.from({ length: 10 }, (_, i) => `${i + 10}%`),
  ...Array.from({ length: 10 }, (_, i) => `${i + 85}%`),
];

function getRandomDelay(min: number, max: number): string {
  return `${Math.random() * (max - min) + min}s`;
}

export default function FancyBackground() {
  const isSmallScreen = window.innerWidth < 640;

  const shapesArray = useMemo(() => {
    return Array.from({ length: isSmallScreen ? 10 : 50 }).map((_, i) => ({
      shape: getRandomItem(shapes),
      position: {
        top: getRandomItem(positions),
        left: getRandomItem(positions),
      },
      animationDelay: getRandomDelay(-5, 0), // random delay between -5s and 0s
    }));
  }, [isSmallScreen]);

  return (
    <div className="top-20 my-20 w-full z-0 h-[90%]">
      {shapesArray.map((item, i) => (
        <span
          key={i}
          className={`${styles.shape} ${styles[item.shape]}`}
          style={{
            top: item.position.top,
            left: item.position.left,
            animationDelay: item.animationDelay,
          }}
        ></span>
      ))}
    </div>
  );
}
