"use client";

import SplashScreen from "@/pages/Loading/SplashScreen";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Splash } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import { RecoilRoot } from "recoil";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artur Nowak",
  description:
    "Passionate about programming since childhood, ready to show off the passion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo/favicon-16x16.png"
        />
        <link rel="manifest" href="/logo/manifest.json" />
        <link
          rel="mask-icon"
          href="/logo/safari-pinned-tab.svg"
          color="#3c6672"
        />
        <link rel="shortcut icon" href="/logo/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/logo/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
