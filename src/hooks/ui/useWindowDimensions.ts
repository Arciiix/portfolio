import { useState, useEffect } from "react";

interface WindowDimensions {
  innerWidth: number;
  innerHeight: number;
}
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    () => ({
      innerWidth: typeof window !== "undefined" ? window.innerWidth : 0,
      innerHeight: typeof window !== "undefined" ? window.innerHeight : 0,
    })
  );

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateWindowDimensions);

    // Initial update of window dimensions
    updateWindowDimensions();

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return windowDimensions;
}
