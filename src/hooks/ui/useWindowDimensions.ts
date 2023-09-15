import { useState, useEffect } from "react";

interface WindowDimensions {
  innerWidth: number;
  innerHeight: number;
}
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

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
