import PantryContent from "./Pantry.mdx";
import ASORTDContent from "./Asortd.mdx";
import TextTwistContent from "./TextTwist.mdx";
import DadditContent from "./Daddit.mdx";

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
    name: "Pantry",
    imageUrl: "/pantry.png",
    altText: "Pantry Screenshot",
    description: <PantryContent />,
    technologies: ["Angular", "Express", "MongoDB"],
    prodLink: "https://willswire.github.io/pantry/",
    codeLink: "https://github.com/willswire/pantry",
  },
  {
    name: "ASORTD",
    imageUrl: "/asortd.png",
    altText: "ASORTD Screenshot",
    description: <ASORTDContent />,
    technologies: ["HTML", "CSS", "JQuery"],
    prodLink: "https://asortd.info",
    codeLink: "https://github.com/willswire/asortd",
  },
  {
    name: "Text Twist",
    imageUrl: "/text-twist.png",
    altText: "Text Twist Screenshot",
    description: <TextTwistContent />,
    technologies: ["React", "AWS", "PHP"],
    prodLink: "https://scottbenton.github.io/TextTwist-UI/",
    codeLink: "https://github.com/scottbenton/TextTwist-UI",
  },
  {
    name: "Daddit",
    imageUrl: "/daddit.png",
    altText: "Daddit Screenshot",
    description: <DadditContent />,
    technologies: ["React", "Firebase", "Material UI"],
    prodLink: "https://daddit.scottbenton.dev",
    codeLink: "https://github.com/scottbenton/dadditui",
  },
];
