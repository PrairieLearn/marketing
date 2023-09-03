import React from "react";
import { AppProps } from "next/app";
import SSRProvider from "react-bootstrap/SSRProvider";

import "../styles/bootstrap.scss";
import { PreHeader } from "../components/PreHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <SSRProvider>
        <PreHeader />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
    </React.Fragment>
  );
};

export default MyApp;
