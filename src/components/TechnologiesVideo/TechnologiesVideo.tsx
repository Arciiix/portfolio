"use client";

import useCurrentView from "@/hooks/ui/useCurrentView";
import useWindowDimensions from "@/hooks/ui/useWindowDimensions";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

const VIDEO_DURATION_SECONDS = 6;
export default function TechnologiesVideo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!videoRef.current) return;
    const duration = videoRef.current.duration;
    const newPositionInSeconds = latest * duration;
    videoRef.current.currentTime = newPositionInSeconds;
  });

  const { innerHeight } = useWindowDimensions();

  useCurrentView(ref, "showcase");

  return (
    <div
      className="block relative mt-[50vh] -mb-[50vh]"
      style={{
        height: `${innerHeight * VIDEO_DURATION_SECONDS + 1}px`,
      }}
      ref={(r) => (ref.current = r)}
    >
      <video
        ref={(r) => (videoRef.current = r)}
        className={`top-1/2 -translate-y-1/2 sticky w-screen h-screen object-cover`}
        src={"/background.mp4"}
        muted
        preload="metadata"
        autoPlay={false}
      />
    </div>
  );
}
