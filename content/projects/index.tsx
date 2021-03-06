import PantryContent from "./Pantry.mdx";
import ASORTDContent from "./Asortd.mdx";
import DadditContent from "./Daddit.mdx";
import EberronContent from "./Eberron.mdx";
import PomodoroContent from "./Pomodoro.mdx";

export interface ProjectConfig {
  name: string;
  imageUrl: string;
  altText: string;
  description: React.ReactNode;
  prodLink?: string;
  codeLink?: string;
  technologies?: string[];
}

export const projects: ProjectConfig[] = [
  {
    name: "Pomodoro Timer",
    imageUrl: "/images/pomodoro.jpeg",
    altText: "Pomodoro Website Screenshot",
    description: <PomodoroContent />,
    technologies: ["ReactJS", "Material UI", "PWA"],
    prodLink: "https://pomodoro.scottbenton.dev",
    codeLink: "https://github.com/scottbenton/pomodoro",
  },
  {
    name: "Dungeons & Dragons Notes",
    imageUrl: "/images/eberron.png",
    altText: "DnD Notes Website Screenshot",
    description: <EberronContent />,
    technologies: ["NextJS", "Tailwind CSS"],
    prodLink: "https://eberron.scottbenton.dev",
    codeLink: "https://github.com/scottbenton/eberron",
  },
  {
    name: "Pantry",
    imageUrl: "/images/pantry.png",
    altText: "Pantry Screenshot",
    description: <PantryContent />,
    technologies: ["Angular", "Express", "MongoDB"],
    prodLink: "https://willswire.github.io/pantry/",
    codeLink: "https://github.com/willswire/pantry",
  },
  {
    name: "ASORTD",
    imageUrl: "/images/asortd.png",
    altText: "ASORTD Screenshot",
    description: <ASORTDContent />,
    technologies: ["HTML", "CSS", "JQuery"],
    prodLink: "https://asortd.info",
    codeLink: "https://github.com/willswire/asortd",
  },
  // {
  //     name: "Text Twist",
  //     imageUrl: "/images/text-twist.png",
  //     altText: "Text Twist Screenshot",
  //     description: <TextTwistContent />,
  //     technologies: ["React", "AWS", "PHP"],
  //     prodLink: "https://scottbenton.github.io/TextTwist-UI/",
  //     codeLink: "https://github.com/scottbenton/TextTwist-UI",
  // },
  {
    name: "Daddit",
    imageUrl: "/images/daddit.png",
    altText: "Daddit Screenshot",
    description: <DadditContent />,
    technologies: ["React", "Firebase", "Material UI"],
    prodLink: "https://daddit.scottbenton.dev",
    codeLink: "https://github.com/scottbenton/dadditui",
  },
];
