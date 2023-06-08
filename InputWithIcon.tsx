import React from "react";
import styled, { css } from "styled-components";
import { FlexRow, Input } from "..";
import { rtl, themeColor } from "../../styles-utils";

interface InputFieldProps {
  name?: string;
  type?: string;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
  value?: string;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  width?: string;
  borderWidth?: string;
  margin?: string;
  padding?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      name,
      type,
      value,
      className,
      prefix,
      suffix,
      min,
      max,
      minLength,
      maxLength,
      placeholder,
      width,
      borderWidth,
      margin,
      padding,
      onChange,
      onFocus,
      onKeyUp,
      ...restProps
    },
    ref
  ) => {
    return (
      <InputWrapper
        className={className}
        borderWidth={borderWidth}
        margin={margin}
      >
        {prefix && <StyledPrefix isIconExist={!!prefix}>{prefix}</StyledPrefix>}
        <StyledInput
          {...restProps}
          name={name}
          type={type}
          ref={ref}
          value={value}
          width={width}
          style={{ padding: padding }}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          onFocus={onFocus}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
        />
        {suffix && <StyledSuffix isIconExist={!!suffix}>{suffix}</StyledSuffix>}
      </InputWrapper>
    );
  }
);
InputWithIcon.displayName = "InputWithIcon";
export default InputWithIcon;

const InputWrapper = styled(FlexRow)<{
  borderWidth;
  margin;
}>`
  background-color: ${themeColor("white")};
  border: 1px solid ${({ theme }) => theme.bg.inactive};
  border-radius: 0.25rem;
  ${({ borderWidth }) =>
    borderWidth &&
    css`
      border-width: ${borderWidth};
    `};
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};
`;

const StyledPrefix = styled.span<{ isIconExist: boolean }>`
  ${({ isIconExist }) =>
    isIconExist &&
    css`
      ${rtl(`margin-right`, `margin-left`)}: 12px;
    `};
`;

const StyledSuffix = styled.span<{ isIconExist: boolean }>`
  ${({ isIconExist }) =>
    isIconExist &&
    css`
      ${rtl(`margin-left`, `margin-right`)}: 12px;
    `};
`;

const StyledInput = styled(Input)<{ width }>`
  ${({ width }) => (width ? { width } : "inherit")};
  margin-top: 0;
  font-weight: normal;
  border: 0;
  :focus {
    border: 0;
  }
`;
