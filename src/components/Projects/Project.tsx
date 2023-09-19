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
    githubURL: "https://github.com/Arciiix/Summid",
    language: "English",
  },
  {
    id: "test",
    name: "Project title",
    description: (
      <span>
        Project description long Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptas et, rerum laborum ab placeat, illo doloremque
        exercitationem similique modi
      </span>
    ),
    logoSrc: "/imgs/code.svg",
    tag: {
      label: "SHORTWORD",
      color: "#60a5fa",
    },
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    fields: ["Field 1", "Field 2", "Field 3", "Field 4"],
  },
];
