import "styles/globals.css";
import clsx from "clsx";
import { Header, Footer } from "components/layout/";
import "@fontsource-variable/quicksand";
import "@fontsource-variable/inter";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps, router } = props;

  return (
    <>
      <DefaultSeo
        defaultTitle={"Scott Benton"}
        titleTemplate={"Scott Benton | %s"}
        description={
          "Software Developer and Web Developer in Philadelphia Pennsylvania"
        }
        additionalMetaTags={[
          {
            property: "keywords",
            content: "Software, Web, Developer, Website, Philadelphia",
          },
          {
            property: "author",
            content: "Scott Benton",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/Logo.svg",
          },
        ]}
      />
      <div
        className={clsx(
          "antialiased font-body bg-gray-900 flex flex-col min-h-screen max-w-screen-lg mx-auto"
        )}
      >
        <Header />
        <Component key={router.pathname} {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default MyApp;
