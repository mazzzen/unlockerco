import React from "react";
import {
  ProfileLayout,
  OrderDetails,
} from "../../../components/CustomerProfile";
import { Section } from "../../../shared/layout";
import type { UserOrderDetailsProps } from "../../types";

const UserOrderDetails: React.FC<UserOrderDetailsProps> = ({ orderId }) => {
  return (
    <Section background={"backgroundReverse"}>
      <ProfileLayout>
        <OrderDetails orderId={orderId as string} />
      </ProfileLayout>
    </Section>
  );
};

export default UserOrderDetails;
