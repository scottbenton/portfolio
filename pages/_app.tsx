import "styles/globals.css";
import clsx from "clsx";
import { Header, Footer } from "components/layout/";
import "@fontsource/comfortaa/variable.css";
import "@fontsource/inter/variable.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps, router } = props;

  return (
    <>
      <Head>
        <title>Scott Benton</title>
        <meta
          name="description"
          content="Software Developer and Web Developer in Ithaca New York"
        />
        <meta
          name="keywords"
          content="Software, Web, Developer, Website, Ithaca"
        />
        <meta name="author" content="Scott Benton" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
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
