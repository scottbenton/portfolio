import { IconTag } from "@/components/IconTag";
import { Layout } from "@/components/layout";
import { LocationIcon } from "@/content/icons/LocationIcon";
import AboutMeParagraph from "@/content/AboutMeParagraph.mdx";
import { Button } from "@/components/Button";
import Link from "next/link";
import { EmailIcon } from "@/content/icons/EmailIcon";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { BlogPosts } from "@/components/BlogPosts";

export default function Home() {
  return (
    <Layout>
      <div className="md:pt-4 w-full">
        <section>
          <div>
            <h1
              className={
                "text-6xl font-light text-gray-700 dark:text-white m-0"
              }
            >
              Scott Benton
            </h1>
            <h2
              className={
                "text-primary-600 dark:text-primary-300 font-semibold text-3xl mt-2 uppercase"
              }
            >
              Software Engineer
            </h2>
            <IconTag
              icon={<LocationIcon />}
              label={"Philadelphia, PA"}
              className={"mt-4"}
            />
          </div>
        </section>
        <section className={"mt-16"}>
          <h2 id={"about"} className={"pt-24 -mt-24"}>
            About Me
          </h2>
          <div className={"mt-4"}>
            <span className={"text-gray-600 dark:text-gray-300 max-w-prose"}>
              <AboutMeParagraph />
            </span>
            <Button
              className={"mt-3"}
              component={"a"}
              href={"/ScottBentonResume.pdf"}
              target={"__blank"}
            >
              View my Resumé
            </Button>
          </div>
        </section>
        <section className={"mt-24"}>
          <h2 id={"experience"} className={"pt-24 -mt-24"}>
            Experience
          </h2>
          <div
            className={
              "grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-4 sm:gap-y-6 sm:mt-8"
            }
          >
            <Experience />
          </div>
        </section>
        <section className={"mt-24"}>
          <h2 id={"projects"} className={"pt-24 -mt-24"}>
            Featured Personal Projects
          </h2>
          <div>
            <Projects />
          </div>
        </section>
        <section className={"mt-24"}>
          <div
            className={
              "flex flex-col sm:flex-row space-x-4 items-baseline justify-between mb-4"
            }
          >
            <h2 id={"blog"} className={"pt-24 -mt-24"}>
              Most Recent Blog Post
            </h2>
            <Link
              href={"/blog"}
              className={
                "font-bold flex items-center text-lg text-primary-600 dark:text-primary-300 underline"
              }
            >
              View All
            </Link>
          </div>
          <div>
            <BlogPosts />
          </div>
        </section>
        <section className={"mt-24"}>
          <h2 id={"contact"} className={"pt-24 -mt-24"}>
            Contact Me
          </h2>
          <p className={"mt-4"}>
            Please feel free to reach out to me with opportunities, questions,
            or anything else!
          </p>
          <div className={"flex items-center mt-2"}>
            <IconTag icon={<EmailIcon />} label={"scott@scottbenton.dev"} />
          </div>
        </section>
      </div>
    </Layout>
  );
}
