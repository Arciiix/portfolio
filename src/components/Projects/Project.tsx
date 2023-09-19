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
    technologies: ["TypeScript", "React", "Node.js", "Electron"],
    fields: ["Data analysis", "Corporate apps", "Monitoring", "AI"],
    githubURL: "https://github.com/Arciiix/Coldtime",
    language: "English + Polish",
  },
  {
    id: "enmet",
    name: "Enmet",
    description: (
      <span>
        An app to monitor the energy usage of Eastron SMART X96 Smart Meter
        based on data from the database. Created during my internship @{" "}
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
    technologies: ["TypeScript", "React", "Node.js", "NestJS"],
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
];
