"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { TubesApp } from "threejs-components/build/cursors/tubes1.min.js";

const TUBES_COLORS = ["#f967fb", "#53bc28", "#6958d5"];
const LIGHTS_INTENSITY = 200;
const LIGHTS_COLORS = ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"];

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;

const randomColors = (count: number): string[] =>
  Array.from({ length: count }, randomHexColor);

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tubesRef = useRef<TubesApp | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let app: TubesApp | null = null;

    const isCoarsePointer =
      window.matchMedia?.("(pointer: coarse)").matches ?? false;

    (async () => {
      try {
        const libModule = await import(
          "threejs-components/build/cursors/tubes1.min.js"
        );
        if (disposed || !canvasRef.current) return;

        app = libModule.default(canvasRef.current, {
          tubes: {
            colors: TUBES_COLORS,
            lights: {
              intensity: LIGHTS_INTENSITY,
              colors: LIGHTS_COLORS,
            },
          },
          // Postprocessing bloom is the heaviest part; skip it on touch devices.
          bloom: isCoarsePointer ? false : undefined,
        });

        // The library forces a pixel ratio of 2 by default. Cap it on mobile
        // devices to keep the WebGL renderer light. Non-fatal if it fails.
        try {
          if (isCoarsePointer && app.three) {
            app.three.minPixelRatio = 1;
            app.three.maxPixelRatio = 1.5;
            app.three.resize?.();
          }
        } catch {
          // Renderer still works with its defaults.
        }

        tubesRef.current = app;
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to initialize tubes background:", error);
      }
    })();

    return () => {
      disposed = true;
      tubesRef.current = null;
      app?.dispose?.();
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;

    tubesRef.current.tubes.setColors(randomColors(3));
    tubesRef.current.tubes.setLightsColors(randomColors(4));
  };

  return (
    <div
      className={cn(
        "relative h-full w-full min-h-screen overflow-hidden bg-[#08080f]",
        className
      )}
      onClick={handleClick}
    >
      {/* Static gradient shown until WebGL is ready (or with reduced motion). */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-[#241a45] via-[#0b0f1a] to-[#10281f] transition-opacity duration-1000",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />

      <canvas
        ref={canvasRef}
        aria-hidden
        className={cn(
          "absolute inset-0 block h-full w-full transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ touchAction: "none" }}
      />

      <div className="pointer-events-none relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
