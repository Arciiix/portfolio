import { CODE_COLORS } from "../CodeSnippet/CodeSnippet";

interface Skill {
  name: string;
  image: string;
  codeSnippetContent: JSX.Element;
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
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>console</span>
          <span style={{ color: CODE_COLORS.cyan }}>.</span>
          <span style={{ color: CODE_COLORS.blue }}>log</span>
          <span style={{ color: CODE_COLORS.yellow }}>(</span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            Hello! This is an introduction Lorem ipsum
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
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>console</span>
          <span style={{ color: CODE_COLORS.cyan }}>.</span>
          <span style={{ color: CODE_COLORS.blue }}>log</span>
          <span style={{ color: CODE_COLORS.yellow }}>(</span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            Hello! This is an introduction Lorem ipsum
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
            Hello world from React!
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
            This is CSS, hi! This is CSS, hi! This is CSS, hi! This is CSS, hi!
            This is CSS, hi! This is CSS, hi!
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
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.cyan }}>&lt;</span>
          <span style={{ color: CODE_COLORS.red }}>p</span>
          <span style={{ color: CODE_COLORS.cyan }}>&gt;</span>
          <span style={{ color: CODE_COLORS.white }}>
            Hello world from HTML!
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
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>console</span>
          <span style={{ color: CODE_COLORS.cyan }}>.</span>
          <span style={{ color: CODE_COLORS.blue }}>log</span>
          <span style={{ color: CODE_COLORS.yellow }}>(</span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            Hello! This is an introduction Lorem ipsum
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
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.blue }}>print</span>
          <span style={{ color: CODE_COLORS.yellow }}>(</span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            Hello! This is Python!
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.yellow }}>)</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "Flutter",
    image: "/imgs/technologies/flutter.svg",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.yellow }}>Text(</span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            Hello! This is Flutter!
          </span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
          <span style={{ color: CODE_COLORS.yellow }}>)</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "VS Code",
    image: "/imgs/technologies/vscode.svg",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.purple }}>&#123;</span>
        </div>
        <div>
          <span style={{ color: CODE_COLORS.white }}>message</span>
          <span style={{ color: CODE_COLORS.cyan }}>: </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>
            This is VS Code (kind of)
          </span>
          <span style={{ color: CODE_COLORS.cyan }}>&quot;</span>
        </div>
        <div>
          <span style={{ color: CODE_COLORS.purple }}>&#125;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "Linux",
    image: "/imgs/technologies/linux.svg",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>echo </span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>I use Arch btw</span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
        </div>
      </SkillsDescription>
    ),
  },
  {
    name: "Git",
    image: "/imgs/technologies/git.svg",
    codeSnippetContent: (
      <SkillsDescription>
        <div>
          <span style={{ color: CODE_COLORS.white }}>git commit </span>
          <span style={{ color: CODE_COLORS.cyan }}>-</span>
          <span style={{ color: CODE_COLORS.white }}>m </span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
          <span style={{ color: CODE_COLORS.green }}>Awesome changes</span>
          <span style={{ color: CODE_COLORS.green }}>&quot;</span>
        </div>
      </SkillsDescription>
    ),
  },
];
