import React, { useState } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../hooks/useAuth";
import { CustomerIcon, MenuArrow } from "../../../assets/Icons";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { Link, useRouter } from "../../i18n";
import { H4, P } from "../../../shared/globals";
import { rtl, themeColor } from "../../../shared/styles-utils";
import type { Color } from "../../../shared/globals/types";
import { theme } from "../../../shared/theme";
import {
  filterMePageItems,
  mePageItemsEnum,
} from "../../../components/CustomerProfile";
import { useStore } from "../../storeData";

interface AccountButtonProps extends Color {
  icon?: React.ReactElement;
}

const AccountButton: React.FC<AccountButtonProps> = ({
  color,
  icon = <CustomerIcon color={theme.colors[color!]} />,
}) => {
  const Router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const { areReviewsActivated } = useStore();

  const { ref } = useClickOutside(handleClickOutside);

  return (
    <>
      {isLoggedIn ? (
        <StyledContainer ref={ref}>
          <StyledMyAccountButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <CustomerIcon color={theme.colors[color!]} />
            <P size="14px" color={color} margin="0 5px">
              <FormattedMessage defaultMessage="My Account" />
            </P>
            <IconWrapper isOpen={isOpen}>
              <MenuArrow />
            </IconWrapper>
          </StyledMyAccountButton>
          <StyledAccountMenu isOpen={isOpen} onClick={() => setIsOpen(false)}>
            {filterMePageItems(areReviewsActivated).map((item) =>
              item.id !== mePageItemsEnum.LogOut ? (
                <Link key={item.id} href={`/me/${item.slug}/`}>
                  <StyledButton>
                    {item.icon}
                    {item.title}
                  </StyledButton>
                </Link>
              ) : (
                <StyledButton key={item.id} onClick={logout}>
                  {item.icon}
                  {item.title}
                </StyledButton>
              )
            )}
          </StyledAccountMenu>
        </StyledContainer>
      ) : (
        <Link href="/login" query={{ prevUrl: Router.asPath }}>
          <StyledSpan>
            {icon}
            <H4 color={color} fontWeight={400}>
              <FormattedMessage defaultMessage="Login" />
            </H4>
          </StyledSpan>
        </Link>
      )}
    </>
  );
};

export default AccountButton;

/**
 *
 * Styles
 *
 */

const StyledContainer = styled.div`
  position: relative;
`;

const StyledMyAccountButton = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  letter-spacing: -0.23px;
  font-weight: bold;
  border-radius: 4px;
  padding: 6px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.5);
  }

  ${({ isOpen }) => isOpen && "filter: brightness(0.5)"};
`;

const StyledAccountMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #fff;
  margin-top: 4px;
  border-radius: 4px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15), 0 0 3px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 4px 0;
  width: 100%;
  z-index: 11; // above active menu item
`;

const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  svg {
    path {
      fill: ${({ isOpen }) => (isOpen ? "#252A31" : themeColor("primary"))};
    }
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 8px 10px;
  width: 100%;
  text-align: ${rtl("right", "left")};
  font-size: 14px;
  display: flex;
  svg {
    margin-inline-end: 5px;
  }
  &:hover {
    background: #e8edf1;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #252a31;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }
  svg {
    margin: 0 10px 0 10px;
  }
`;
