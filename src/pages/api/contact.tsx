import fetch from "node-fetch";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ error: "Method Not Allowed" });
    return;
  }

  // We should have a Slack token provided via an environment variable.
  // If for some reason we don't, 500.
  // If not, silently do nothing?
  const { SLACK_WEBHOOK_CONTACT_US } = process.env;
  if (!SLACK_WEBHOOK_CONTACT_US) {
    res.status(500).send({ error: "Could not send message" });
    return;
  }

  const { firstName, lastName, email, organization, role, message, url } =
    req.body;

  await fetch(SLACK_WEBHOOK_CONTACT_US, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text:
        `*First name*: ${firstName}\n` +
        `*Last name*: ${lastName}\n` +
        `*Email*: <mailto:${email}|${email}>\n` +
        `*Organization*: ${organization}\n` +
        `*Role*: ${role}\n` +
        `*Message*: ${message}\n` +
        `*URL*: ${url}`,
    }),
  });

  res.status(204).send("");
};
