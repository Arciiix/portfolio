import Logo from "../Logo/Logo";

import Hamburger from "../Hamburger/Hamburger";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "@/hooks/ui/useWindowDimensions";
import { BREAKPOINTS_LG } from "@/utils/size";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NAVIGATION_ITEMS: Record<
  string,
  { displayName: string; special?: boolean }
> = {
  intro: {
    displayName: "Intro",
  },
  aboutMe: {
    displayName: "About me",
  },
  projects: {
    displayName: "Projects",
    special: true,
  },
  showcase: {
    displayName: "Showcase",
  },
  contact: {
    displayName: "Contact",
  },
};

export default function Header() {
  const pathname = usePathname();
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(
    pathname !== "/"
  );
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const { innerWidth } = useWindowDimensions();

  useEffect(() => {
    if (pathname !== "/") {
      setHasScrolledPastHero(true);
      return;
    }

    const onScroll = () => {
      setHasScrolledPastHero(window.scrollY > window.innerHeight * 0.9);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const onNavigationToggle = () => setIsNavigationOpen((prev) => !prev);

  const navigationItems = useMemo(() => {
    return Object.entries(NAVIGATION_ITEMS).map(([key, value]) => (
      <div key={key} className="group flex flex-col cursor-pointer">
        <a
          data-to-scrollspy-id={key}
          href={`/#${key}`}
          onClick={() => setIsNavigationOpen(false)}
          className={`transition-all text-[13px] tracking-wide group-hover:text-[#83e7d8] text-opacity-70 ${
            value.special ? "font-bold text-[#83e7d8]" : "text-white"
          }
          `}
        >
          {value.displayName}
        </a>
        <span
          className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-[#83e7d8]`}
        ></span>
      </div>
    ));
  }, []);

  return (
    <div
      className={`fixed z-40 flex items-center justify-between transition-all duration-500 ${
        hasScrolledPastHero
          ? "top-4 left-1/2 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl px-4 py-3 glass-panel"
          : "top-0 left-0 w-full rounded-none border border-transparent bg-transparent px-16 py-4 shadow-none backdrop-blur-0"
      }`}
    >
      <Link href="/">
        <div className="flex items-center gap-3">
          <Logo size={42} />
          <AnimatePresence initial={false}>
            {hasScrolledPastHero ? (
              <motion.span
                className="hidden sm:block text-sm font-semibold tracking-tight"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
              >
                Artur Nowak{" "}
                <span className="text-white/35 font-normal">/ engineer</span>
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>
      </Link>

      <div className="flex lg:hidden">
        <Hamburger isOpen={isNavigationOpen} onToggle={onNavigationToggle} />
      </div>
      <div className="hidden lg:flex items-center gap-7">{navigationItems}</div>

      <AnimatePresence>
        {isNavigationOpen && innerWidth < BREAKPOINTS_LG ? (
          <motion.div
            className="fixed top-0 left-0 glass-panel w-full p-6 pt-24 -z-10 flex flex-col gap-5 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navigationItems}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
