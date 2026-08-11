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
        className="rounded-full border border-teal-400/25 bg-teal-400/10 px-4 py-1.5 text-sm font-semibold text-teal-200"
      >
        {e}
      </span>
    ));
  }, [project.technologies]);
  return (
    <div
      className={`mt-6 w-full flex flex-wrap gap-2 ${
        center ? "justify-center" : ""
      }`}
    >
      {technologies}
    </div>
  );
}
