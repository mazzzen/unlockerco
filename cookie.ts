import cookie, { CookieSerializeOptions } from "cookie";
import { IncomingMessage } from "http";
import { isBrowser } from "../../lib/isBrowser";

export const createCookie = (
  name: string,
  value: string,
  options?: CookieSerializeOptions
) => {
  if (!isBrowser && value) return;
  document.cookie = cookie.serialize(name, value, { path: "/", ...options });
};

export const getCookie = (
  name: string,
  request: IncomingMessage | undefined = undefined
) => {
  if (!isBrowser) {
    if (!request?.headers?.cookie || !name) return undefined;
    return cookie.parse(request?.headers?.cookie)?.[name];
  } else {
    return cookie.parse(document.cookie)?.[name];
  }
};

export const eraseCookie = (name: string, options?: CookieSerializeOptions) => {
  if (!isBrowser) return;
  document.cookie = cookie.serialize(name, "", {
    path: "/",
    maxAge: 0,
    ...options,
  });
};
