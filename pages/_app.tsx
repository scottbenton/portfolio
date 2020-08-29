import "@/styles/globals.css";
import clsx from "clsx";
import { Header, Footer, Content } from "@/components/layout/";
import "typeface-comfortaa";
import "typeface-roboto";
import { useRouter } from "next/router";
import Head from "next/head";

interface MyAppProps {
  Component: new () => React.Component<any>;
  pageProps: Object;
}

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  const router = useRouter();
  const whiteBackground = router.pathname === "/blog/[post]";
  console.debug(whiteBackground);

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
          "antialiased flex flex-col min-h-screen font-body text-gray-800",
          whiteBackground ? "bg-white" : "bg-gray-200"
        )}
      >
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </div>
    </>
  );
};

export default MyApp;
