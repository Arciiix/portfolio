import { useMemo, useRef } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";
import { PROJECTS } from "./Project";
import ColorfulBackground from "../ColorfulBackground/ColorfulBackground";

export default function Projects() {
  const projects = useMemo(() => {
    return PROJECTS.map((e) => <ProjectCard key={e.id} project={e} />);
  }, []);
  return (
    <div className="relative w-full z-30 p-8 m-0 overflow-hidden">
      <ColorfulBackground />
      <div className="z-40">
        <ProjectsHeader />

        <div className="grid xl:grid-cols-2 grid-cols-1 place-items-center">
          {projects}
        </div>
      </div>
    </div>
  );
}
