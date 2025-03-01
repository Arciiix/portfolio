import FAQSection from "@/components/FAQSection/FAQSection";
import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";

const project = PROJECTS.find((e) => e.id === "coldtime")!;

export default function Coldtime() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectDescription project={project} />

      <FAQSection title="Why was this app created?">
        <span>
          This app was created entirely by myself for a programming competition.
          The company,{" "}
          <Link
            className="link text-teal-400"
            href="https://www.pol-eko.com.pl/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>POL-EKO</b>
          </Link>
          , organized a contest - to create the best desktop app to gather data
          from their SMART PRO fridge device. They wanted an app that gathers
          the data, beautifully and intuitively presents it, and finally allows
          the user to analyze it. My app has{" "}
          <Link
            className="link"
            href="https://ckz.jastrzebie.pl/?page_id=649"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>won the contest (click to see the final)</b>
          </Link>
          , and one of the rewards was an internship at the company (which I
          took part in in July 2023, I made{" "}
          <Link className="link text-teal-400" href="/projects/enmet">
            <b>Enmet</b>
          </Link>
          )
        </span>
      </FAQSection>

      <FAQSection title="Features">
        <ul>
          <li>🗣️ Bilingualism</li>
          <li>📱 Multi-device support</li>
          <li>
            🌐 &quot;Network discovery&quot; - Coldtime automatically detects
            devices on the network without the need for manually entering the
            device data, such as IP address
          </li>
          <li>
            🔔 Notifications for when a device becomes available/unavailable,
            with the program icon in the tray changing color to red if any of
            the added devices is unavailable
          </li>
          <li>
            📈 Historical data - with the option to select a start and end date,
            and optimization for compressing large amounts of data points with
            the user choosing the maximum number of points to display on the
            graph themself
          </li>
          <li>
            📊 Chart with zoom and scroll capabilities, and a table presenting
            the data neatly and clearly
          </li>
          <li>
            📉 Minor statistics on the data, such as average temperature for a
            given day and time since the device status changed
          </li>
          <li>
            📤 Data export to Microsoft Excel (.xlsx), CSV, and JSON (depending
            on the language of the application)
          </li>
          <li>
            ⚙️ Customizable settings for data retrieval frequency, storage, and
            maximum graph points
          </li>
          <li>
            🔄 Background operation, with the program icon in the taskbar
            requiring a click to reopen and the option to fully exit in the menu
            tray
          </li>
          <li>
            ✏️ Ability to edit or delete devices, with each device having its
            friendly name
          </li>
          <li>🤖 BETA: AI model predicting the future data (temperature)</li>
        </ul>
      </FAQSection>

      <Slider
        images={[
          "/imgs/projects/coldtime/diploma.jpg",
          "https://raw.githubusercontent.com/Arciiix/Coldtime/main/resources/en-device-list.png",
          "https://raw.githubusercontent.com/Arciiix/Coldtime/main/resources/en-add.png",
          "https://raw.githubusercontent.com/Arciiix/Coldtime/main/resources/en-ai.png",
          "https://raw.githubusercontent.com/Arciiix/Coldtime/main/resources/en-settings.png",
        ]}
      />
    </div>
  );
}
