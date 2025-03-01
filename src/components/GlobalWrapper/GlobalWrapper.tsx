"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SplashScreen from "@/pages/Loading/SplashScreen";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { FRAME_FILENAMES } from "../TechnologiesVideo/TechnologiesVideo";

interface GlobalWrapperProps {
  children: ReactNode;
}

let alreadyCachedImages = false;
// A function to preload images used at the scroll animation later in the app
const cacheImages = async () => {
  if (alreadyCachedImages) return;
  alreadyCachedImages = true;

  const promises = await FRAME_FILENAMES.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  await Promise.all(promises);
};

export default function GlobalWrapper({ children }: GlobalWrapperProps) {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      // Show the splash screen on first load
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 10);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setIsLoading(false);
    }
  }, [pathname]);

  useEffect(() => {
    cacheImages();
  }, []);
  return (
    <RecoilRoot>
      <AnimatePresence initial={true} mode="wait">
        <motion.div key={(pathname ?? "") + isLoading}>
          <div className="z-10 w-full h-screen">
            {isLoading ? (
              <div></div>
            ) : (
              <div>
                <Header />
                {children}
                <Footer />
              </div>
            )}
          </div>

          <motion.div
            className="absolute top-0 left-0 w-full h-screen origin-bottom bg-gray-950"
            initial={{ scaleY: 0, zIndex: -1 }}
            animate={{ scaleY: 0, zIndex: -1 }}
            exit={{ scaleY: 1, zIndex: 999 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-screen origin-top bg-gray-950"
            initial={{ scaleY: 1, zIndex: -1 }}
            animate={{ scaleY: 0, zIndex: -1 }}
            exit={{ scaleY: 0, zIndex: 999 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-screen"
            initial={{ opacity: 0, zIndex: -1 }}
            animate={{ opacity: 0, zIndex: -1 }}
            exit={{ opacity: 1, zIndex: 999 }}
            transition={{ duration: 2 }}
          >
            <SplashScreen />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </RecoilRoot>
  );
}
