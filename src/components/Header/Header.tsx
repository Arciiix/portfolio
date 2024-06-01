import Logo from "../Logo/Logo";
import currentViewAtom from "@/atoms/ui/currentView.atom";
import { useRecoilValue } from "recoil";

import Hamburger from "../Hamburger/Hamburger";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "@/hooks/ui/useWindowDimensions";
import { BREAKPOINTS_LG } from "@/utils/size";
import Link from "next/link";

export const NAVIGATION_ITEMS = [
  {
    name: "intro",
    displayName: "Intro",
  },
  {
    name: "aboutMe",
    displayName: "About me",
  },
  {
    name: "projects",
    displayName: "Projects",
    special: true,
  },
  {
    name: "showcase",
    displayName: "Showcase",
  },
  {
    name: "contact",
    displayName: "Contact",
  },
];

export default function Header() {
  const currentView = useRecoilValue(currentViewAtom);

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const { innerWidth } = useWindowDimensions();

  const onNavigationToggle = () => setIsNavigationOpen((prev) => !prev);

  const navigationItems = useMemo(() => {
    return NAVIGATION_ITEMS.map((e) => (
      <div key={e.name} className="group flex flex-col mx-2 cursor-pointer">
        <a
          data-to-scrollspy-id={e.name}
          href={`/#${e.name}`}
          className={`transition-all text-xl group-hover:text-teal-400 group-hover:font-bold text-opacity-70 ${
            e.special
              ? "font-bold bg-gradient-to-r  from-green-200 to-blue-300 bg-clip-text text-transparent"
              : "text-white"
          }
          `}
        >
          {e.displayName}
        </a>
        <span
          className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-400`}
        ></span>
      </div>
    ));
  }, []);

  return (
    <div
      className={`w-full p-2 m-0 fixed ${
        currentView !== "intro" ? "bg-teal-900" : ""
      } rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-500 flex justify-between z-40 items-center`}
    >
      <Link href="/">
        <Logo size={70} />
      </Link>

      <div className="flex lg:hidden">
        <Hamburger isOpen={isNavigationOpen} onToggle={onNavigationToggle} />
      </div>
      <div className="hidden lg:flex">{navigationItems}</div>

      <AnimatePresence>
        {isNavigationOpen && innerWidth < BREAKPOINTS_LG ? (
          <motion.div
            className={
              "fixed top-0 left-0 bg-slate-900 w-full p-4 pt-28 -z-10 flex flex-col gap-3"
            }
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
