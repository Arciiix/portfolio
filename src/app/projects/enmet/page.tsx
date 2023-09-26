import FAQSection from "@/components/FAQSection/FAQSection";
import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import Slider from "@/components/Slider/Slider";
import YouTubeEmbed from "@/components/YouTubeEmbed/YouTubeEmbed";
import Link from "next/link";

const project = PROJECTS.find((e) => e.id === "enmet")!;

export default function Enmet() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectDescription project={project} />

      <span className="text-yellow-400 bg-yellow-900 bg-opacity-20 p-4 w-max mx-auto rounded-2xl font-bold break-words max-w-full overflow-hidden">
        Since this app was created at the work, I cannot share much information
        about it!
      </span>
      <FAQSection title="Why was this app created?">
        <span>
          I created this app during my interview at{" "}
          <Link
            className="link text-teal-400"
            href="https://www.pol-eko.com.pl/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>POL-EKO</b>
          </Link>
          , that I won in a programming competition for creating{" "}
          <Link className="link text-teal-400" href="/projects/coldtime">
            <b>Coldtime</b>
          </Link>
          .
        </span>
      </FAQSection>

      <FAQSection title="What does it do?">
        <span>
          Enmet is a real corporate app - as the description says, it shows deep
          analysis of data gathered from the Eastron SMART X96 Smart Meter. It
          involves a lot of features, including{" "}
          <b>
            advanced charts (e.g. heatmap, candlestick), realtime memory caching
            system, generating raports (PDF/Excel/JSON) together with charts,
            aggregating historical data, intuitive modern design, and much more!
          </b>
        </span>
      </FAQSection>
    </div>
  );
}
