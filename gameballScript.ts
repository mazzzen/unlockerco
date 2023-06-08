import { NextApiRequest, NextApiResponse } from "next";
import { GameballExtractedDataType } from "../../lib/analytics-accounts/snippets";
import { GameballEventName } from "../../lib/analytics-accounts/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    eventName,
    gameballExtractedData,
    parameters,
  }: {
    eventName: string;
    gameballExtractedData: GameballExtractedDataType;
    parameters;
  } = req.body;
  try {
    if (
      eventName === GameballEventName.Sign_Up &&
      gameballExtractedData.signupChallenge === "true"
    ) {
      const result = await fetch(
        "https://api.gameball.co/api/v3.0/integrations/player",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apiKey: gameballExtractedData.apiKey,
          },
          body: JSON.stringify({
            playerUniqueId: parameters?.id?.split("_")[1],
            mobile: parameters?.phone,
            email: parameters?.email,
            playerAttributes: {
              displayName: parameters?.name,
              firstName: parameters?.name?.split(" ")[0],
              lastName: parameters?.name?.split(" ")[1],
              mobile: parameters?.phone,
              email: parameters?.email,
            },
            referrerCode: null,
            levelOrder: null,
          }),
        }
      );
      if (result.ok) {
        fetch("https://api.gameball.co/api/v3.0/integrations/event", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apiKey: gameballExtractedData.apiKey,
          },
          body: JSON.stringify({
            events: {
              "Customer Signed Up": {
                // Events with metadata
                vendor: "wuilt",
              },
              review: {}, // For events with no metadata
            },
            playerUniqueId: parameters?.id?.split("_")[1],
          }),
        });
      }
      return;
    }
    if (
      eventName === GameballEventName.Checkout_Confirmation &&
      gameballExtractedData.createOrderChallenge === "true"
    ) {
      fetch("https://api.gameball.co/api/v3.0/integrations/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: gameballExtractedData.apiKey,
        },
        body: JSON.stringify({
          events: {
            "Customer Created Order": {
              // Events with metadata
              vendor: "wuilt",
            },
            review: {}, // For events with no metadata
          },
          playerUniqueId: parameters?.id?.split("_")[1],
        }),
      });
    }

    if (eventName === GameballEventName.Add_to_Cart) {
      fetch("https://api.gameball.co/api/v3.0/integrations/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: gameballExtractedData.apiKey,
        },
        body: JSON.stringify({
          events: {
            [GameballEventName.Add_to_Cart]: {
              // Events with metadata
              price: parameters?.value,
              currency: parameters?.currency,
              category: parameters?.event_category,
              sku: parameters?.content_sku,
              title: parameters?.event_label,
              quantity: parameters?.num_items,
            },
            review: {}, // For events with no metadata
          },
          playerUniqueId: parameters?.customerId.split("_")[1],
        }),
      });
    }

    if (eventName === GameballEventName.View_Product) {
      fetch("https://api.gameball.co/api/v3.0/integrations/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: gameballExtractedData.apiKey,
        },
        body: JSON.stringify({
          events: {
            [GameballEventName.View_Product]: {
              title: parameters?.event_label,
              price: parameters?.content_price,
              category: parameters?.content_category,
              brand: parameters?.content_brand,
              currency: parameters?.content_currency,
            },
            review: {}, // For events with no metadata
          },
          playerUniqueId: parameters?.customerId.split("_")[1],
        }),
      });
    }
  } catch (e) {
    return res
      .status(400)
      .send({ error: true, errorsArray: e.response.body.errors });
  }

  return res.json({ success: true });
}

export async function fireHandler({
  eventName,
  gameballExtractedData,
  parameters,
}) {
  if (!gameballExtractedData.apiKey) {
    return;
  }
  fetch("/api/gameballScript", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventName,
      gameballExtractedData,
      parameters,
    }),
  });
}
