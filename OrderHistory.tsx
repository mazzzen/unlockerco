import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import EmptyState from "./OrdersEmptyState";
import OrderHistoryPanel from "./OrderHistoryPanel";
import {
  OrderSortByField,
  SortOrder,
  useListCustomerOrdersQuery,
} from "../../../../generated/graphql";
import { Card, H3 } from "../../../../shared/globals";
import { Pagination } from "../../../Pagination/Pagination";
import LoadingSpinner from "../../../../shared/globals/UiElements/LoadingSpinner";
import { useAuth } from "../../../../lib/Authentication";
import { useRouter } from "../../../../lib/i18n";

const ITEM_PER_PAGE = 10;

const OrderHistory = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { page: urlPage = 1 } = router.query;
  const page = Number(urlPage);
  const offset = (page - 1) * ITEM_PER_PAGE;

  const { data, loading } = useListCustomerOrdersQuery({
    variables: {
      id: user?.id!,
      connection: {
        sortBy: OrderSortByField.CreatedAt,
        sortOrder: SortOrder.Desc,
        first: ITEM_PER_PAGE,
        offset,
      },
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <MarginTop>
      <H3 fontWeight="bold">
        <FormattedMessage defaultMessage="Order History" />
      </H3>
      {data?.customerOrders?.orders?.nodes?.length ? (
        <>
          <OrdersList paddingSize="none">
            <OrderHistoryPanel
              orders={data?.customerOrders?.orders?.nodes}
              loading={loading}
            />
          </OrdersList>
          <Pagination
            offset={offset}
            totalCount={data?.customerOrders?.orders?.totalCount}
            itemPerPage={ITEM_PER_PAGE}
            style={{ paddingBottom: 0 }}
          />
        </>
      ) : (
        <OrdersList paddingSize="xlarge">
          <EmptyState />
        </OrdersList>
      )}
    </MarginTop>
  );
};

export { OrderHistory };

const MarginTop = styled.div`
  margin-top: 25px;
  width: 100%;
`;

const OrdersList = styled(Card)`
  margin-top: 11px;
  overflow: auto;
`;
