import React from "react";
import { FormattedMessage } from "react-intl";
import { useCart } from "../../../contexts/CartContext";
import { isAvailableToAdd } from "../../../contexts/CartContext/reducer/utils";
import type { CartItem } from "../../../contexts/CartContext/types";
import Alert from "../../../shared/globals/UiElements/Alert";
import { QuantityInput } from "../../QuantityInput";
import { DummyQuantityInput } from "./styled";

interface SideCartItemQtyProps {
  item: CartItem;
}

const SideCartItemQty: React.FC<SideCartItemQtyProps> = ({ item }) => {
  const { cart, updateQuantity } = useCart();
  const [value, setValue] = React.useState(item.quantity);
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);

  const handleQuantityChange = (value: number) => {
    const newItem: CartItem = { ...item, quantity: value - item.quantity };
    if (isAvailableToAdd(cart.items, newItem).isAvailable) {
      if (
        (item.availableQuantity?.type === "cart" &&
          value < item.availableQuantity?.min!) ||
        value > (item.availableQuantity?.max ?? Number.POSITIVE_INFINITY)
      ) {
        setIsAlertOpen(true);
        return;
      }
      updateQuantity({ itemId: item.variantId, newQuantity: value });
      setIsAlertOpen(false);
      return;
    }

    setIsAlertOpen(true);
  };

  return (
    <>
      <DummyQuantityInput>
        <QuantityInput
          value={item.quantity}
          max={item.availableQuantity?.max ?? Number.POSITIVE_INFINITY}
          onChange={(value) => {
            setValue(value);
            handleQuantityChange(value);
          }}
        />
      </DummyQuantityInput>
      <br />
      {(isAlertOpen || item?.notAvailable) && (
        <Alert
          message={
            value > item.availableQuantity?.max! ? (
              <FormattedMessage defaultMessage="Quantity exceeded" />
            ) : (
              <FormattedMessage
                defaultMessage="Minimum quantity per order {min}. You can add up to {max} per order"
                values={{
                  min: item?.availableQuantity?.min,
                  max: item?.availableQuantity?.max ?? Number.POSITIVE_INFINITY,
                }}
              />
            )
          }
          closeAction={() => setIsAlertOpen(false)}
        />
      )}
    </>
  );
};

export default SideCartItemQty;
