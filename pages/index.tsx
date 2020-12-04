import Head from "next/head";
import Link from "next/link";
import MapMarker from "mdi-react/MapMarkerIcon";
import { SvgWave } from "@/components/SvgWave";
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
            "text-3xl md:text-4xl font-display leading-tight tracking-tight"
          }
        >
          Software Developer
        </h1>
        <div className={"flex items-center mt-4"}>
          <MapMarker className={"w-8 h-8 text-gray-600 stroke-current"} />
          <span
            className={
              "text-2xl ml-1 text-gray-800 tracking-wide font-display font-semibold"
            }
          >
            Ithaca, NY
          </span>
        </div>
      </div>
      <div className={"relative h-24 md:h-48 mt-8 md:mt-12 w-screen"}>
        <SvgWave className={"text-purple-600"} />
        <img
          src={"/transparentProfile.png"}
          alt={"Picture of Scott Benton"}
          className={
            "hidden md:inline h-96 absolute right-0 bottom-0 md:mb-12 mr-1/4"
          }
        />
        <SvgWave className={"text-purple-700 mt-6 md:mt-12"} />
        <SvgWave className={"text-purple-800 mt-12 md:mt-24 relative"} />
      </div>
      <div
        className={
          "bg-purple-800 flex-grow flex items-center justify-center w-screen"
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
                // "mt-4 text-xl md:text-2xl border-white border py-2 md:py-3 w-full flex items-center justify-center rounded-md font-bold uppercase tracking-wider text-white hover:scale-105 transform transition-transform duration-300 ease-in-out text-center"
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
