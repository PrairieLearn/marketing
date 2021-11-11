import React from "react";
import Head from "next/head";

import { ContactUsForm } from "../../components/ContactUsForm";

export default function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title>Enterprise | PrairieLearn</title>
      </Head>
      <div className="container my-5">
        <div className="mb-5">
          <h1 className="display-3">Enterprise subscription</h1>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col col-md-10">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
