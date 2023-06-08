import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import type { CartItem as CartItemType } from "../../contexts/CartContext/types";
import { CheckoutError } from "../../generated/graphql";
import { FlexCol } from "../../shared/globals";
import useIsMobile from "../../shared/utils/useIsMobile";
import CartItem from "./CartItem";
import { StyledH5, StyledTable, StyledTH } from "./styled";
import { ScreenSize } from "./types";

interface CartTableProps {
  items: CartItemType[];
  errors?: CheckoutError[];
  setIsOrderDirty?: Dispatch<SetStateAction<boolean>>;
}

const CartTable = ({ items, errors, setIsOrderDirty }: CartTableProps) => {
  const { isMobile } = useIsMobile();
  const [renderedErrorsMap, setRenderedErrorsMap] = useState(new Map());

  useEffect(() => {
    if (!setIsOrderDirty) return;

    const totalErrorCount: number = Array.from(
      renderedErrorsMap.values()
    ).reduce((acc, curr) => acc + curr, 0);

    setIsOrderDirty(!!totalErrorCount);
  }, [renderedErrorsMap, setIsOrderDirty]);

  const updateErrorCount = (variantId: string, newErrorCount: number) => {
    setRenderedErrorsMap(
      (prevErrorCounts) =>
        new Map(prevErrorCounts.set(variantId, newErrorCount))
    );
  };

  const eraseErrorFromMap = (variantId: string) => {
    const newMap = new Map(renderedErrorsMap);
    newMap.delete(variantId);
    setRenderedErrorsMap(newMap);
  };

  const renderCartItems = (screenSize: ScreenSize) =>
    items?.map((item) => (
      <CartItem
        key={item.variantId}
        item={item}
        screenSize={screenSize}
        errors={errors}
        updateErrorCount={updateErrorCount}
        eraseErrorFromMap={eraseErrorFromMap}
      />
    ));

  return (
    <>
      {isMobile ? (
        <FlexCol fullWidth>{renderCartItems("Mobile")}</FlexCol>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <StyledTH>
                <StyledH5>
                  <FormattedMessage defaultMessage="Products" />
                </StyledH5>
              </StyledTH>
              <StyledTH>
                <StyledH5>
                  <FormattedMessage defaultMessage="Price" />
                </StyledH5>
              </StyledTH>
              <StyledTH>
                <StyledH5>
                  <FormattedMessage defaultMessage="Quantity" />
                </StyledH5>
              </StyledTH>
              <StyledTH>
                <StyledH5>
                  <FormattedMessage defaultMessage="Subtotal" />
                </StyledH5>
              </StyledTH>
              <StyledTH></StyledTH>
            </tr>
          </thead>
          <tbody>{renderCartItems("Desktop")}</tbody>
        </StyledTable>
      )}
    </>
  );
};

export default CartTable;
