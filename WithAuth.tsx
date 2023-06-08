import React from "react";
import { useAuth } from "../hooks/useAuth";
import { isBrowser } from "../../isBrowser";
import type { NextPageProps } from "../../types";
import { useRouter } from "../../i18n";

const WithAuth = (WrappedComponent: React.ComponentType<NextPageProps>) => {
  const RequiresAuthentication = (props: any) => {
    const { isLoggedIn } = useAuth();
    const Router = useRouter();

    if (isLoggedIn) {
      return <WrappedComponent {...props} />;
    } else if (isBrowser && isLoggedIn === false) {
      Router.replace("/login");
    }
    return null;
  };
  return RequiresAuthentication;
};

export default WithAuth;
