import React from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";
import styled from "styled-components";
import {
  UserOrderInfoFragment,
  OrderPaymentStatusEnum,
  FulfillStatusEnum,
} from "../../../../generated/graphql";
import { Link } from "../../../../lib/i18n";
import { H5, Spinner } from "../../../../shared/globals";
import { themeColor } from "../../../../shared/styles-utils";
import { DefaultTextPrice } from "../../../Price";

interface OrderHistoryPanelProps {
  orders: (UserOrderInfoFragment | null)[] | null;
  loading: boolean;
}

const formattedOrderStatus = {
  [OrderPaymentStatusEnum.Paid]: <FormattedMessage defaultMessage="Paid" />,
  [OrderPaymentStatusEnum.Pending]: (
    <FormattedMessage defaultMessage="Pending" />
  ),
  [OrderPaymentStatusEnum.Refunded]: (
    <FormattedMessage defaultMessage="Refunded" />
  ),
  unknown: <FormattedMessage defaultMessage="Unknown" />,
};

const formattedFulfillmentOrderStatus = {
  [FulfillStatusEnum.Fulfilled]: (
    <FormattedMessage defaultMessage="Fulfilled" />
  ),
  [FulfillStatusEnum.PartiallyFulfilled]: (
    <FormattedMessage defaultMessage="Partially Fulfilled" />
  ),
  [FulfillStatusEnum.Unfulfilled]: (
    <FormattedMessage defaultMessage="Unfulfilled" />
  ),
  unknown: <FormattedMessage defaultMessage="Unknown" />,
};

const OrderHistoryPanel = ({ orders, loading }: OrderHistoryPanelProps) => {
  if (loading) {
    return <Spinner size={64} inline />;
  }

  return (
    <>
      <GridContainerHeader>
        <GridCell>
          <FormattedMessage defaultMessage="Order" />
        </GridCell>
        <GridCell>
          <FormattedMessage defaultMessage="Date" />
        </GridCell>
        <GridCell>
          <FormattedMessage defaultMessage="Payment" />
        </GridCell>
        <GridCell>
          <FormattedMessage defaultMessage="Fulfillment" />
        </GridCell>
        <GridCell>
          <FormattedMessage defaultMessage="Total" />
        </GridCell>
      </GridContainerHeader>
      {orders?.map((order) => (
        <Link key={order?.id} href={`/me/my-orders/${order?.id}`}>
          <GridContainerBody>
            <GridCell id="order-serial" fontWeight="bold">
              #
              <FormattedNumber
                value={+order?.orderSerial!}
                minimumIntegerDigits={4}
                notation={+order?.orderSerial! < 1000 ? "compact" : "standard"}
              />
            </GridCell>
            <GridCell>
              <FormattedDate
                value={order?.createdAt}
                day="2-digit"
                month="long"
                year="numeric"
              />
            </GridCell>
            <GridCell>
              {formattedOrderStatus[order?.paymentStatus ?? "unknown"] ??
                order?.paymentStatus}
            </GridCell>
            <GridCell>
              {formattedFulfillmentOrderStatus[
                order?.fulfillmentStatus ?? "unknown"
              ] ?? order?.fulfillmentStatus}
            </GridCell>
            <PriceCell money={order?.totalPrice} />
          </GridContainerBody>
        </Link>
      ))}
    </>
  );
};

export default OrderHistoryPanel;

const GridContainerBody = styled.div`
  display: grid;
  grid-template-columns: 16% 36% 16% 16% 16%;
  padding: 20px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: solid 1px #dfe4e8;
  }

  &:hover {
    background-color: ${({ theme }) => theme.text.default}10;
  }

  @media (max-width: 768px) {
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
  }
`;

const GridContainerHeader = styled(GridContainerBody)`
  & > h5 {
    color: ${({ theme }) => theme.text.default}80;
  }
  &:hover {
    background-color: unset;
  }
  cursor: unset;
`;

const GridCell = styled(H5)`
  min-width: 100px;
  &#order-serial {
    color: ${themeColor("primary")};
  }
`;

const PriceCell = styled(DefaultTextPrice)`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.4;
`;
