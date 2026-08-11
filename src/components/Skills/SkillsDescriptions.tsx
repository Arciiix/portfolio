import { CODE_COLORS } from "../CodeSnippet/CodeSnippet";

export interface Skill {
  name: string;
  image: string;
  codeSnippetContent: JSX.Element;
  color: string;
  category: "Frontend" | "Backend" | "Mobile & IoT" | "Tools";
}

interface SkillsDescription {
  children: JSX.Element | JSX.Element[];
}
export function SkillsDescription({ children }: SkillsDescription) {
  return (
    <span className="text-xl font-mono text-left flex flex-col">
      {children}
    </span>
  );
}

export const SKILLS: Skill[] = [
  {
    name: "TypeScript",
    image: "/imgs/technologies/typescript.svg",
    color: "#3178C6",
    category: "Frontend",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>console</span>
          <span style={{ color: CODE_COLORS.cyan }}>.</span>
          <span style={{ color: CODE_COLORS.blue }}>log</span>
          <span style={{ color: CODE_COLORS.yellow }}>(</span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            My favorite language that I know the most and do the most stuff
            with!
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.yellow }}>)</span>
          <span style={{ color: CODE_COLORS.cyan }}>;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "JavaScript",
    image: "/imgs/technologies/javascript.svg",
    color: "#F7DF1E",
    category: "Frontend",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>console</span>
          <span style={{ color: CODE_COLORS.cyan }}>.</span>
          <span style={{ color: CODE_COLORS.blue }}>log</span>
          <span style={{ color: CODE_COLORS.yellow }}>(</span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            That&apos;s what my favorite language (TypeScript) is a superset of!
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.yellow }}>)</span>
          <span style={{ color: CODE_COLORS.cyan }}>;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "React",
    image: "/imgs/technologies/react.svg",
    color: "#61DAFB",
    category: "Frontend",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.purple }}>function </span>
          <span style={{ color: CODE_COLORS.blue }}>MyComponent</span>
          <span style={{ color: CODE_COLORS.blue }}>() &#123;</span>
        </div>
        <div>
          <span style={{ color: CODE_COLORS.cyan }}> return </span>
          <span style={{ color: CODE_COLORS.cyan }}>&lt;</span>
          <span style={{ color: CODE_COLORS.red }}>p</span>
          <span style={{ color: CODE_COLORS.cyan }}>&gt;</span>
          <span style={{ color: CODE_COLORS.white }}>
            Used for creating modern interactive web applications
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&lt;/</span>
          <span style={{ color: CODE_COLORS.red }}>p</span>
          <span style={{ color: CODE_COLORS.cyan }}>&gt;;</span>
        </div>
        <div>
          <span style={{ color: CODE_COLORS.blue }}>&#125;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "CSS3",
    image: "/imgs/technologies/css.svg",
    color: "#1572B6",
    category: "Frontend",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.cyan }}>::</span>
          <span style={{ color: CODE_COLORS.purple }}>before </span>
          <span style={{ color: CODE_COLORS.yellow }}>&#123;</span>
        </div>
        <div>
          <span style={{ color: CODE_COLORS.white }}>content</span>
          <span style={{ color: CODE_COLORS.cyan }}>: </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            I also use Tailwind CSS as a part of daily work
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;;</span>
        </div>
        <div>
          <span style={{ color: CODE_COLORS.yellow }}>&#125;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "HTML5",
    image: "/imgs/technologies/html.svg",
    color: "#E34F26",
    category: "Frontend",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.cyan }}>&lt;</span>
          <span style={{ color: CODE_COLORS.red }}>p</span>
          <span style={{ color: CODE_COLORS.cyan }}>&gt;</span>
          <span style={{ color: CODE_COLORS.white }}>
            It&apos;s not even a programming language, but it has to be here!
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&lt;/</span>
          <span style={{ color: CODE_COLORS.red }}>p</span>
          <span style={{ color: CODE_COLORS.cyan }}>&gt;;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "Node.js",
    image: "/imgs/technologies/nodejs.svg",
    color: "#339933",
    category: "Backend",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>console</span>
          <span style={{ color: CODE_COLORS.cyan }}>.</span>
          <span style={{ color: CODE_COLORS.blue }}>log</span>
          <span style={{ color: CODE_COLORS.yellow }}>(</span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            I love to build various gates/mediators for my IoT projects there!
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.yellow }}>)</span>
          <span style={{ color: CODE_COLORS.cyan }}>;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "ASP.NET (C#)",
    image: "/imgs/technologies/csharp.svg",
    color: "#A179DC",
    category: "Backend",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>Console</span>
          <span style={{ color: CODE_COLORS.cyan }}>.</span>
          <span style={{ color: CODE_COLORS.blue }}>WriteLine</span>
          <span style={{ color: CODE_COLORS.yellow }}>(</span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            My ultimate back-end solution that I&apos;m currently learning
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.yellow }}>)</span>
          <span style={{ color: CODE_COLORS.cyan }}>;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "Python",
    image: "/imgs/technologies/python.svg",
    color: "#3776AB",
    category: "Backend",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.blue }}>print</span>
          <span style={{ color: CODE_COLORS.yellow }}>(</span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            For empowering IoT devices and trying machine learning to simplify
            my daily life
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.yellow }}>)</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "Arduino",
    image: "/imgs/technologies/arduino.svg",
    color: "#00979D",
    category: "Mobile & IoT",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>lcd.</span>
          <span style={{ color: CODE_COLORS.blue }}>print</span>
          <span style={{ color: CODE_COLORS.yellow }}>(</span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            That&apos;s where I wrote my first line of code ever. Nowadays I use
            PlatformIO - that&apos;s how I&apos;m programming embedded IoT
            devices
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.yellow }}>)</span>
          <span style={{ color: CODE_COLORS.cyan }}>;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "Flutter",
    image: "/imgs/technologies/flutter.svg",
    color: "#54C5F8",
    category: "Mobile & IoT",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.yellow }}>Text(</span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            The most pleasant mobile framework I ever discovered
          </span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
          <span style={{ color: CODE_COLORS.yellow }}>)</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "Linux",
    image: "/imgs/technologies/linux.svg",
    color: "#FCC624",
    category: "Tools",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>echo </span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            Used for deploying the projects on Raspberry Pi or Thin clients at
            home. I use Arch btw (just kidding)
          </span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "Git",
    image: "/imgs/technologies/git.svg",
    color: "#F05032",
    category: "Tools",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>git commit </span>
          <span style={{ color: CODE_COLORS.cyan }}>-</span>
          <span style={{ color: CODE_COLORS.white }}>m </span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            Always using GitHub for my projects
          </span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
        </div>
      </SkillsDescription>
    ),
  },
];
