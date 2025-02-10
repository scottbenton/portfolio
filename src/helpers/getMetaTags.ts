import { Metadata } from "next";

export function getMetaTags(config?: {
  title?: string;
  description?: string;
}): Metadata {
  const { title, description } = config || {};

  return {
    title: title ? `${title} | Scott Benton` : "Scott Benton",
    description:
      description || "Software Engineer from Philadelphia, Pennsylvania",
    keywords: [
      "Software Developer",
      "Software Engineer",
      "Web Developer",
      "Website",
      "Philadelphia",
    ],
    authors: [
      {
        name: "Scott Benton",
      },
    ],
  };
}
