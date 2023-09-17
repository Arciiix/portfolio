import Logo from "../Logo/Logo";
import currentViewAtom from "@/atoms/ui/currentView.atom";
import { useRecoilValue } from "recoil";

import "./Navigation.css";

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
    name: "showcase",
    displayName: "Showcase",
  },
  {
    name: "projects",
    displayName: "Projects",
  },
  {
    name: "contact",
    displayName: "Contact",
  },
];

export default function Header() {
  const currentView = useRecoilValue(currentViewAtom);

  return (
    <div
      className={`w-full p-2 m-0 fixed ${
        currentView !== "intro" ? "bg-teal-900" : ""
      } rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-500 flex justify-between z-40 items-center`}
    >
      <Logo size={70} />

      <div className="flex">
        {NAVIGATION_ITEMS.map((e) => (
          <div key={e.name} className="group flex flex-col mx-2 cursor-pointer">
            <a
              data-to-scrollspy-id={e.name}
              href={`#${e.name}`}
              className="transition-all text-xl text-white text-opacity-70 group-hover:text-white"
            >
              {e.displayName}
            </a>
            <span
              className={`block max-w-0 ${
                currentView === e.name ? "max-w-full" : ""
              } transition-all duration-500 h-0.5 bg-teal-400`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}
