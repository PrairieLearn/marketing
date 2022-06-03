import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import "../styles/bootstrap.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import * as gtag from "../lib/gtag";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default MyApp;
