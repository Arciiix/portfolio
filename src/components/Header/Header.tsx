import Logo from "../Logo/Logo";
import currentViewAtom from "@/atoms/ui/currentView.atom";
import { useRecoilValue } from "recoil";

export default function Header() {
  const currentView = useRecoilValue(currentViewAtom);

  return (
    <div
      className={`w-full p-2 m-0 fixed ${
        currentView !== "intro" ? "bg-teal-900" : ""
      } rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-500`}
    >
      <Logo size={70} />
    </div>
  );
}
