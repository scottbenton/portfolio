import AboutIcon from "@heroicons/react/24/solid/UserCircleIcon";
import ProjectsIcon from "@heroicons/react/24/solid/CommandLineIcon";
import BlogIcon from "@heroicons/react/24/solid/NewspaperIcon";
import ContactIcon from "@heroicons/react/24/solid/EnvelopeIcon";

interface pageConfig {
  [key: string]: {
    label: string;
    icon?: React.ComponentType<any>;
    path: string;
  };
}

export const PAGES: pageConfig = {
  about: {
    label: "Experience",
    icon: AboutIcon,
    path: "/#experience",
  },
  projects: {
    label: "Projects",
    icon: ProjectsIcon,
    path: "/#projects",
  },
  blog: {
    label: "Blog",
    icon: BlogIcon,
    path: "/blog",
  },
  contact: {
    label: "Contact",
    icon: ContactIcon,
    path: "/#contact",
  },
};
