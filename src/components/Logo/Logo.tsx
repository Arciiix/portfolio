"use client";
import { AnimationProps, Transition, motion } from "framer-motion";

interface LogoProps {
  withoutFill?: boolean;
  repeat?: boolean; // PLay the animation all the time
  notSelectable?: boolean; // No effect on hover

  size?: number;
}

export default function Logo({
  withoutFill,
  repeat,
  size = 150,
  notSelectable,
}: LogoProps) {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: withoutFill ? "none" : "rgba(255, 255, 255, 0)",
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
      fill: withoutFill ? "none" : "rgba(255, 255, 255, 1)",
      fillOpacity: 1,
    },
    outlined: {
      pathLength: 1,
      fillOpacity: 0,
    },
  };

  const transition: Transition = {
    default: {
      duration: 2,
    },
    pathLength: {
      duration: 2,
      repeat: repeat ? Infinity : 0,
      repeatType: repeat ? "mirror" : undefined,
    },
    fill: {
      delay: 1.5,
    },
    fillOpacity: {
      duration: 0.4,
    },
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 134 115"
      initial="hidden"
      animate="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={notSelectable ? "visible" : "outlined"}
    >
      <motion.path
        d="M17.7721 113H18.4782L18.7145 112.335L29.4998 81.9524H72.422L83.2073 112.335L83.4436 113H84.1497H98.0676H99.5001L99.0063 111.655L58.7515 2.02513L58.5109 1.36981H57.8128H44.109H43.4109L43.1703 2.02513L2.91547 111.655L2.42172 113H3.85419H17.7721ZM50.9609 21.4965L67.5315 68.1757H34.3903L50.9609 21.4965Z"
        stroke="white"
        stroke-width="2"
        variants={icon}
        transition={transition}
      />
      <motion.path
        d="M132.933 3V2H131.933H118.872H117.872V3V87.64L58.6685 2.42941L58.3702 2H57.8473H45H44V3V112.63V113.63H45H58.2755H59.2755V112.63V28.2055L118.264 113.2L118.563 113.63H119.086H131.933H132.933V112.63V3Z"
        stroke="white"
        stroke-width="2"
        variants={icon}
        transition={transition}
      />
    </motion.svg>
  );
}
