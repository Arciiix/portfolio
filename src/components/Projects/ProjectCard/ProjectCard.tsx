import { useMemo } from "react";
import { adjustColor } from "@/utils/color";
import { Project } from "../Project";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
    <Link href={`/projects/${project.id}`}>
      <div className="group flex flex-col gap-3 max-w-xl hover:cursor-pointer transition-all hover:bg-white hover:bg-opacity-5 p-7 rounded-2xl border-[0.5px] border-white border-opacity-0 hover:border-opacity-5 hover:-translate-y-2">
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
          <div className="flex flex-wrap gap-2 justify-center h-max">
            {fields}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <Image
            className="w-28 h-28 rounded-xl p-1 shrink-0 group-hover:border-opacity-10 border-opacity-0 border-[0.5px] border-white"
            src={project.logoSrc}
            alt={project.name}
            width={32}
            height={32}
          />

          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold group-hover:text-teal-400 transition-all">
              {project.name}
            </span>

            <span>{project.description}</span>
            <div className="w-full flex flex-wrap gap-2">{technologies}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
