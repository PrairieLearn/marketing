import React from "react";
import Head from "next/head";

import { ContactUsForm } from "../../components/ContactUsForm";

export default function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact us | PrairieLearn</title>
      </Head>
      <div className="container my-5">
        <h1 className="display-3">Contact us</h1>
        <p className="lead mb-5">
          Want to learn more about how PrairieLearn can help your course or
          institution? Need to schedule a demo? Let us know below and someone
          from our team will be in touch soon.
        </p>
        <div className="row justify-content-center">
          <div className="col col-md-8">
            <ContactUsForm showHeader={false} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
