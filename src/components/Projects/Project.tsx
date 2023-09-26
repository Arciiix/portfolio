import Link from "next/link";

export interface Project {
  id: string;
  name: string;
  description: JSX.Element;
  logoSrc: string;
  tag: ProjectTag;
  technologies: string[];
  fields: string[];

  githubURL?: string | null;
  demoURL?: string | null;

  language?: string;
}

export interface ProjectTag {
  label: string;
  color: string;
}

export interface BasicProjectDisplayProps {
  project: Project;
}

// TODO: Actual projects
export const PROJECTS: Project[] = [
  // TODO: Add Handy here
  {
    id: "flify",
    name: "Flify",
    description: (
      <span>
        <b>Stream PC audio</b> or microphone to mobile easily, in the blink of
        an eye.
      </span>
    ),
    logoSrc: "/imgs/projects/flify/logo.png",
    tag: {
      label: "USEFUL",
      color: "#206ac4",
    },
    technologies: ["TypeScript", "React", "Node.js", "Electron", "Flutter"],
    fields: ["Everyday tool", "Audio", "Integration"],
    githubURL: "https://github.com/Arciiix/Flify",
    language: "English",
  },
  {
    id: "ruchWahadlowy",
    name: "Ruch wahadłowy",
    description: (
      <span>
        Revolutionizing road safety with{" "}
        <b>
          cutting-edge computer vision alternating traffic management system!
        </b>{" "}
        <i>Ruch wahadłowy</i> project ensures that you&apos;ll never have to
        worry about red light runners or long traffic jams again, making the
        roads safer for everyone.
      </span>
    ),
    logoSrc: "/imgs/projects/ruchWahadlowy/logo.png",
    tag: {
      label: "CHANGE",
      color: "#f9c00d",
    },
    technologies: ["OpenCV", "Python", "Node.js", "Flutter", "Arduino"],
    fields: ["Automation", "Innovation", "Engineering", "AI"],
    language: "every single one!",
  },
  {
    id: "monity",
    name: "Monity",
    description: (
      <span>
        Personal finance manager, budget tracker, and analyzer that helps you
        monitor your money.
      </span>
    ),
    logoSrc: "/imgs/projects/monity/logo.png",
    tag: {
      label: "MONEY",
      color: "#1ea896",
    },
    technologies: [
      "TypeScript",
      "React",
      "NestJS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
    ],
    fields: ["Finance", "Data analysis", "Monitoring", "Corporate apps"],
    language: "English",
  },
  {
    id: "coldtime",
    name: "Coldtime",
    description: (
      <span>
        A desktop app for persisting values (i.e. temperature) over time got
        from multiple devices. Created for POL-EKO to manage their SMART PRO
        fridge data.
      </span>
    ),
    logoSrc: "/imgs/projects/coldtime/logo.png",
    tag: {
      label: "CONTEST",
      color: "#6182e0",
    },
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Electron",
      "Prisma",
      "SQLite",
    ],
    fields: ["Data analysis", "Corporate apps", "Monitoring", "AI"],
    githubURL: "https://github.com/Arciiix/Coldtime",
    language: "English + Polish",
  },
  {
    id: "enmet",
    name: "Enmet",
    description: (
      <span>
        An app to monitor the energy usage of{" "}
        <b>Eastron SMART X96 Smart Meter</b> based on data from the database.
        Created during my internship @{" "}
        <Link
          className="link text-teal-400"
          href="https://www.pol-eko.com.pl/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>POL-EKO</b>
        </Link>
      </span>
    ),
    logoSrc: "/imgs/projects/enmet/logo.png",
    tag: {
      label: "WORK",
      color: "#7a9eeb",
    },
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "NestJS",
      "Prisma",
      "SQLite",
      "MySQL",
    ],
    fields: [
      "Data analysis",
      "Corporate apps",
      "API",
      "Database",
      "Cache system",
    ],
    language: "English + Polish",
  },
  {
    id: "lightController",
    name: "lightController",
    description: (
      <span>
        Advanced, automated <b>aquarium control system</b> with heating based on
        temperature, statistical data charts, different light modes, their
        schedule, and more!
      </span>
    ),
    logoSrc: "/imgs/projects/lightController/logo.png",
    tag: {
      label: "AUTOMATE",
      color: "#2869ca",
    },
    technologies: ["TypeScript", "React", "Node.js", "Tasmota"],
    fields: ["IoT", "Monitoring", "Automation", "Everyday tool", "SQLite"],
    language: "English",
  },
  {
    id: "helpnow",
    name: "HelpNow",
    description: (
      <span>
        A project for hackathon that addresses a critical gap in the market by
        providing <b>a platform for requesting assistance</b> - this app enabled
        users to create &quot;help request posts&quot; - I like to refer to that
        as <b>the Glovo of helping each other</b>.
      </span>
    ),
    logoSrc: "/imgs/projects/helpnow/logo.jpg",
    tag: {
      label: "HELP",
      color: "#8dffcb",
    },
    technologies: ["React + TypeScript", "Chakra UI", "Firebase"],
    fields: ["Front-end", "Teamwork", "Project managment"],
    githubURL: "https://github.com/HelpNowOfficialProject/HelpNow",
    demoURL: "https://helpnow.netlify.app/",
    language: "Polish",
  },
  {
    id: "summid",
    name: "Summid",
    description: (
      <span>
        A simple Chrome extension that allows you to quickly{" "}
        <b>generate a written summary of a YouTube video using ChatGPT</b> (AI)
        without the need to watch it.
      </span>
    ),
    logoSrc: "/imgs/projects/summid/logo.png",
    tag: {
      label: "QUICK",
      color: "#e94584",
    },
    technologies: ["TypeScript", "Chrome Extensions"],
    fields: ["Scraping", "Integration", "Tools"],
    language: "English",
  },

  {
    id: "portfolio",
    name: "Portfolio",
    description: (
      <span>I guess this website says more than a thousand words! 😜</span>
    ),
    logoSrc: "/logo/logo-transparent.png",
    githubURL: "https://github.com/Arciiix/portfolio",
    demoURL: "/",
    tag: {
      label: "PRESENT",
      color: "#ffffff",
    },
    technologies: ["Next.js", "React", "Tailwind CSS"],
    fields: ["Front-end", "Design", "Website"],
    language: "English",
  },
];
