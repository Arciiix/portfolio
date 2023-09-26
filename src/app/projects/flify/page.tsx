import FAQSection from "@/components/FAQSection/FAQSection";
import FakeProduct from "@/components/FakeProduct/FakeProduct";
import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import Slider from "@/components/Slider/Slider";
import YouTubeEmbed from "@/components/YouTubeEmbed/YouTubeEmbed";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

const project = PROJECTS.find((e) => e.id === "flify")!;

export default function Flify() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectDescription project={project} />

      <YouTubeEmbed
        url={`https://www.youtube.com/embed/p5-mp5KFIAI?si=mUfREnFlJTdM34wh`}
        title="Flify"
      />
      <FAQSection title="Choose your side 👀">
        <div className="m-4 flex gap-4 items-center mx-auto flex-col">
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <FakeProduct
              imageSrc="/imgs/projects/flify/speaker.jpg"
              imageAlt="Speaker"
              title="A wireless speaker"
              description="Required for audio playback"
              price="830 PLN"
            />
            <div className="text-6xl text-red-200 text-opacity-90">+</div>
            <FakeProduct
              imageSrc="/imgs/projects/flify/bluetooth-adapter.jpg"
              imageAlt="Bluetooth adapter"
              title="A Bluetooth adapter"
              description="Required if your computer doesn't have Bluetooth built-in"
              price="120 PLN"
            />
          </div>
          <div className="text-sm text-slate-400">Images via Pixabay</div>
          <span className="text-7xl m-5 text-green-200 font-bold">OR</span>
          <div>
            <FakeProduct
              imageSrc="/imgs/projects/flify/logo.png"
              imageAlt="Flify"
              title="Flify"
              description="A completely free, easy to use app"
              price="0 PLN"
              isBlue
            />
          </div>
        </div>
      </FAQSection>

      <FAQSection title="What for?">
        <span>
          Stream PC audio or microphone to mobile easily, in the blink of an
          eye. You&apos;re on your PC that doesn&apos;t have Bluetooth and you
          want to use your portable speaker? Use this app. Or even if your
          computer has Bluetooth, it is limited in the range of usability - want
          to extend your area of music as much as you would like? This app is a
          perfect fit.
        </span>
      </FAQSection>

      <FAQSection title="Features">
        <ul>
          <li>
            🎧 Send audio from any host audio device (could be speakers,
            microphone, etc.) to the Flify mobile app
          </li>
          <li>
            👥 Multi-device support - connect multiple mobile devices to Flify
            simultaneously for a synchronized audio experience
          </li>
          <li>
            🎶 Control the audio playback from either mobile and desktop -
            volume (both mobile and desktop), previous track, next track,
            pause/play
          </li>
          <li>
            🔗 Trivially simple connection system - you just scan the QR code or
            manually copy the IP address with the port (all is shown on the
            screen)
          </li>
          <li>
            🔄 Intelligent reconnection system - to prevent random breaks in
            audio delivery or connection problems
          </li>
          <li>
            📡 Reconnection of all devices - to ensure the lowest latency
            possible
          </li>
          <li>
            📊 Real-time connection status - stay informed about the network
            connection quality with all the devices and their state - ping,
            battery level
          </li>
          <li>
            🔊 High-quality audio streaming - experience crystal-clear sound
          </li>
          <li>
            🎨 Modern, smooth, animated, and user-friendly design with quick
            setup - start streaming audio within seconds
          </li>
        </ul>
      </FAQSection>

      <Slider
        images={[
          "https://raw.githubusercontent.com/Arciiix/Flify/main/assets/screenshots/desktop_init.png",
          "https://raw.githubusercontent.com/Arciiix/Flify/main/assets/screenshots/desktop_main.png",
          "https://raw.githubusercontent.com/Arciiix/Flify/main/assets/screenshots/desktop_select_device.png",
          "https://raw.githubusercontent.com/Arciiix/Flify/main/assets/screenshots/desktop_in_connection.png",
          "https://raw.githubusercontent.com/Arciiix/Flify/main/assets/screenshots/desktop_notification.png",
          "https://raw.githubusercontent.com/Arciiix/Flify/main/assets/screenshots/mobile_main.jpg",
          "https://raw.githubusercontent.com/Arciiix/Flify/main/assets/screenshots/mobile_connection.jpg",
          "https://raw.githubusercontent.com/Arciiix/Flify/main/assets/screenshots/mobile_reconnect.jpg",
          "https://raw.githubusercontent.com/Arciiix/Flify/main/assets/screenshots/mobile_notification.jpg",
        ]}
      />
    </div>
  );
}
