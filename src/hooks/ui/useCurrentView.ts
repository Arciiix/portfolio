import currentViewAtom, { CurrentView } from "@/atoms/ui/currentView.atom";
import { useInView } from "framer-motion";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function useCurrentView(
  ref: React.RefObject<HTMLDivElement>,
  view: CurrentView
) {
  const [currentView, setCurrentView] = useRecoilState(currentViewAtom);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      setCurrentView(view);
    }
    // else if (currentView === view) {
    //   // TODO: Test whether it doesn't make problems - the state might've changed before

    //   // If the current page is not in view anymore and the value is still old, change it to other
    //   setCurrentView("other");
    // }
    return () => {};
  }, [inView, setCurrentView, view]);

  return { currentView };
}
