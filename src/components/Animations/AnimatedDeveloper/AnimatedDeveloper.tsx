import Lottie from "lottie-react";
import programmingAnimation from "./programmingAnimation.json";

export default function AnimatedDeveloper() {
  return (
    <Lottie
      className="max-w-xs lg:max-w-2xl"
      animationData={programmingAnimation}
      loop={true}
    />
  );
}
