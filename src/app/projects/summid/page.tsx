import FAQSection from "@/components/FAQSection/FAQSection";
import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import YouTubeEmbed from "@/components/YouTubeEmbed/YouTubeEmbed";

const project = PROJECTS.find((e) => e.id === "summid")!;

export default function Summid() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectDescription project={project} />
      <FAQSection title="Why?">
        <span>
          I have a friend who always sends me a lot of programming-related
          videos. I don&apos;t always have time to watch them even though I
          would really love to (they always bring a huge value to my programming
          journey, but the thing is that they&apos;re long). I wanted to make
          something to get over this problem -{" "}
          <b>
            and that&apos;s how I came up with{" "}
            <span className="text-teal-400">Summid</span>
          </b>{" "}
          - thanks to Summid, I can &quot;watch&quot; the entire video in just
          one click.
        </span>
      </FAQSection>

      <YouTubeEmbed
        url={`https://www.youtube.com/embed/K1Z06YLhxoo?si=T00q2DQDw4chX1jr`}
        title="Summid"
      />
    </div>
  );
}
