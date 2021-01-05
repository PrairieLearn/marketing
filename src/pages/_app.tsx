import React from "react";
import { AppProps } from "next/app";

import "../styles/bootstrap.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
