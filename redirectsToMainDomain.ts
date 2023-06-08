import { IncomingMessage, ServerResponse } from "http";
import { StoreContextType, getHostnameFromRequest } from "./storeData";

export function redirectToMainDomain(
  storeDomain: StoreContextType["domain"],
  req: IncomingMessage | undefined,
  res: ServerResponse | undefined
): boolean {
  if (
    storeDomain?.domainName &&
    getHostnameFromRequest(req)?.trim().toLocaleLowerCase() !==
      storeDomain?.domainName &&
    res instanceof ServerResponse
  ) {
    let redirectUrl = `https://${storeDomain?.domainName}`;
    if (req?.url) {
      redirectUrl += req?.url;
    }
    res.writeHead(301, {
      Location: redirectUrl,
    });
    res.end();
    return true;
  }
  return false;
}
