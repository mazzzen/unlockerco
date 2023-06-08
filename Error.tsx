import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Spinner } from "../../shared/globals";
import PageNotFoundError from "./PageNotFound";
import StoreExpiredError from "./StoreExpired";
import StoreNotFoundError from "./StoreNotFound";
import UnknownError from "./UnknownError";

export function Error({ statusCode }) {
  const router = useRouter();
  const asPath = router.asPath;
  const validAsPath = asPath === asPath?.toLowerCase();
  // if the asPath contains uppercase letters, redirect to lowercase asPath
  useEffect(() => {
    if (!validAsPath) {
      router.replace(asPath.toLowerCase());
    }
  }, [asPath, router, validAsPath]);

  if (!validAsPath) {
    return <Spinner size={64} />;
  }

  if (statusCode === 9004) {
    return <StoreNotFoundError />;
  }

  if (statusCode === 9009) {
    return <StoreExpiredError />;
  }

  if (statusCode === 404) {
    return <PageNotFoundError />;
  }

  return <UnknownError />;
}
