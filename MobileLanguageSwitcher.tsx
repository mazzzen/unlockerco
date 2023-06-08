import styled from "styled-components";
import { useStore } from "../../lib/storeData";
import { MobileLanguage } from "../../assets/Icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { components, ValueContainerProps, StylesConfig } from "react-select";
import { theme } from "../../shared/theme";

export const MobileLanguageSwitcher = () => {
  const { locales } = useStore();
  if (locales.length === 1) return null;
  return (
    <LanguageSwitcher
      instanceId="mobile-language-switcher"
      menuPlacement="top"
      styles={selectStyles}
      components={{ ValueContainer }}
    />
  );
};

/**
 * Components
 */

const ValueContainer = ({ children, ...props }: ValueContainerProps) => {
  return (
    <components.ValueContainer {...props}>
      <FlexRow>
        <MobileLanguage />
        {children}
      </FlexRow>
    </components.ValueContainer>
  );
};

/**
 * Styles
 */

const selectStyles: StylesConfig = {
  container: (provided: any) => ({
    ...provided,
    width: "100%",
    display: "block",
    position: "sticky",
    bottom: 0,
    zIndex: 1,
  }),
  control: (provided: any) => ({
    ...provided,
    backgroundColor: theme.bg.reverse,
    border: "solid 1px #dfe3e8",
    fontWeight: "500",
    cursor: "pointer",
    width: "100%",
    padding: 5,
  }),
};

const FlexRow = styled.div`
  background-color: ${({ theme }) => theme.bg.reverse};
  display: flex;
  align-items: center;
  svg {
    margin: 0 8px;
    color: ${({ theme }) => theme.bg.wash};
  }
`;
