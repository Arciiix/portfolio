"use client";
import "react-awesome-slider/dist/styles.css";

// @ts-ignore
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";

import styles from "./Slider.module.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

interface SliderProps {
  images: string[];
}

export default function Slider({ images }: SliderProps) {
  return (
    <div className="glass-panel mx-auto w-full max-w-3xl overflow-hidden rounded-[1.75rem] p-2 md:p-3">
      <div className="overflow-hidden rounded-[1.25rem]">
        <AutoplaySlider
          className={styles.slider}
          play={true}
          interval={5000}
          mobileTouch
          media={images.map((e) => ({ source: e }))}
          bullets={false}
        />
      </div>
    </div>
  );
}
