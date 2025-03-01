"use client";

import { PROJECTS } from "@/components/Projects/Project";
import ProjectDescription from "@/components/Projects/ProjectDescription/ProjectDescription";
import Slider from "@/components/Slider/Slider";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const DarkModeToggle = dynamic(() => import("react-dark-mode-toggle"), {
  ssr: false,
});

const project = PROJECTS.find((e) => e.id === "lightController")!;

export default function LightController() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="flex flex-col gap-2">
      <ProjectDescription project={project} />

      <div className="flex m-4 flex-col gap-2 items-center justify-center w-full">
        <span className="text-opacity-80 text-white">
          🌠 Feel like you&apos;re using lightController
        </span>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={160}
        />
      </div>

      <div
        className={`flex flex-col gap-4 transition-all duration-1000 [&_*]:transition-all [&_*]:duration-1000 rounded-2xl p-5 ${
          isDarkMode
            ? "text-white bg-gray-900 bg-opacity-70"
            : "text-black bg-teal-200 bg-opacity-90"
        }`}
      >
        <span
          className={`font-bold text-5xl ${
            isDarkMode ? "text-teal-400" : "text-teal-900"
          }`}
        >
          Why?
        </span>
        <span>
          I built this app because I love automating things. I love to use
          programming in ways that just make my life easier. That&apos;s why I
          purely love IoT. This is the strongest thing that motivates me to keep
          going and learning.{" "}
          <span
            className={`${
              isDarkMode ? "text-teal-400" : "text-teal-900"
            } font-bold`}
          >
            Programming is not only about boring things like CRUDs or websites
            from templates, it&apos;s about adventures.
          </span>
        </span>
        <span>
          This project, built using{" "}
          <Link
            href="https://botland.store/withdrawn-products/16201-sonoff-dual-r2-2x-relay-230v-wifi-android-ios-switch-6920075700978.html"
            className={`link ${
              isDarkMode ? "text-teal-400" : "text-teal-900"
            } font-bold`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sonoff Dual R2 230V relay
          </Link>{" "}
          (with 2 x 230V output - for heater and the light) with a custom
          firmware{" "}
          <Link
            href="https://tasmota.github.io/docs/"
            className={`link ${
              isDarkMode ? "text-teal-400" : "text-teal-900"
            } font-bold`}
            target="_blank"
            rel="noopener noreferrer"
          >
            (Tasmota)
          </Link>
          , made me &quot;forget about forgetting&quot; to turn on/off the light
          when I wake up/go to sleep. And that wasn&apos;t the only problem
          before this <i>invention</i> - I was struggling with controling the
          heater to keep the temperature at a constant level - when should it be
          turned on? When to turn it off?{" "}
        </span>
        <b>Now it&apos;s all ✨ magic ✨ and works by itself.</b>
      </div>
      <div
        className={`flex flex-col gap-4 transition-all duration-1000 [&_*]:transition-all [&_*]:duration-1000 rounded-2xl p-5 ${
          isDarkMode
            ? "text-white bg-gray-900 bg-opacity-70"
            : "text-black bg-teal-200 bg-opacity-90"
        }`}
      >
        <span
          className={`font-bold text-5xl ${
            isDarkMode ? "text-teal-400" : "text-teal-900"
          }`}
        >
          What does it do?
        </span>
        <p>
          Experience the future of aquarium management with{" "}
          <span
            className={`font-bold ${
              isDarkMode ? "text-teal-400" : "text-teal-900"
            }`}
          >
            lightController
          </span>{" "}
          - advanced automated control system.
        </p>

        <h1>
          🌡️ <strong>Precision Heating</strong>
        </h1>
        <p>
          Keep your aquatic friends comfortable with automated{" "}
          <em>temperature control</em>. The system uses hysteresis to maintain
          the perfect temperature without manual intervention.
        </p>

        <h1>
          📊 <strong>Statistical Data Charts</strong>
        </h1>
        <p>
          Stay informed with <em>statistical data charts</em> that track
          temperature and heating activity over time.
        </p>

        <h1>
          💡 <strong>Dynamic Lighting Modes</strong>
        </h1>
        <p>
          Customize your aquarium&apos;s ambiance with various light modes -
          from <em>no light</em> to <em>sunny</em>, <em>cloudy</em>, and{" "}
          <em>nightly</em>. All easily accessible from the dashboard.
        </p>

        <h1>
          📅 <strong>Programmable Scheduling</strong>
        </h1>
        <p>
          Take control of your aquarium&apos;s lighting with{" "}
          <em>programmable schedules</em> that adjust based on the time of day.
          Manage it all on a dedicated page.
        </p>

        <h1>
          📈 <strong>Temperature Analysis</strong>
        </h1>
        <p>
          Get insights into your aquarium&apos;s climate with{" "}
          <em>historical temperature charts</em> that display temperature
          fluctuations and heating activity.
        </p>

        <h1>
          ⚙️ <strong>Customization & Calibration</strong>
        </h1>
        <p>
          Fine-tune your system with the ability to{" "}
          <em>edit light color schedules</em> and{" "}
          <em>manually adjust lighting</em> for the perfect aquatic environment.
        </p>

        <h1>
          ⚙️ <strong>Automated Operation</strong>
        </h1>
        <p>
          Enjoy effortless aquarium management with a system that requires{" "}
          <em>no user interaction</em>. It operates seamlessly and
          independently.
        </p>
        <span>
          <span
            className={`font-bold ${
              isDarkMode ? "text-teal-400" : "text-teal-900"
            }`}
          >
            Fun fact:
          </span>{" "}
          I haven&quot;t even visited the project page (not mentioning doing any
          changes in code) since around 6 months, it goes fully by itself.
        </span>

        <h1>
          🛠️ <strong>User-Friendly Settings</strong>
        </h1>
        <p>
          Customize your aquarium&apos;s parameters, including{" "}
          <em>temperature range</em> and <em>reading intervals</em>, all in the
          user-friendly settings menu.
        </p>

        <p>
          Discover the world of automated aquarium control and experience the
          future of aquatic care. Dive in today!
        </p>
      </div>

      <Slider
        images={[
          "/imgs/projects/lightController/homepage_1.png",
          "/imgs/projects/lightController/homepage_2.png",
          "/imgs/projects/lightController/light.png",
          "/imgs/projects/lightController/light_rule_edit.png",
          "/imgs/projects/lightController/temperature_chart_1.png",
          "/imgs/projects/lightController/temperature_chart_2.png",
          "/imgs/projects/lightController/options.png",
        ]}
      />
    </div>
  );
}
