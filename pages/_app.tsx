import "styles/globals.css";
import clsx from "clsx";
import { Header, Footer } from "components/layout/";
import "@fontsource/comfortaa/variable.css";
import "@fontsource/inter/variable.css";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps, router } = props;

  return (
    <>
      <DefaultSeo
        defaultTitle={"Scott Benton"}
        titleTemplate={"Scott Benton | %s"}
        description={"Software Developer and Web Developer in Ithaca New York"}
        additionalMetaTags={[
          {
            property: "keywords",
            content: "Software, Web, Developer, Website, Ithaca",
          },
          {
            property: "author",
            content: "Scott Benton",
          },
        ]}
        additionalLinkTags={[{
          rel: "icon",
          href: "/favicon.png"
        }]}
      />
      <div
        className={clsx(
          "antialiased font-body text-white flex flex-col min-h-screen bg-primary-700"
        )}
      >
        <Header />
        <AnimatePresence exitBeforeEnter={true} initial={false}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

export default MyApp;
