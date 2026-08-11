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
      <div className="glass-panel group flex min-h-[250px] flex-col gap-5 hover:cursor-pointer transition-all p-6 rounded-[1.5rem] hover:-translate-y-1 hover:border-[#83e7d8]/40">
        <Fields project={project} />
        <div className="flex flex-col sm:flex-row gap-5">
          <Image
            className="w-20 h-20 rounded-2xl p-2 shrink-0 bg-white/[.06] object-contain group-hover:drop-shadow-xl shadow-white border border-white/10"
            src={project.logoSrc}
            alt={project.name}
            width={128}
            height={128}
          />

          <div className="flex flex-col gap-3">
            <span className="text-2xl font-bold tracking-tight group-hover:text-[#83e7d8] transition-all">
              {project.name}
            </span>

            <span className="text-sm leading-relaxed text-white/55 line-clamp-3">
              {project.description}
            </span>
            <Technologies project={project} />
          </div>
        </div>
      </div>
    </Link>
  );
}
