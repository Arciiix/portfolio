"use client";

import useCurrentView from "@/hooks/ui/useCurrentView";
import useWindowDimensions from "@/hooks/ui/useWindowDimensions";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export const VIDEO_DURATION_SECONDS = 3;
export const NUMBER_OF_FRAMES = 98;

export const FRAME_FILENAMES = Array.from(
  { length: NUMBER_OF_FRAMES },
  (_, i) => {
    return `/background-frames/frame_${(i + 1)
      .toString()
      .padStart(4, "0")}.jpg`;
  }
);

export default function TechnologiesVideo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Latest is a value between 0 and 1. Let's assume we end at 80% of the scroll
    let percentage = latest * (1 / 0.8);
    const frameIndex = Math.floor(percentage * NUMBER_OF_FRAMES);
    const img = new Image();
    img.src = FRAME_FILENAMES[frameIndex];
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  });

  const { innerHeight } = useWindowDimensions();

  useCurrentView(ref, "showcase");

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = FRAME_FILENAMES[0];
    img.onload = () => {
      // Don't change the canvas size, it will be stretched
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, []);

  return (
    <div
      className="block relative mt-[50vh] -mb-[50vh]"
      style={{
        height: `${innerHeight * VIDEO_DURATION_SECONDS + 1}px`,
        // Width is 100vw - scrollbar width
        width: `calc(100vw - ${
          window.innerWidth - document.body.clientWidth
        }px)`,
      }}
      ref={(r) => (ref.current = r)}
    >
      <canvas
        ref={(r) => (canvasRef.current = r)}
        className={`top-1/2 -translate-y-1/2 sticky w-full h-screen object-cover`}
      />
    </div>
  );
}
