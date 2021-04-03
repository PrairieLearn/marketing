import React from "react";
import Head from "next/head";

import { ContactUsForm } from "../../components/ContactUsForm";

export default function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title>Pricing information | PrairieLearn</title>
      </Head>
      <div className="container my-5">
        <div className="mb-5">
          <h1 className="display-3">Pricing information</h1>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <p>
              Thanks for your interest in PrairieLearn! We're still getting our
              hosted infrastructure set up, so we're not quite ready to accept
              signups yet. If you're interested in being one of our early
              adopters or would like to learn more about how PrairieLearn could
              help your course or institution, let us know!
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
