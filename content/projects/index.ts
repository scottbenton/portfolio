import { StaticImageData } from "next/image";
import IronFellowshipImage from "./IronFellowship.png";
import CrewLinkImage from "./CrewLink.png";
import MiseImage from "./Mise.png";
import PantryImage from "./Pantry.png";

interface IProject {
  image: StaticImageData;
  name: string;
  description: string;
  link: string;
}

export const projects: IProject[] = [
  {
    name: "Iron Fellowship",
    description:
      "An app for playing the tabletop role-playing game Ironsworn with friends",
    link: "https://iron-fellowship.scottbenton.dev",
    image: IronFellowshipImage,
  },
  {
    name: "Crew Link",
    description:
      "Similar to Iron Fellowship, but for playing the game Starforged",
    link: "https://starforged-crew-link.scottbenton.dev",
    image: CrewLinkImage,
  },
  {
    name: "Mise",
    description:
      "A task management app that follows the chef's mise en place philosophy",
    link: "https://mise.scottbenton.dev",
    image: MiseImage,
  },
  {
    name: "Pantry",
    description:
      "A simple app for keeping track of your apartment's grocery list",
    link: "https://willswire.github.io/pantry/",
    image: PantryImage,
  },
];
