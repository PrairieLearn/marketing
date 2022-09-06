import Head from "next/head";
import React from "react";
import { PageBanner } from "../../components/Banner";
import { Heading } from "../../components/Heading";
import Stack from "../../components/Stack";

export default function Support() {
  return (
    <React.Fragment>
      <Head>
        <title>Support | PrairieLearn</title>
      </Head>

      <PageBanner title="Support" />

      <div className="container my-5">
        <Stack spacing={5}>
          <div>
            <Heading>Community</Heading>

            <p>
              <a href="https://github.com/PrairieLearn/PrairieLearn/discussions">
                GitHub Discussions
              </a>{" "}
              is the best place to ask questions, find answers, and get help. If
              you prefer to chat with folks in real time, check out the{" "}
              <a href="https://join.slack.com/t/prairielearn/shared_invite/zt-1eytf3ikh-XSd_IlwV3CaAegMBZDevTA">
                PrairieLearn community Slack
              </a>
              .
            </p>
          </div>

          <div>
            <Heading>Office hours</Heading>

            <p>
              The PrairieLearn team holds weekly office hours that are open to
              anyone using PrairieLearn. Email{" "}
              <a href="mailto:support@prairielearn.com">
                support@prairielearn.com
              </a>{" "}
              if you need an invite.
            </p>
          </div>

          <div>
            <Heading>Email</Heading>

            <p>
              If you&apos;re having an emergency or need additional support,
              reach out via email at{" "}
              <a href="mailto:support@prairielearn.com">
                support@prairielearn.com
              </a>
              .
            </p>
          </div>
        </Stack>
      </div>
    </React.Fragment>
  );
}
