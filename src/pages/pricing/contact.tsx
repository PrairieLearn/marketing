import React from "react";
import Head from "next/head";

export default function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title></title>
      </Head>
      <div className="container my-5">
        <div className="mb-5">
          <h1 className="display-3">Pricing information</h1>
        </div>
        <p>
          Thanks for your interest in PrairieLearn! We're still getting our
          hosted infrastructure set up, so we're not quite ready to accept
          signups yet. If you're interested in being one of our early partners
          or would like to learn more about how PrairieLearn could help your
          course or institution,{" "}
          <a href="mailto:hello@prairielearn.com" target="_blank">
            let us know
          </a>
          !
        </p>
        <a
          className="btn btn-primary"
          href="mailto:hello@prairielearn.com"
          target="_blank"
        >
          Get in touch
        </a>
      </div>
    </React.Fragment>
  );
}
