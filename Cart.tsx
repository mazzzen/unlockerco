import { FormattedMessage } from "react-intl";
import Cart from "../../../components/Cart";
import { PageSubHeader } from "../../../components/UtilityComponents/PageSubHeader";
import { Section } from "../../../shared/layout";
import type { CartPageProps } from "../../types";

const CartPage: React.FC<CartPageProps> = () => {
  return (
    <>
      <PageSubHeader>
        <FormattedMessage defaultMessage="Cart" />
      </PageSubHeader>
      <Section background={"backgroundReverse"}>
        <Cart />
      </Section>
    </>
  );
};

export default CartPage;
