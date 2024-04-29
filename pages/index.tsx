import MapPin from "@heroicons/react/20/solid/MapIcon";
import { Button } from "components/controls/Button";
import { Layout } from "components/layout/Layout";
import Link from "next/link";
import AboutMeParagraph from "content/AboutMeParagraph.mdx";
import { Experience } from "components/Experience";
import { Projects } from "components/Projects";
import { BlogPosts } from "components/BlogPosts";
import LinkedInLogo from "content/LinkedInLogo.png";
import EnvelopeIcon from "@heroicons/react/24/solid/EnvelopeIcon";
import { IconTag } from "components/IconTag";

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="pt-4 w-full">
          <section className={"grid grid-cols-1 md:grid-cols-2 gap-8 mt-4"}>
            <div>
              <h1 className={"text-6xl font-bold  text-white m-0"}>
                Scott Benton
              </h1>
              <h2
                className={"text-white font-semibold text-2xl mt-2 uppercase"}
              >
                <span className={"text-primary-300"}>Creative</span> Software
                Engineer
              </h2>
              <IconTag
                Icon={MapPin}
                label={"Philadelphia, PA"}
                className={"mt-4"}
              />
            </div>
            <div className={"indent-8"}>
              <span className={"text-gray-300 max-w-prose"}>
                <AboutMeParagraph />
              </span>
              <Button
                className={"mt-3"}
                component={"a"}
                href={"/scottbenton.pdf"}
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
            <div className="grid two-col-grid gap-x-4 gap-y-6 mt-8">
              <Experience />
            </div>
          </section>
          <section className={"mt-24"}>
            <h2 id={"projects"} className={"pt-24 -mt-24"}>
              Projects
            </h2>
            <div>
              <Projects />
            </div>
          </section>
          <section className={"mt-24"}>
            <div className={"flex items-baseline justify-between"}>
              <h2 id={"blog"} className={"pt-24 -mt-24"}>
                Most Recent Blog Post
              </h2>
              <Link
                href={"/blog"}
                className={
                  "ml-4 font-bold flex items-center text-lg text-primary-300 underline"
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
              <IconTag Icon={EnvelopeIcon} label={"scott@scottbenton.dev"} />
              <Link
                href={"https://www.linkedin.com/in/scott-m-benton"}
                className={"cursor-pointer ml-8"}
              >
                <img
                  src={LinkedInLogo.src}
                  alt="LinkedIn Logo"
                  className="w-8 h-8"
                />
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};
export default Home;
