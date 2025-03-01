import { useMemo } from "react";
import { BasicProjectDisplayProps } from "../Project";

type TechnologiesProps = BasicProjectDisplayProps & {
  center?: boolean; // Justify the technologies to center
};

export default function Technologies({ project, center }: TechnologiesProps) {
  const technologies = useMemo(() => {
    if (!project.technologies) return null;

    return project.technologies.map((e) => (
      <span
        key={e}
        className="text-teal-300 font-semibold bg-teal-800 bg-opacity-50 p-2 rounded-xl"
      >
        {e}
      </span>
    ));
  }, [project.technologies]);
  return (
    <div
      className={`w-full flex flex-wrap gap-2 ${
        center ? "justify-center" : ""
      }`}
    >
      {technologies}
    </div>
  );
}
