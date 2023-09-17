import { atom } from "recoil";

export type CurrentView =
  | "intro"
  | "aboutMe"
  | "showcase"
  | "projects"
  | "contact"
  | "other";

const currentViewAtom = atom<CurrentView>({
  key: "currentView",
  default: "other",
});

export default currentViewAtom;
