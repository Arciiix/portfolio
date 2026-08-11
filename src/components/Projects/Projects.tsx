"use client";

import { useMemo, useState } from "react";
import ColorfulBackground from "../ColorfulBackground/ColorfulBackground";
import { PROJECTS } from "./Project";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";

export default function Projects() {
  const [activeField, setActiveField] = useState("All work");
  const fields = [
    "All work",
    "IoT",
    "AI",
    "Front-end",
    "Data analysis",
    "Everyday tool",
  ];
  const projects = useMemo(() => {
    return PROJECTS.filter(
      (project) =>
        activeField === "All work" || project.fields.includes(activeField)
    ).map((e) => <ProjectCard key={e.id} project={e} />);
  }, [activeField]);
  return (
    <div className="relative w-full z-30 px-6 py-28 m-0 overflow-hidden lg:px-10">
      <ColorfulBackground />
      <div className="z-40 mx-auto max-w-6xl">
        <ProjectsHeader />
        <div
          className="my-10 flex flex-wrap items-center justify-center gap-2"
          aria-label="Filter projects by focus"
        >
          {fields.map((field) => (
            <button
              key={field}
              type="button"
              onClick={() => setActiveField(field)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all ${activeField === field ? "border-[#83e7d8] bg-[#83e7d8]/15 text-[#a9fff2]" : "border-white/10 bg-white/[.03] text-white/55 hover:border-white/30 hover:text-white"}`}
            >
              {field}
            </button>
          ))}
        </div>

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">{projects}</div>
      </div>
    </div>
  );
}
