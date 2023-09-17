import { useMemo } from "react";
import { BasicProjectDisplayProps, Project } from "../Project";
import { adjustColor } from "@/utils/color";

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
        className="text-sm text-teal-400 font-semibold bg-slate-900 bg-opacity-50 p-2 rounded-xl"
      >
        {e}
      </span>
    ));
  }, [project.fields]);

  return (
    <div className="flex flex-col mb-3 gap-2 items-start justify-between sm:flex-row sm:items-center">
      <span
        className="text-lg font-semibold p-2 rounded-xl"
        style={{
          color: project.tag.color,
          backgroundColor: tagDarkerColor,
        }}
      >
        #{project.tag.label}
      </span>
      <div className="flex flex-wrap gap-2 justify-center h-max">{fields}</div>
    </div>
  );
}
