import Head from "next/head";
import Link from "next/link";
import MapPin from "@heroicons/react/solid/LocationMarkerIcon";
import { SvgWave } from "components/SvgWave";
const Home: React.FC = () => {
  return (
    <>
      <div
        className={
          "w-full px-2 md:px-8 flex flex-col justify-center items-center md:items-start mt-8 md:mt-24 text-center md:text-left"
        }
      >
        <h1
          className={
            "text-4xl md:text-5xl font-display leading-tight tracking-tight text-gray-800 font-bold"
          }
        >
          Scott Benton
        </h1>
        <h2
          className={
            "mt-2 text-2xl md:text-3xl font-display leading-tight tracking-tight text-primary-500 font-bold"
          }
        >
          Software Developer
        </h2>
        <div
          className={
            "flex items-center mt-4 px-4 py-1 bg-primary-300 rounded-full"
          }
        >
          <MapPin className={"w-5 h-5 text-primary-500 stroke-current"} />
          <span
            className={
              "text-lg ml-1 text-primary-800 tracking-wide font-display font-semibold"
            }
          >
            Ithaca NY
          </span>
        </div>
      </div>
      <div className={"relative h-24 md:h-48 mt-8 md:mt-12 w-screen"}>
        <SvgWave className={"text-primary-600"} />
        <img
          src={"/images/transparentProfile.png"}
          alt={"Picture of Scott Benton"}
          className={
            "hidden md:inline h-96 absolute right-0 bottom-0 md:mb-12 mr-1/4"
          }
        />
        <SvgWave className={"text-primary-700 mt-6 md:mt-12"} />
        <SvgWave className={"text-primary-800 mt-12 md:mt-24 relative"} />
      </div>
      <div
        className={
          "bg-primary-800 flex-grow flex items-center justify-center w-screen"
        }
      >
        <div className={"mx-auto w-full max-w-xs px-4 pt-8"}>
          <Link href="/projects">
            <a
              className={
                "btn btn-filled btn-filled-white btn-animate text-xl md:text-2xl py-2 md:py-3 w-full"
              }
            >
              View my Work
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                "btn btn-outlined btn-outlined-white btn-animate text-xl md:text-2xl py-2 md:py-3 w-full mt-4"
              }
            >
              Contact Me
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
