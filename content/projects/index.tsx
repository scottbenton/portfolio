import PantryContent from "./Pantry.mdx";
import PantryImage from "./images/pantry.png";
import ASORTDContent from "./Asortd.mdx";
import ASORTDImage from "./images/asortd.png";
import DadditContent from "./Daddit.mdx";
import DadditImage from "./images/daddit.png";
import EberronContent from "./Eberron.mdx";
import EberronImage from "./images/eberron.png";
import PomodoroContent from "./Pomodoro.mdx";
import PomodoroImage from "./images/pomodoro.jpeg";

export interface ProjectConfig {
  name: string;
  subTitle?: string;
  image: StaticImageData;
  altText: string;
  description: React.ReactNode;
  prodLink?: string;
  codeLink?: string;
  technologies?: string[];
}

export const projects: ProjectConfig[] = [
  {
    name: "Pomodoro",
    subTitle: "Productivity Timer",
    image: PomodoroImage,
    altText: "Pomodoro Website Screenshot",
    description: <PomodoroContent />,
    technologies: ["ReactJS", "Material UI", "PWA"],
    prodLink: "https://pomodoro.scottbenton.dev",
    codeLink: "https://github.com/scottbenton/pomodoro",
  },
  {
    name: "DnD Notes",
    subTitle: "Dungeons and Dragons Campaign Notes",
    image: EberronImage,
    altText: "DnD Notes Website Screenshot",
    description: <EberronContent />,
    technologies: ["NextJS", "Tailwind CSS"],
    prodLink: "https://eberron.scottbenton.dev",
    codeLink: "https://github.com/scottbenton/eberron",
  },
  {
    name: "Pantry",
    subTitle: "Organized Grocery Lists",
    image: PantryImage,
    altText: "Pantry Screenshot",
    description: <PantryContent />,
    technologies: ["Angular", "Express", "MongoDB"],
    prodLink: "https://willswire.github.io/pantry/",
    codeLink: "https://github.com/willswire/pantry",
  },
  {
    name: "ASORTD",
    subTitle: "Algorithm Sorting Display",
    image: ASORTDImage,
    altText: "ASORTD Screenshot",
    description: <ASORTDContent />,
    technologies: ["HTML", "CSS", "JQuery"],
    prodLink: "https://asortd.info",
    codeLink: "https://github.com/willswire/asortd",
  },
  {
    name: "Daddit",
    subTitle: "Reddit Clone",
    image: DadditImage,
    altText: "Daddit Screenshot",
    description: <DadditContent />,
    technologies: ["React", "Firebase", "Material UI"],
    prodLink: "https://daddit.scottbenton.dev",
    codeLink: "https://github.com/scottbenton/dadditui",
  },
];
