"use client";

import contactAnimation from "./contactAnimation.json";
import Lottie from "lottie-react";

export default function FlyingContact() {
  return (
    <Lottie
      className="flex-1 mx-auto lg:mx-0 w-[50vw] lg:w-auto"
      animationData={contactAnimation}
      loop={true}
    />
  );
}
