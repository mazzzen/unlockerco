import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import SummaryPanel from "./SummaryPanel";
import { PrimaryButton } from "../../../../components/Button";
import { useCart } from "../../../../contexts/CartContext";
import { CustomProductDiscount } from "../../../../generated/graphql";

interface CartSummaryPanelProps {
  buildId: string;
  isDiscount?: boolean;
  productDiscount?: CustomProductDiscount;
}

const CartSummaryPanel: React.FC<CartSummaryPanelProps> = ({
  buildId,
  isDiscount,
  productDiscount,
}) => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const buildState = cart?.items?.find(
    (item) => item?.variantId === buildId
  )?.buildData;

  if (!buildState) {
    return null;
  }

  return (
    <>
      <PrimaryButton
        reversed
        transparent
        compact
        style={{ textDecoration: "underline" }}
        onClick={() => setIsOpen(true)}
      >
        <FormattedMessage defaultMessage="See Details" />
      </PrimaryButton>

      <SummaryPanel
        buildState={buildState}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isDiscount={isDiscount}
        productDiscount={productDiscount}
      />
    </>
  );
};

export default CartSummaryPanel;
