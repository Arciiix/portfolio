import Lottie from "lottie-react";
import programmingAnimation from "./programmingAnimation.json";

export default function AnimatedDeveloper() {
  return <Lottie animationData={programmingAnimation} loop={true} />;
}
