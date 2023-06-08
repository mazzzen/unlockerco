import * as React from "react";
import { MobileNavigation } from "./MobileNavigation";
import { StyledBurger } from "./styled";
import type { MenuWithChildrenType } from "./menu/types";
import { SocialLinkType } from "../../../../generated/graphql";
import { BurgerIcon } from "../../../../assets/Icons";
import useRouteChange from "../../../../hooks/useRouteChange";
import { useEscapeAndStopScrollingEffect } from "../../../../hooks/useEscapeAndStopScrollingEffect";

const BurgerMenu = ({
  socialSettings,
  menus,
}: {
  socialSettings: (SocialLinkType | null)[];
  menus: MenuWithChildrenType;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  useRouteChange(() => setIsOpen(false));
  useEscapeAndStopScrollingEffect({ isOpen, setIsOpen });
  return (
    <>
      <StyledBurger onClick={() => setIsOpen(true)}>
        <BurgerIcon />
      </StyledBurger>
      <MobileNavigation
        menus={menus}
        socialSettings={socialSettings}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default BurgerMenu;
