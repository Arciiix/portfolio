import { useMemo } from "react";
import { adjustColor } from "@/utils/color";
import { Project } from "../Project";
import Image from "next/image";
import Link from "next/link";
import Fields from "./Fields";
import Technologies from "./Technologies";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group flex flex-col gap-3 max-w-xl hover:cursor-pointer transition-all hover:bg-white hover:bg-opacity-5 p-7 rounded-2xl border-[0.5px] border-white border-opacity-0 hover:border-opacity-5 hover:-translate-y-2">
        <Fields project={project} />
        <div className="flex flex-col lg:flex-row gap-5">
          <Image
            className="w-28 h-28 rounded-xl p-1 shrink-0 group-hover:border-opacity-10 border-opacity-0 border-[0.5px] border-white"
            src={project.logoSrc}
            alt={project.name}
            width={128}
            height={128}
          />

          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold group-hover:text-teal-400 transition-all">
              {project.name}
            </span>

            <span>{project.description}</span>
            <Technologies project={project} />
          </div>
        </div>
      </div>
    </Link>
  );
}
