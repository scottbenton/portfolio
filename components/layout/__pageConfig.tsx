import AboutIcon from "mdi-react/AccountCircleIcon";
import ProjectsIcon from "mdi-react/CodeTagsIcon";
import BlogIcon from "mdi-react/PostIcon";
import ContactIcon from "mdi-react/MessageIcon";

interface pageConfig {
  [key: string]: {
    label: string;
    icon: React.ComponentType<any>;
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
