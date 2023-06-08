import React from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { DownArrow } from "../../../assets/Icons";
import { rtl, themeColor } from "../../styles-utils";
import { FlexRow } from "../index";

interface SelectWithIconProps<OptionType> {
  className?: string;
  dataTest?: string;
  options: OptionType[];
  placeholder?: string;
  keyField?: string;
  disabled?: boolean;
  value: OptionType;
  onChange: (selected: OptionType) => void;
  renderOption: (value: OptionType) => string;
}

function SelectWithIcon<OptionType = any>(
  props: SelectWithIconProps<OptionType>
) {
  const {
    className,
    dataTest,
    options,
    renderOption,
    keyField = "value",
    disabled,
    value,
    onChange,
    placeholder = "--Select--",
    ...restProps
  } = props;
  const intl = useIntl();
  const valueIndex = options?.findIndex(
    (option) => option?.[keyField] === value?.[keyField]
  );

  const handleChange = ({ target: { value: index } }) => {
    onChange(options[index]);
  };

  const renderOptions = options?.map((option, index) => (
    <option data-test="select-option" key={index} value={index}>
      {renderOption(option)}
    </option>
  ));

  return (
    <SelectWrapper>
      <Select
        {...restProps}
        data-test={dataTest}
        className={className}
        disabled={disabled}
        onChange={handleChange}
        value={valueIndex === -1 ? "" : valueIndex}
      >
        <option value="" hidden>
          {placeholder}
        </option>
        {!options?.length && (
          <option
            label={intl.formatMessage({ defaultMessage: "No Results" })}
            disabled
          />
        )}
        {renderOptions}
      </Select>
      <span>
        <DownArrow />
      </span>
    </SelectWrapper>
  );
}

export default SelectWithIcon;

/**
 * Styles
 */

const SelectWrapper = styled(FlexRow)`
  position: relative;

  > span {
    pointer-events: none;
    position: absolute;
    ${rtl("left", "right")}: 10px;
    top: 45%;
    color: #5f738c;
    transform: translate(0, -25%);
  }
`;

const Select = styled.select`
  cursor: pointer;
  flex: 1 0 auto;
  background: ${themeColor("white")};
  font-weight: 600;
  width: 100%;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.bg.inactive};
  border-radius: 0.25rem;
  outline: none;
  padding: 0.5rem 0.75rem;
  margin-top: 0.375rem;
  box-shadow: none;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  &.invalid {
    border: 1px solid #d21c1c;
  }

  &:focus {
    border: 1px solid ${themeColor("primary")};
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  &::-ms-expand {
    display: none;
  }
`;
