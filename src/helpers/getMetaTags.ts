import { Metadata } from "next";

export function getMetaTags(config?: {
  title?: string;
  description?: string;
  openGraphImageSrc?: string;
}): Metadata {
  const { title, description, openGraphImageSrc } = config || {};

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
    openGraph: openGraphImageSrc
      ? {
          type: "website",
          locale: "en_US",
          url: "https://scottbenton.dev",
          title: title,
          description: description,
          images: [openGraphImageSrc],
        }
      : undefined,
  };
}
