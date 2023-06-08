import React from "react";
import styled from "styled-components";
import { ShoppingBag } from "../../../assets/Icons";
import SideCart from "../../../components/Cart/SideCart";
import { LanguageSwitcher } from "../../../components/LanguageSwitcher/LanguageSwitcher";
import { Price } from "../../../components/Price";
import { FlexCol, FlexRow, Span } from "../../../shared/globals";
import { Section } from "../../../shared/layout";
import { rtl, themeColor } from "../../../shared/styles-utils";
import BurgerMenu from "../../default/components/NavBar/BurgerMenu";
import FixedNav from "../../default/components/NavBar/FixedNav";
import SearchBar from "../../default/components/NavBar/SearchBar/SearchBar";
import { StoreTemplate } from "../../TemplateLoader";
import type { NavBarProps, TemplateElement } from "../../types";

const NavBar: TemplateElement<NavBarProps> = ({
  menu,
  socialMedia,
  subtotal,
  itemsCount,
  toggleSideCart,
}) => {
  const Template = StoreTemplate.get();

  return (
    <>
      <SideCart />
      <Section boxShadow background="white">
        <FlexCol>
          <NavTop justifyContent="space-between">
            <BurgerMenu menus={menu!} socialSettings={socialMedia!} />
            <FlexRow>
              <StyledSpan>
                <Template.elements.Logo />
              </StyledSpan>
              <SearchBar />
            </FlexRow>
            <CartBtnWrapper>
              <CartButton data-test="button-side-cart" onClick={toggleSideCart}>
                <CartTotalPrice>
                  <Price money={subtotal} />
                </CartTotalPrice>
                <ShoppingBagWrapper>
                  <ShoppingBagCount>{itemsCount}</ShoppingBagCount>
                  <ShoppingBag />
                </ShoppingBagWrapper>
              </CartButton>
              <LanguageSwitcher />
            </CartBtnWrapper>
          </NavTop>
          <SearchBar mobile />
        </FlexCol>
        <Template.elements.DesktopMenu items={menu!} />
      </Section>
      <FixedNav />
    </>
  );
};

export default NavBar;

/**
 *
 * Styles
 *
 */

const NavTop = styled(FlexRow)`
  padding: 20px 0;
  width: 100%;
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.special.border};
`;

const StyledSpan = styled.span`
  @media (min-width: 768px) {
    ${rtl("margin-left", "margin-right")}: 25px;
  }
  cursor: pointer;
`;

const CartBtnWrapper = styled.div`
  display: flex;

  > *:not(:last-child) {
    @media (min-width: 768px) {
      ${rtl("margin-left", "margin-right")}: 15px;
    }
  }
`;

const CartButton = styled.button`
  color: ${({ theme }) => theme.brand.default};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background: none;
  padding: 0;
  border: none;
  margin: 0;
  line-height: 0;
  cursor: pointer;
  svg {
    margin: 0;
  }
  @media (min-width: 768px) {
    svg {
      margin: 0 10px 0 10px;
    }
  }
`;

const ShoppingBagWrapper = styled.span`
  position: relative;
`;

const ShoppingBagCount = styled.span`
  position: relative;
  background: ${themeColor("primary")}33;
  color: ${themeColor("primary")};
  font-weight: bold;
  width: 20px;
  height: 20px;
  padding: 4px;
  border-radius: 100%;
  min-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0px;
  top: 0px;
  transform: translate(2px, -12px);
  @media (min-width: 768px) {
    transform: translate(12px, -12px);
  }
`;

const CartTotalPrice = styled(Span)`
  font-weight: bold;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
