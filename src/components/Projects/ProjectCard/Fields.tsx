import { adjustColor } from "@/utils/color";
import { useMemo } from "react";
import { BasicProjectDisplayProps } from "../Project";

export default function Fields({ project }: BasicProjectDisplayProps) {
  const tagDarkerColor = useMemo(() => {
    if (!project.tag.color) return "";
    return adjustColor(project.tag.color, -80);
  }, [project.tag.color]);

  const fields = useMemo(() => {
    if (!project.fields) return null;
    return project.fields.map((e) => (
      <span
        key={e}
        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-sm font-medium text-teal-200/90"
      >
        {e}
      </span>
    ));
  }, [project.fields]);

  return (
    <div className="mb-3 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
      <span
        className="rounded-full px-4 py-1.5 text-base font-bold"
        style={{
          color: project.tag.color,
          backgroundColor: tagDarkerColor,
          boxShadow: `0 0 26px -8px ${project.tag.color}`,
        }}
      >
        #{project.tag.label}
      </span>
      <div className="flex flex-wrap gap-2 justify-start h-max">{fields}</div>
    </div>
  );
}
