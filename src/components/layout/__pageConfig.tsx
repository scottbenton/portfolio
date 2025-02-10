interface pageConfig {
  [key: string]: {
    label: string;
    path: string;
  };
}

export const PAGES: pageConfig = {
  about: {
    label: "Experience",
    path: "/#experience",
  },
  projects: {
    label: "Projects",
    path: "/#projects",
  },
  blog: {
    label: "Blog",
    path: "/blog",
  },
  contact: {
    label: "Contact",
    path: "/#contact",
  },
};
