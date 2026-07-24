import React from "react";
import { AppProps } from "next/app";
import SSRProvider from "react-bootstrap/SSRProvider";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/bootstrap.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <SSRProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </SSRProvider>
    </React.Fragment>
  );
};

export default MyApp;
