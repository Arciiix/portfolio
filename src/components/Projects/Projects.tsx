import { useMemo, useRef } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";
import { PROJECTS } from "./Project";

export default function Projects() {
  const projects = useMemo(() => {
    return PROJECTS.map((e) => <ProjectCard key={e.id} project={e} />);
  }, []);
  return (
    <div className="relative w-full z-30 p-8 m-0 overflow-hidden">
      <div
        className="absolute -z-10 top-0 left-0 w-full min-h-screen h-full overflow-auto bg-gray-700 bg-opacity-80 m-0 bg-fixed pb-4 opacity-40"
        style={{
          backgroundImage: `radial-gradient(at 47% 33%, #4d1480 0, transparent 59%),
          radial-gradient(at 82% 65%, #116578 0, transparent 55%),
          radial-gradient(at 24% 74%, #0a4957 0, transparent 55%),
          radial-gradient(at 67% 23%, #43114f 0, transparent 55%),
          radial-gradient(at 8% 23%, #1e546e 0, transparent 55%)
          `,
        }}
      ></div>
      <div className="z-40">
        <ProjectsHeader />

        <div className="grid xl:grid-cols-2 grid-cols-1 place-items-center">
          {projects}
        </div>
      </div>
    </div>
  );
}
