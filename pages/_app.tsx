import "styles/globals.css";
import clsx from "clsx";
import { Header, Footer, Content } from "components/layout/";
import "@fontsource/comfortaa/variable.css";
import "@fontsource/inter/variable.css";
import { useRouter } from "next/router";
import Head from "next/head";

interface MyAppProps {
  Component: new () => React.Component<any>;
  pageProps: Object;
}

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  const router = useRouter();
  const whiteBackground = ["/blog/[post]", "/"].includes(router.pathname);

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
          "antialiased font-body text-gray-800 flex flex-col min-h-screen",
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
