import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import Slider from "@/components/Slider/Slider";
import NoticeBanner from "@/components/NoticeBanner/NoticeBanner";

const project = PROJECTS.find((e) => e.id === "aikieter")!;

export default function Aikieter() {
  return (
    <div className="flex flex-col gap-8">
      <ProjectDescription project={project} />

      <NoticeBanner>
        Since this app was created at the work, I cannot share much information
        about it!
      </NoticeBanner>

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
