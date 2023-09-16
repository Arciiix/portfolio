export interface Project {
  id: string;
  name: string;
  description: JSX.Element;
  logoSrc: string;
  tag: ProjectTag;
  technologies: string[];
  fields: string[];
}

export interface ProjectTag {
  label: string;
  color: string;
}

// TODO: Actual projects
export const PROJECTS: Project[] = [
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
