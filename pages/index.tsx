import MapPin from "@heroicons/react/solid/LocationMarkerIcon";
import { Layout } from "components/layout/Layout";
import { Waves } from "components/layout/Waves";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <>
      <Waves />
      <Layout>
        <div className="relative flex-1 flex justify-center pt-10 w-full max-w-screen-xl mx-auto p-4">
          <div className={"flex flex-col items-center"}>
            <h1 className={"text-5xl text-gray-800"}>Scott Benton</h1>
            <h2 className={"text-3xl text-primary-500 mt-4"}>
              Software Developer
            </h2>
            <div>
              <span
                className={
                  "py-1 px-3 mt-4 bg-primary-200 inline-flex rounded-full text-primary-700 text-xl items-center"
                }
              >
                <MapPin className={"w-5 h-5 text-primary-500 mr-2"} />
                Ithaca, NY
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            "relative flex-1 py-2 flex flex-col items-center justify-center w-full"
          }
        >
          <div className={"max-w-xs w-full"}>
            <Link href={"/projects"}>
              <a
                className={
                  "btn btn-animate btn-filled-white btn-filled mt-8 w-full text-xl py-4"
                }
              >
                View My Work
              </a>
            </Link>
            <Link href={"/contact"}>
              <a
                className={
                  "btn btn-animate btn-outlined btn-outlined-white mt-4 w-full text-xl py-4"
                }
              >
                Get in Touch
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
