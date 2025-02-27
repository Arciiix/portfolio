import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import Slider from "@/components/Slider/Slider";

const project = PROJECTS.find((e) => e.id === "aikieter")!;

export default function RuchWahadlowy() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectDescription project={project} />

      <span className="text-yellow-400 bg-yellow-900 bg-opacity-20 p-4 w-max mx-auto rounded-2xl font-bold break-words max-w-full overflow-hidden">
        Since this app was created at the work, I cannot share much information
        about it!
      </span>

      <Slider
        images={[
          "/imgs/projects/aikieter/page.svg",
          "/imgs/projects/aikieter/summary.png",
          "/imgs/projects/aikieter/chat.png",
          "/imgs/projects/aikieter/form.png",
          "/imgs/projects/aikieter/about_me.png",
        ]}
      />
    </div>
  );
}
