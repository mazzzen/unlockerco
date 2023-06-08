import React from "react";
import { FormattedMessage } from "react-intl";
import { WuiltLogo } from "../../assets/Icons";
import { Section } from "../../shared/layout";

const { WUILT_STORE_ADMIN_URL } = process.env;

function StoreNotFoundError() {
  return (
    <Section>
      <WuiltLogo size={120} />
      <h2>
        <FormattedMessage defaultMessage="This domain is reserved to a wuilt store that has not been created yet" />
      </h2>
      <p>
        <FormattedMessage defaultMessage="Login to Wuilt and create your store." />
      </p>
      <a href={WUILT_STORE_ADMIN_URL}>CREATE YOUR STORE</a>
    </Section>
  );
}

export default StoreNotFoundError;
