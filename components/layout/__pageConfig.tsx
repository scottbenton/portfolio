import AboutIcon from "@heroicons/react/solid/UserCircleIcon";
import ProjectsIcon from "@heroicons/react/solid/CodeIcon";
import BlogIcon from "@heroicons/react/solid/NewspaperIcon";
import ContactIcon from "@heroicons/react/solid/MailIcon";

interface pageConfig {
  [key: string]: {
    label: string;
    icon?: React.ComponentType<any>;
    path: string;
  };
}

export const PAGES: pageConfig = {
  about: {
    label: "About",
    icon: AboutIcon,
    path: "/about",
  },
  projects: {
    label: "Projects",
    icon: ProjectsIcon,
    path: "/projects",
  },
  blog: {
    label: "Blog",
    icon: BlogIcon,
    path: "/blog",
  },
  contact: {
    label: "Contact",
    icon: ContactIcon,
    path: "/contact",
  },
};
