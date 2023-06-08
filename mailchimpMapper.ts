import cuid from "cuid";
import { fireHandler } from "../../pages/api/mailchimpScript";
import { mailchimpExtractedData } from "./snippets";
import { MailchimpEventName } from "./types";

const getStoreUrl = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location.protocol + "//" + window.location.hostname;
};

function createItem(item, prefixParm) {
  const prefix = typeof prefixParm === "number" ? "" : prefixParm;
  return {
    [`${prefix}ProductName`]: item.content_name,
    [`${prefix}ProductID`]: item.content_ids[0],
    [`${prefix}SKU`]: item.sku,
    [`${prefix}ProductCategories`]: item.collectionNames,
    [`${prefix}ImageURL`]: item.imgSrc,
    [`${prefix}ProductURL`]: `${getStoreUrl()}/product/all/${item.handle}`,
    [`${prefix}ItemPrice`]: item.value,
    [`${prefix}Quantity`]: item.num_items,
    [`${prefix}RowTotal`]: item.num_items * item.value,
  };
}

function fireHandlerWrapper(props: { eventName: string; parameters: any }) {
  if (!mailchimpExtractedData) {
    return;
  }
  const { apiKey, server, listId, adminEmail } = mailchimpExtractedData;

  return fireHandler({
    apiKey,
    server,
    listId,
    adminEmail,
    ...props,
  });
}

export function fireMailchimpEvent(parameters: any, eventName: string) {
  if (eventName === MailchimpEventName.View_Product) {
    const mappedParameters = {
      ProductName: parameters.content_name,
      ProductID: parameters.content_ids[0],
      SKU: parameters.content_sku,
      Categories: parameters.content_category,
      ImageURL: parameters.content_imgSrc,
      URL: parameters.content_url,
      Brand: parameters.content_brand,
      Price: parameters.content_price,
      CompareAtPrice: parameters.content_compareAtPrice,
    };

    fireHandlerWrapper({
      eventName,
      parameters: mappedParameters,
    });

    return;
  }

  if (eventName === MailchimpEventName.Add_to_Cart) {
    const sum = parameters.items.reduce((a, b) => a + b.value, 0);
    const names: string[] = parameters.items.map((i) => i.content_name);
    const mappedParameters = {
      ...createItem(parameters, "AddedItem"),
      value: sum,
      ItemNames: names.join(),
      CheckoutURL: `${getStoreUrl()}/checkout`,
      items: parameters.items.map(createItem),
    };

    fireHandlerWrapper({
      eventName,
      parameters: mappedParameters,
    });
    return;
  }

  if (eventName === MailchimpEventName.Begin_Checkout) {
    const mappedParameters = {
      event_id: cuid(),
      value: parameters.totalPrice,
      ItemNames: parameters.ItemNames,
      CheckoutURL: `${getStoreUrl()}/checkout`,
      Categories: parameters.collections,
      items: parameters.items.map(createItem),
    };

    fireHandlerWrapper({
      eventName,
      parameters: mappedParameters,
    });

    return;
  }

  fireHandlerWrapper({
    eventName,
    parameters,
  });
}
