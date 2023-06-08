import { Money } from "../../generated/graphql";

export function getMoney(a: Money | null | undefined): Money {
  return {
    currencyCode: a?.currencyCode!,
    amount: a?.amount || 0,
  };
}

export function subtractMoney(a: Money, b: Money | undefined | null): Money {
  return {
    currencyCode: a?.currencyCode,
    amount: a?.amount - (b?.amount || 0),
  };
}

export function addMoney(a: Money, b: Money | undefined | null): Money {
  return {
    currencyCode: a?.currencyCode,
    amount: a?.amount + (b?.amount || 0),
  };
}

export function multiplyMoney(a: Money, b: Money | undefined | null): Money {
  return {
    currencyCode: a?.currencyCode,
    amount: a?.amount * (b?.amount || 0),
  };
}

export function divideMoney(a: Money, b: Money | undefined | null): Money {
  return {
    currencyCode: a?.currencyCode,
    amount: a?.amount / (b?.amount || 0),
  };
}

export function orMoney(
  a: Money | undefined | null,
  b: Money | undefined | null
): Money {
  return {
    currencyCode: a?.currencyCode || b?.currencyCode!,
    amount: a?.amount || b?.amount || 0,
  };
}

export function multiplyMoneyByNumber(
  a: Money,
  b: number | undefined | null
): Money {
  return {
    currencyCode: a?.currencyCode,
    amount: a?.amount * (b || 0),
  };
}
