import React from "react";
import { AppProps } from "next/app";

import "../styles/bootstrap.scss";
import { Header } from "../components/Header";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <React.Fragment>
    <Header />
    <Component {...pageProps} />
  </React.Fragment>
);

export default MyApp;
