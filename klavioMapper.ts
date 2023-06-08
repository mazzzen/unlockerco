import cuid from "cuid";
import { KlaviyoEventName } from "./types";

declare const _learnq;

const getStoreUrl = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location.protocol + "//" + window.location.hostname;
};

const identify = (parameters) => {
  const firstName = parameters?.name.split(" ")[0];
  const lastName = parameters?.name.split(" ")[1];
  const mappedParameters = {
    $email: parameters.email,
    $first_name: firstName,
    $last_name: lastName,
    $phone_number: parameters.phone,
  };
  _learnq.push(["identify", mappedParameters]);
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

export function fireKlavioEvent(parameters: any, eventName: string) {
  if (eventName === KlaviyoEventName.View_Product) {
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
    _learnq.push(["track", eventName, mappedParameters]);
    return;
  }

  if (eventName === KlaviyoEventName.Add_to_Cart) {
    const sum = parameters.items.reduce((a, b) => a + b.value, 0);
    const names = parameters.items.map((i) => i.content_name);
    const mappedParameters = {
      ...createItem(parameters, "AddedItem"),
      $value: sum,
      ItemNames: names,
      CheckoutURL: `${getStoreUrl()}/checkout`,
      items: parameters.items.map(createItem),
    };
    _learnq.push(["track", eventName, mappedParameters]);
    return;
  }

  if (eventName === KlaviyoEventName.Begin_Checkout) {
    const mappedParameters = {
      $event_id: cuid(),
      $value: parameters.totalPrice,
      ItemNames: parameters.ItemNames,
      CheckoutURL: `${getStoreUrl()}/checkout`,
      Categories: parameters.collections,
      items: parameters.items.map(createItem),
    };
    if (!_learnq.isIdentified()) {
      identify({
        name: parameters.buyerName,
        email: parameters.buyerEmail,
        phone: parameters.buyerPhone,
      });
    }
    _learnq.push(["track", eventName, mappedParameters]);
    return;
  }

  if (
    eventName === KlaviyoEventName.Sign_Up ||
    eventName === KlaviyoEventName.Login
  ) {
    identify(parameters);
  }

  _learnq.push(["track", eventName, parameters]);
}
