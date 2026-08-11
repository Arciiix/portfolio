import FAQSection from "@/components/FAQSection/FAQSection";
import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import YouTubeEmbed from "@/components/YouTubeEmbed/YouTubeEmbed";
import NoticeBanner from "@/components/NoticeBanner/NoticeBanner";

const project = PROJECTS.find((e) => e.id === "ruchWahadlowy")!;

export default function RuchWahadlowy() {
  return (
    <div className="flex flex-col gap-8">
      <ProjectDescription project={project} />

      <div className="flex flex-col items-center gap-3">
        <h2 className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl">
          Watch the video to learn more!
        </h2>
        <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-semibold text-blue-300">
          English captions available
        </span>
      </div>
      <YouTubeEmbed
        url={`https://www.youtube.com/embed/57xFxJmKs_w?si=I68Hlv8Ijn-Q7lCN`}
        title="Ruch wahadłowy"
      />

      <NoticeBanner>
        I cannot share much information or show too many things about it since
        it&apos;s a potential innovation contests runner and is a property of
        me, my team and school. Please contact me for more information.
      </NoticeBanner>
      <FAQSection title="The team">
        <div className="flex flex-col gap-1">
          <span>
            This is a project that our vocational subjects&apos; teacher, Mr.
            Dariusz Radajewski,{" "}
            <b>
              offered me to do as an opportunity to grow my programming skills
            </b>
            , instead of wasting time during the lessons for the technologies{" "}
            <b>I already know</b> (full-stack development).
          </span>
          <span>
            Later, I also introduced one of my friends to the project. He was
            supposed to be <b>the UI designer</b> - to create a front-end app
            visualizing the data in real time.
          </span>
          <span>
            When the project was slowly going toward its first alpha preview
            version, I also invited another friend of mine to do the{" "}
            <b>soldering part</b> - because we were creating a real miniature
            prototype of the entire project. I was responsible for{" "}
            <i>creating the schema</i> (in my head) and connecting all the wires
            together.{" "}
            <b className="text-teal-400">
              Thanks to this project, I learned a lot about electronics and
              computer vision.
            </b>
          </span>
        </div>
      </FAQSection>
      <FAQSection title="Why?">
        <span>
          Imagine a world where every alternating traffic is{" "}
          <b>the definition of safety</b>, where the streets{" "}
          <b>
            flow smoothly with the rhythm of fully automated, intelligent
            traffic lights
          </b>
          . In our groundbreaking project, we use the power of computer vision
          to{" "}
          <b>
            choreograph this symphony of motion, preventing reckless red light
            runners and saving lives with every green light
          </b>
          . Imagine that - the roads are not just efficient, but also a
          testament to the triumph of technology and humanity working in harmony
          – a world where every{" "}
          <b className="text-teal-400">
            green light is a promise of safety, and every red light is a beacon
            of protection
          </b>
          .
        </span>
      </FAQSection>
      <FAQSection title="How it works?">
        <span>
          This app processes the video feed from the two sides of an alternating
          traffic (for prototype purposes,{" "}
          <b>
            I created a Flutter app to send the video feed remotely to the
            server directly from our phones, to reduce the budget
          </b>
          ). Then it recognizes and counts all of the vehicles from both the
          sides. It utilizes{" "}
          <b>
            a special algorithm we created by ourselves to either switch the
            light to green or red
          </b>
          . It reduces the waiting time and safety.
        </span>
      </FAQSection>
    </div>
  );
}
