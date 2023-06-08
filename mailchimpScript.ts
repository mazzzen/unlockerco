import { NextApiRequest, NextApiResponse } from "next";
import mailchimp from "@mailchimp/mailchimp_marketing";
import md5 from "md5";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { eventName, parameters, apiKey, server, listId, adminEmail } =
    req.body;

  mailchimp.setConfig({
    apiKey,
    server,
  });

  try {
    await mailchimp.lists.createListMemberEvent(listId, md5(adminEmail), {
      name: eventName.replaceAll(" ", "_"),
      properties: stringifyAllValues(parameters),
    });
  } catch (e) {
    return res
      .status(400)
      .send({ error: true, errorsArray: e.response.body.errors });
  }

  return res.json({ success: true });
}

export function fireHandler({
  eventName,
  parameters,
  apiKey,
  server,
  listId,
  adminEmail,
}) {
  if (!apiKey || !server || !listId || !adminEmail) {
    return;
  }

  fetch("/api/mailchimpScript", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventName,
      parameters,
      apiKey,
      server,
      listId,
      adminEmail,
    }),
  });
}

function stringifyAllValues(data: { [key: string]: any }) {
  let stringifiedValues = {};

  for (const [key, value] of Object.entries(data)) {
    stringifiedValues = {
      ...stringifiedValues,
      [key.replace("$", "")]: value === undefined ? "" : JSON.stringify(value),
    };
  }

  return stringifiedValues;
}
