import * as React from "react";
import { FormattedMessage } from "react-intl";
import {
  FooterFollow,
  TextFollow,
  CloseMenu,
  MobileWrapper,
  MobileNavScrollContainer,
  MobileNavHeader,
  StyledShopButton,
  StyledMyAccountButton,
  StyledLoginButton,
} from "./styled";
import { SocialLinkType } from "../../../../generated/graphql";
import type { MenuWithChildrenType } from "./menu/types";
import { Overlay } from "../../../../shared/globals";
import AccountButton from "../../../../lib/Authentication/components/MobileAccountButton";
import { MobileLanguageSwitcher } from "../../../../components/LanguageSwitcher/MobileLanguageSwitcher";
import { SocialLinks } from "../../../../components/UtilityComponents/SocialLinks";
import { CustomerIcon, LeftArrow } from "../../../../assets/Icons";
import MobileMenu from "./menu/MobileMenu";
import { useAuth } from "../../../../lib/Authentication";
import { Link, useRouter } from "../../../../lib/i18n";

interface MobileNavigationProps {
  open: boolean;
  onClose?: () => void;
  socialSettings: (SocialLinkType | null)[];
  menus: MenuWithChildrenType;
}

export const MobileNavigation = ({
  open,
  onClose,
  socialSettings,
  menus,
}: MobileNavigationProps) => {
  const auth = useAuth();
  const Router = useRouter();
  const [isActive, setIsActive] = React.useState(true);

  React.useEffect(() => {
    if (!auth.isLoggedIn) {
      setIsActive(true);
    }
  }, [auth.isLoggedIn]);

  return (
    <>
      {open && <Overlay onClick={onClose} />}
      <MobileWrapper open={open}>
        <MobileNavScrollContainer>
          <MobileNavHeader>
            <StyledShopButton
              onClick={() => setIsActive(true)}
              className={isActive ? "active" : ""}
            >
              <FormattedMessage defaultMessage="Shop" />
            </StyledShopButton>
            {auth.isLoggedIn ? (
              <StyledMyAccountButton
                onClick={() => setIsActive(false)}
                className={!isActive ? "active" : ""}
              >
                <CustomerIcon />
                <FormattedMessage defaultMessage="My Account" />
              </StyledMyAccountButton>
            ) : (
              <StyledLoginButton>
                <Link href="/login" query={{ prevUrl: Router.asPath }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CustomerIcon />
                    <FormattedMessage defaultMessage="Login" />
                  </div>
                </Link>
              </StyledLoginButton>
            )}
          </MobileNavHeader>
          {isActive ? (
            <>
              <MobileMenu items={menus} />
              <FooterFollow>
                {!socialSettings?.length ? null : (
                  <TextFollow>
                    <FormattedMessage defaultMessage="Follow us on" />
                  </TextFollow>
                )}
                <SocialLinks socialSettings={socialSettings} padding={10} />
              </FooterFollow>
            </>
          ) : (
            <AccountButton />
          )}
          <CloseMenu onClick={onClose}>
            <LeftArrow />
          </CloseMenu>
        </MobileNavScrollContainer>
        <MobileLanguageSwitcher />
      </MobileWrapper>
    </>
  );
};
