import FAQSection from "@/components/FAQSection/FAQSection";
import FakeProduct from "@/components/FakeProduct/FakeProduct";
import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import Slider from "@/components/Slider/Slider";
import YouTubeEmbed from "@/components/YouTubeEmbed/YouTubeEmbed";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

const project = PROJECTS.find((e) => e.id === "handy")!;

export default function Handy() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectDescription project={project} />

      <span className="mx-auto text-3xl break-words overflow-hidden max-w-full m-2 text-teal-400 font-bold text-center">
        The video says everything! (sound needed)
      </span>
      <YouTubeEmbed
        url={`https://www.youtube.com/embed/cpm_k6NczM4?si=6knsmMURjkhR7Y2g`}
        title="Handy"
      />

      <FAQSection title="Features">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">🖐️ Gesture Recognition</h2>
          <p>
            Control your smart home devices effortlessly with various hand
            gestures -{" "}
            <b>I built and trained a classifier (Random Forest) model</b> by
            myself. It gets the angles between different body joints (thanks to
            MediaPipe and some magic (math to be specific)) as input data and
            outputs the corresponding gesture ID. This sophisticated model
            accurately interprets your hand movements, enabling seamless
            interaction with your IoT devices.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">🏡 Home Assistant Integration</h2>
          <p>
            Handy was built to seamlessly integrate with{" "}
            <Link
              className="link text-teal-400"
              href="https://www.home-assistant.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Home Assistant</b>
            </Link>
            , the most popular central hub for your smart home ecosystem. This
            means you can effortlessly control all your IoT devices that are
            compatible with it.{" "}
            <b>Every single one of them. There is no catch.</b>
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">🎵 Built-In Actions</h2>
          <p>
            The core element of Handy is music control -{" "}
            <b>
              play, pause, adjust volume, switch tracks, play music from YouTube
              or online radio, and much more.
            </b>{" "}
            Want to get an update on weather or want the music player to say the
            current date and time? <b>No problem at all.</b>
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">📱 Mobile App</h2>
          <p>
            If you need to manually control Handy without using hand gestures,
            you can use <b>the mobile app I also created</b>. What&apos;s more,
            it keeps the action history so that you can see who did what and
            when. You can also manage music items (radios/YouTube videos) of the
            playlist used in Handy.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">⚙️ Resource Efficiency</h2>
          <p>
            Efficiently operates on <b>standard surveillance cameras 24/7</b>,
            without any problems. Optimized for <b>fully automated workflow</b>{" "}
            - you forget that this app &quot;works somewhere&quot; - these hand
            gestures become a crucial part of your life (
            <b>trust me, I know what I&apos;m talking about 😅</b>)
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">🤖 Customization</h2>
          <p>
            The app can be <b>customized in every way.</b> You can even build,
            train, and test your own gesture recognition model -{" "}
            <b>I wanted this project to be incredibly friendly for new users</b>{" "}
            - see below for Jupyter notebooks on how to get started. Easily
            customize and extend actions for any IoT device - with the intuitive
            code and docs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">📈 Constant Innovation</h2>
          <p>
            Since this is a crucial part of my (and my family members&apos;)
            lives right now, every problem that I discover will be patched. And
            of course, this doesn&apos;t stop just there. This app will be
            improved so that it becomes a real{" "}
            <b>science fiction dream come true.</b>
          </p>
        </div>
      </FAQSection>

      <FAQSection title="How was this project created?">
        <span>
          Recently, I&apos;ve been really interesting in{" "}
          <b>machine learning and computer</b> vision. The primary reason behind
          my projects in general is to address some problem, often related to
          human shortcomings, like laziness. The same was true for{" "}
          <span className="text-teal-400 font-bold">Handy</span> - outside my
          house, we have <b>a music player</b> (Volumio) that usually plays
          online radio. However,{" "}
          <b>
            sometimes it&apos;s too loud, sometimes too quiet, and sometimes it
            would be helpful to know the time or check the weather
          </b>
          , and so on. Nobody in my family wants to rush inside the house to
          grab their phone (for example when working in the garden) just to
          check these things. That&apos;s why I came up with the idea of
          creating something that, using existing hardware (the total cost of
          this project is literally $0, with no need to install anything new),
          namely a surveillance camera and the music player I mentioned, would
          make this process easier.{" "}
          <b>
            Handy recognizes gestures that allow you to control devices in my
            home IoT network
          </b>
          , including that player. Was there a problem? Yes. Is there a
          solution? Always.
        </span>
      </FAQSection>
    </div>
  );
}
