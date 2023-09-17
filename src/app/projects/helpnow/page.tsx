import FAQSection from "@/components/FAQSection/FAQSection";
import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";

const project = PROJECTS.find((e) => e.id === "helpnow")!;

export default function HelpNow() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectDescription project={project} />
      <FAQSection title="What is this?">
        <span>
          This is a project that was created for{" "}
          <Link
            href="https://hackheroes.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hack Heroes
          </Link>{" "}
          hackathon. I made it together with a group of my friends. I was the{" "}
          <b>
            project manager, full-stack developer, team leader and the architect
          </b>{" "}
          of this app.
        </span>
      </FAQSection>
      <FAQSection title="Why?">
        <span>
          Our project addresses a{" "}
          <b>
            critical gap in the market by providing a platform for requesting
            assistance
          </b>
          , which is often overlooked among various goods and service apps -
          there are a lot of apps that make our life easier by delivering
          services directly to our houses - especially ordering food (Uber Eats,
          Glovo). But there isn&apos;t any app that is for &quot;people&quot; -
          <b>neighborly help is a crucial part of the society</b>, so our goal
          was to make it easier and more accessible around cities, where you
          don&apos;t know the neighbors as well.
        </span>
      </FAQSection>
      <FAQSection title="How it works?">
        <span>
          Our application enables users to create{" "}
          <b className="text-teal-400">&quot;help request posts&quot;</b>
          where they can provide details such as problem descriptions, location,
          urgency level, and even whether they are willing to offer a small
          reward. These posts are visible to other users, sorted by proximity
          and recency. When users offer their assistance, contact information is
          shared only with those who pledge help.
          <p>
            Once a task is completed or has sufficient volunteer support, the
            author can mark it as done, moving it to a separate section for both
            the author and the helpers. In the future, we plan to implement{" "}
            <b>
              an autonomous messaging system, content moderation, and an
              &quot;emergency button&quot;
            </b>{" "}
            for immediate assistance requests. Notifications are also on our
            roadmap. Our project could find value as a solution for healthcare
            institutions and organizations involved in community engagement.
          </p>
        </span>
      </FAQSection>
      <FAQSection title="Small project, huge step for soft skills">
        <span>
          Despite being high school sophomores, we dedicated our time over two
          weeks (that&apos;s how long this project took to make) to ensure the
          quality and overcame the challenge of working together for the first
          time, enhancing both our technical and soft skills.
          <Link
            href={project.demoURL!}
            className="m-2 font-bold text-teal-400"
            target="_blank"
          >
            Be sure to check the demo!
          </Link>
        </span>
      </FAQSection>
      <Slider
        images={[
          "/imgs/projects/helpnow/ss1.png",
          "/imgs/projects/helpnow/ss2.png",
          "/imgs/projects/helpnow/ss3.png",
        ]}
      />
    </div>
  );
}
