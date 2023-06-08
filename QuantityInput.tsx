import * as React from "react";
import styled, { css } from "styled-components";
import { Minus, Plus } from "../../assets/Icons";
import { FlexRow } from "../../shared/globals";
import { themeColor } from "../../shared/styles-utils";

interface QuantityInputProps {
  value: number;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  max?: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}

const QuantityInput = ({
  value,
  className,
  style,
  fullWidth,
  max = Number.POSITIVE_INFINITY,
  disabled,
  onChange,
}: QuantityInputProps) => {
  return (
    <Container
      style={style}
      fullWidth={fullWidth}
      className={className}
      disabled={disabled}
      onClick={(e) => e.stopPropagation()}
    >
      <PrefixSuffix
        data-test="button-decrease-quantity"
        type="button"
        onClick={() => {
          if (onChange) onChange(Number(value - 1));
        }}
        className={value <= 1 && max !== 0 ? "dimmed" : ""}
      >
        <Minus />
      </PrefixSuffix>
      <StyledInput
        type="number"
        fullWidth={fullWidth}
        min="0"
        max={max}
        value={max === 0 ? 0 : value}
        onChange={({ target: { value: targetValue } }) => {
          if (Number(targetValue) > max) return onChange(max);
          if (onChange && +targetValue > 0) onChange(Number(targetValue));
        }}
      />
      <PrefixSuffix
        data-test="button-increase-quantity"
        type="button"
        onClick={() => {
          if (value >= max) return;
          if (onChange) onChange(Number(value + 1));
        }}
        className={value === max ? "dimmed" : ""}
      >
        <Plus />
      </PrefixSuffix>
    </Container>
  );
};

export { QuantityInput };

const Container = styled(FlexRow)<{ fullWidth?: boolean; disabled?: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  border-radius: 4px;
  padding: 8px 10px;
  border: solid 1px ${({ theme }) => theme.bg.inactive};
  background-color: ${themeColor("white")};
  flex-direction: row;
  justify-content: space-between;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

const PrefixSuffix = styled.button`
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  &.dimmed {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const StyledInput = styled.input<{ fullWidth?: boolean }>`
  background-color: transparent;
  color: ${({ theme }) => theme.text.default};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "50px")};
  font-weight: 700;
  text-align: center;
  padding: 0;
  margin: 0px 10px;
  border: none;
  outline: none;
  appearance: textfield;
  font-size: 16px;
  /* Chrome, Safari, Edge, Opera, Firefox */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -moz-appearance: textfield;
    -webkit-appearance: none;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
