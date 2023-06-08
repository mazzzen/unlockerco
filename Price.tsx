import styled from "styled-components";
import { FormattedNumber } from "react-intl";
import { themeColor } from "../../shared/styles-utils";
import { useStore } from "../../lib/storeData";
import { Money, CurrencyCode } from "../../generated/graphql";

export interface PriceProps {
  money: Money | null | undefined;
  className?: string;
  style?: React.CSSProperties;
}

const noOfDigits = {
  [CurrencyCode.Kwd]: 3, // Kuwaiti dinar
  [CurrencyCode.Jod]: 3, // Jordanian dinar
  [CurrencyCode.Bhd]: 3, // Bahraini dinar
  [CurrencyCode.Iqd]: 3, // Iraqi dinar
  [CurrencyCode.Omr]: 3, // Omani rial
};

export const PriceBase = ({
  money: inputMoney,
  className = "",
  style,
}: PriceProps) => {
  const { currency: currencyCode } = useStore();
  const money = inputMoney || { amount: 0, currencyCode };
  const hasDecimal = money.amount % 1 !== 0;

  // handle currencies with 3 digits
  const requiredDecimalPlaces = noOfDigits[currencyCode] || 2;

  const roundedPrice =
    requiredDecimalPlaces === 2
      ? parseFloat((Math.round(money.amount * 4) / 4).toFixed(2))
      : money.amount;

  return (
    <span data-test="text-price" className={className} style={style}>
      <FormattedNumber
        style="currency"
        value={roundedPrice}
        currency={money.currencyCode}
        minimumFractionDigits={hasDecimal ? requiredDecimalPlaces : 0}
        maximumFractionDigits={hasDecimal ? requiredDecimalPlaces : 0}
      />
    </span>
  );
};

export const Price = styled(PriceBase)`
  font-size: 16px;
  font-weight: 700;
  color: ${themeColor("primary")};
  align-self: flex-start;

  @media (min-width: 768px) {
    align-self: center;
  }
`;

export const DefaultTextPrice = styled(PriceBase)`
  color: ${({ theme }) => theme.text.default};
`;
