import React from "react";
import {
  OrderHistory,
  ProfileLayout,
} from "../../../components/CustomerProfile";
import { Section } from "../../../shared/layout";
import type { UserOrdersPageProps } from "../../types";

const UserOrdersPage: React.FC<UserOrdersPageProps> = () => {
  return (
    <Section background={"backgroundReverse"}>
      <ProfileLayout>
        <OrderHistory />
      </ProfileLayout>
    </Section>
  );
};

export default UserOrdersPage;
