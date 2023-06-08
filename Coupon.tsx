import { KeyboardEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { FormattedMessage, useIntl } from "react-intl";
import {
  GetOrderByIdDocument,
  usePromoCodeByCodeLazyQuery,
  useUpdateOrderPromoMutation,
} from "../../generated/graphql";
import { PrimaryButton } from "../Button";
import { rtl } from "../../shared/styles-utils";
import { BoxImportant, Delete, PercentCard } from "../../assets/Icons";
import { FlexCol, FlexRow, Input } from "../../shared/globals";
import { HeavyH4 } from "../Checkout/CheckoutCart/styled";
import { useStore } from "../../lib/storeData";
import useCheckout from "../../contexts/CartContext/useCheckout";
import { OrderWarns } from "../Checkout/types";
import Alert from "../../shared/globals/UiElements/Alert";

export const InvalidCouponError = "INVALID_PROMO_CODE";

const Coupon = () => {
  const { storeId } = useStore();
  const { checkout, updateCoupon } = useCheckout();
  const intl = useIntl();
  const [inputQuery, setInputQuery] = useState("");

  const [fetchPromoCode, { loading }] = usePromoCodeByCodeLazyQuery({
    ssr: false,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "no-cache",
  });

  const [updateOrderPromoMutation] = useUpdateOrderPromoMutation({});
  const updateOrderPromo = async (promoCode: string) => {
    if (checkout?.orderId) {
      await updateOrderPromoMutation({
        variables: {
          UpdateOrderPromoInput: {
            storeId,
            promoCode,
            orderId: checkout?.orderId,
          },
        },
        awaitRefetchQueries: true,
        refetchQueries: [
          {
            query: GetOrderByIdDocument,
            variables: { orderId: checkout?.orderId, storeId },
          },
        ],
      });
    }
  };

  const applyPromoCode = async () => {
    if (!inputQuery) return;

    try {
      const { data } = await fetchPromoCode({
        variables: { storeId, code: inputQuery },
      });

      if (
        data?.promoCodeByCode?.status === "ACTIVE" &&
        data?.promoCodeByCode?.isArchived === false
      ) {
        const fetchedCodeData = {
          code: data?.promoCodeByCode?.code || "",
          percentageOff: data?.promoCodeByCode?.percentageOff || 0,
        };
        await updateOrderPromo(fetchedCodeData.code);
        updateCoupon(fetchedCodeData);
        setInputQuery("");
      } else {
        updateCoupon({ percentageOff: 0, code: InvalidCouponError });
      }
    } catch (error) {
      updateCoupon({ percentageOff: 0, code: InvalidCouponError });
    }
  };

  const removePromoCode = async () => {
    await updateOrderPromo("");
    updateCoupon({ percentageOff: 0, code: "" });
    setInputQuery("");
  };

  const handlePressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      inputQuery?.length !== 0 && applyPromoCode();
    }
  };

  const isInvalid = !loading && checkout?.coupon?.code === InvalidCouponError;

  /** Start the coupon error handle when in InvalidOrder page */
  const isInvalidOrderPage =
    checkout?.meta?.activeStepInfo?.name === "Invalid Order";
  const fetchedWarns =
    isInvalidOrderPage && localStorage.getItem("order-warns");
  const warns = fetchedWarns
    ? (JSON.parse(fetchedWarns) as OrderWarns)
    : undefined;

  // reset coupon if error
  useEffect(() => {
    if (warns?.coupon?.isError) {
      updateCoupon({ code: "", percentageOff: 0 });
    }
  }, [updateCoupon, warns?.coupon?.isError]);
  /** End the coupon error handle when in InvalidOrder page */

  return (
    <>
      <FlexCol alignItems="flex-start">
        <HeavyH4 style={{ fontWeight: 500 }}>
          <FormattedMessage defaultMessage="Do you have a coupon code?" />
        </HeavyH4>
        <FullWidth style={{ marginTop: 10 }} alignItems="stretch">
          <InputWithIcon>
            <StyledInput
              value={inputQuery}
              className={isInvalid ? "invalid" : ""}
              onKeyUp={(e) => handlePressEnter(e)}
              onChange={({ target: { value } }) => setInputQuery(value)}
              placeholder={intl.formatMessage({
                defaultMessage: "Enter coupon code",
              })}
            />
            {isInvalid && (
              <IconHolder>
                <BoxImportant />
              </IconHolder>
            )}
          </InputWithIcon>
          <ApplyCouponButton
            className={!inputQuery ? "dimmed" : undefined}
            onClick={applyPromoCode}
            isLoading={loading}
          >
            <FormattedMessage defaultMessage="Apply" />
          </ApplyCouponButton>
        </FullWidth>
        {checkout?.coupon?.percentageOff! > 0 && (
          <CouponTag
            prefixIcon={<PercentCard />}
            suffixIcon={
              <span style={{ cursor: "pointer" }} onClick={removePromoCode}>
                <Delete small />
              </span>
            }
          >
            {checkout?.coupon?.code}
          </CouponTag>
        )}
        {isInvalid && (
          <Alert
            message={
              <FormattedMessage defaultMessage="Sorry, this coupon code is invalid" />
            }
            closeAction={removePromoCode}
          />
        )}
      </FlexCol>
      {warns?.coupon?.isError && (
        <Alert
          message={
            <FormattedMessage
              defaultMessage="Coupon <b>“{coupon}”</b> is no longer valid, and has been removed from your order"
              values={{
                coupon: warns?.coupon?.name,
                b: (...chunks) => <b>{chunks}</b>,
              }}
            />
          }
          type="warn"
        />
      )}
    </>
  );
};

export default Coupon;

const FullWidth = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
`;

const InputWithIcon = styled(FullWidth)`
  position: relative;
`;

const StyledInput = styled(Input)`
  width: 50%;
  ${rtl("margin-left", "margin-right")}: 10px;
  ${rtl("padding-left", "padding-right")}: 30px;
  margin-bottom: 0px;
  margin-top: 0;
`;

const ApplyCouponButton = styled(PrimaryButton)`
  padding: 8px 17px;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const CouponTag = styled(ApplyCouponButton)`
  margin-top: 10px;
  padding: 8px 4px !important;
  color: #42ab44;
  background-color: #42ab441a;
  border: none;
  cursor: unset;
`;

const IconHolder = styled.span`
  position: absolute;
  ${rtl("left", "right")}: 20px;
`;
