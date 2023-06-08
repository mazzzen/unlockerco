import { fireHandler } from "../../pages/api/gameballScript";
import { gameballExtractedData } from "./snippets";
import { GameballEventName } from "./types";

function fireHandlerWrapper(props: { eventName: string; parameters: any }) {
  if (!gameballExtractedData) {
    return;
  }
  return fireHandler({
    gameballExtractedData,
    ...props,
  });
}

export function fireGameballEvent(parameters: any, eventName: string) {
  if (eventName === GameballEventName.Sign_Up) {
    fireHandlerWrapper({
      eventName,
      parameters,
    });
    return;
  }

  if (eventName === GameballEventName.Checkout_Confirmation) {
    fireHandlerWrapper({
      eventName,
      parameters,
    });
    return;
  }

  if (eventName === GameballEventName.Add_to_Cart && parameters?.customerId) {
    fireHandlerWrapper({
      eventName,
      parameters,
    });
    return;
  }

  if (eventName === GameballEventName.View_Product && parameters?.customerId) {
    fireHandlerWrapper({
      eventName,
      parameters,
    });
    return;
  }
}
