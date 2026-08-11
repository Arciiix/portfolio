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

interface FeatureCardProps {
  emoji: string;
  title: string;
  children: React.ReactNode;
  dark: boolean;
}

function FeatureCard({ emoji, title, children, dark }: FeatureCardProps) {
  return (
    <div
      className={`rounded-2xl border p-5 transition-all duration-700 ${
        dark
          ? "border-white/10 bg-white/[0.03] hover:border-teal-400/40"
          : "border-black/10 bg-white/40 hover:border-teal-800/40"
      }`}
    >
      <h2
        className={`mb-2 text-xl font-bold ${
          dark ? "text-teal-400" : "text-teal-900"
        }`}
      >
        {emoji} <strong>{title}</strong>
      </h2>
      <div className={dark ? "text-white/80" : "text-teal-950/80"}>
        {children}
      </div>
    </div>
  );
}

export default function LightController() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const headingClass = `font-bold text-4xl md:text-5xl ${
    isDarkMode ? "text-teal-400" : "text-teal-900"
  }`;
  const accentClass = isDarkMode ? "text-teal-400" : "text-teal-900";

  return (
    <div className="flex flex-col gap-8">
      <ProjectDescription project={project} />

      {/* Theme toggle */}
      <div className="glass-panel flex w-full flex-col items-center gap-4 rounded-[1.75rem] p-6">
        <span className="text-white/80">
          🌠 Feel like you&apos;re using lightController
        </span>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={120}
        />
      </div>

      {/* Why */}
      <div className="glass-panel w-full rounded-[1.75rem] p-6 md:p-8">
        <h2 className={headingClass}>Why?</h2>
        <div className="mt-3 space-y-4 leading-relaxed text-white/80">
          <p>
            I built this app because I love automating things. I love to use
            programming in ways that just make my life easier. That&apos;s why I
            purely love IoT. This is the strongest thing that motivates me to
            keep going and learning.{" "}
            <b className={accentClass}>
              Programming is not only about boring things like CRUDs or websites
              from templates, it&apos;s about adventures.
            </b>
          </p>
          <p>
            This project, built using{" "}
            <Link
              href="https://botland.store/withdrawn-products/16201-sonoff-dual-r2-2x-relay-230v-wifi-android-ios-switch-6920075700978.html"
              className={`link ${accentClass} font-bold`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sonoff Dual R2 230V relay
            </Link>{" "}
            (with 2 x 230V output - for heater and the light) with a custom
            firmware{" "}
            <Link
              href="https://tasmota.github.io/docs/"
              className={`link ${accentClass} font-bold`}
              target="_blank"
              rel="noopener noreferrer"
            >
              (Tasmota)
            </Link>
            , made me &quot;forget about forgetting&quot; to turn on/off the
            light when I wake up/go to sleep. And that wasn&apos;t the only
            problem before this <i>invention</i> - I was struggling with
            controling the heater to keep the temperature at a constant level -
            when should it be turned on? When to turn it off?{" "}
          </p>
          <p className={`font-bold ${accentClass}`}>
            Now it&apos;s all ✨ magic ✨ and works by itself.
          </p>
        </div>
      </div>

      {/* What does it do */}
      <div className="glass-panel w-full rounded-[1.75rem] p-6 md:p-8">
        <h2 className={headingClass}>What does it do?</h2>
        <p className="mt-3 text-white/80">
          Experience the future of aquarium management with{" "}
          <span className={`font-bold ${accentClass}`}>lightController</span> -
          advanced automated control system.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <FeatureCard emoji="🌡️" title="Precision Heating" dark={isDarkMode}>
            Keep your aquatic friends comfortable with automated{" "}
            <em>temperature control</em>. The system uses hysteresis to maintain
            the perfect temperature without manual intervention.
          </FeatureCard>

          <FeatureCard
            emoji="📊"
            title="Statistical Data Charts"
            dark={isDarkMode}
          >
            Stay informed with <em>statistical data charts</em> that track
            temperature and heating activity over time.
          </FeatureCard>

          <FeatureCard
            emoji="💡"
            title="Dynamic Lighting Modes"
            dark={isDarkMode}
          >
            Customize your aquarium&apos;s ambiance with various light modes -
            from <em>no light</em> to <em>sunny</em>, <em>cloudy</em>, and{" "}
            <em>nightly</em>. All easily accessible from the dashboard.
          </FeatureCard>

          <FeatureCard
            emoji="📅"
            title="Programmable Scheduling"
            dark={isDarkMode}
          >
            Take control of your aquarium&apos;s lighting with{" "}
            <em>programmable schedules</em> that adjust based on the time of
            day. Manage it all on a dedicated page.
          </FeatureCard>

          <FeatureCard
            emoji="📈"
            title="Temperature Analysis"
            dark={isDarkMode}
          >
            Get insights into your aquarium&apos;s climate with{" "}
            <em>historical temperature charts</em> that display temperature
            fluctuations and heating activity.
          </FeatureCard>

          <FeatureCard
            emoji="⚙️"
            title="Customization & Calibration"
            dark={isDarkMode}
          >
            Fine-tune your system with the ability to{" "}
            <em>edit light color schedules</em> and{" "}
            <em>manually adjust lighting</em> for the perfect aquatic
            environment.
          </FeatureCard>

          <FeatureCard emoji="⚙️" title="Automated Operation" dark={isDarkMode}>
            Enjoy effortless aquarium management with a system that requires{" "}
            <em>no user interaction</em>. It operates seamlessly and
            independently.
          </FeatureCard>

          <FeatureCard
            emoji="🛠️"
            title="User-Friendly Settings"
            dark={isDarkMode}
          >
            Customize your aquarium&apos;s parameters, including{" "}
            <em>temperature range</em> and <em>reading intervals</em>, all in
            the user-friendly settings menu.
          </FeatureCard>
        </div>

        <p className={`mt-5 font-bold ${accentClass}`}>
          Fun fact: I haven&quot;t even visited the project page (not mentioning
          doing any changes in code) since around 6 months, it goes fully by
          itself.
        </p>

        <p className="mt-4 border-t border-white/10 pt-4 text-white/80">
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
