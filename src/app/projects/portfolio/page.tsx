import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";

const project = PROJECTS.find((e) => e.id === "portfolio")!;

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectDescription project={project} />
    </div>
  );
}
