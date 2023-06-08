import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Home, MobileShop, ShoppingBag } from "../../../../assets/Icons";
import { useCart } from "../../../../contexts/CartContext";
import { Link, useRouter } from "../../../../lib/i18n";
import { themeColor } from "../../../../shared/styles-utils";
import { useStore } from "../../../../lib/storeData";

const FixedNav = () => {
  const { toggleSideCart } = useCart();
  const { appearance } = useStore();
  const { pathname } = useRouter();

  const storePrimaryColor = appearance?.colors?.primary!;

  return (
    <>
      <MobileFixedNav>
        <NavItems>
          <Link href="/">
            <li>
              <a>
                <Home
                  color={pathname === "/" ? storePrimaryColor : undefined}
                />
              </a>
              <FormattedMessage defaultMessage="Home" />
            </li>
          </Link>
          <Link href="/shop">
            <li>
              <a>
                <MobileShop
                  color={pathname === "/shop" ? storePrimaryColor : undefined}
                />
              </a>
              <FormattedMessage defaultMessage="Shop" />
            </li>
          </Link>
          <li onClick={toggleSideCart}>
            <a>
              <ShoppingBag
                color={pathname === "/cart" ? storePrimaryColor : undefined}
              />
            </a>
            <FormattedMessage defaultMessage="Cart" />
          </li>
        </NavItems>
      </MobileFixedNav>
    </>
  );
};

export default FixedNav;

const MobileFixedNav = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  box-shadow: 0 -1px 5px 0 rgba(190, 190, 190, 0.3);
  background-color: ${themeColor("white")};
  z-index: 100;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding-inline-start: 0;

  li {
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.bg.wash};
    min-width: 67px;
    text-align: center;
    cursor: pointer;
    a {
      text-decoration: none;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      color: ${({ theme }) => theme.bg.wash};

      &:hover {
        color: ${themeColor("primary")};
      }
      svg {
        margin-bottom: 8px;
      }
    }
  }
`;
