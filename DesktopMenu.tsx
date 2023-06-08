import * as React from "react";
import styled, { css } from "styled-components";
import { MenuArrow } from "../../../assets/Icons";
import { SocialLinks } from "../../../components/UtilityComponents/SocialLinks";
import { useStore } from "../../../lib/storeData";
import { NavigationLink } from "../../default/components/NavBar/NavigationLink";
import { rtl, themeColor } from "../../../shared/styles-utils";
import type {
  MenuItemProps,
  MenuProps,
  MenuWithChildrenType,
} from "../../default/components/NavBar/menu/types";
import { useRouter } from "../../../lib/i18n";

function checkIsActive(activePath: string[], pageId: string): boolean {
  return activePath.indexOf(pageId) !== -1;
}

const DesktopMenu = ({ items }: { items: MenuWithChildrenType }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [activePath, setActivePath] = React.useState<string[]>(
    isHome ? [items?.[0]?.id] : []
  );
  React.useEffect(() => {
    setActivePath(isHome ? [items?.[0]?.id] : []);
  }, [isHome, items]);

  const handleOpenSubMenu = React.useCallback<MenuProps["onOpenSubMenu"]>(
    (itemId, level) => {
      if (isHome) {
        const newPath = [...activePath];
        newPath[level] = itemId!;
        setActivePath(newPath);
        return;
      }

      const newPath = [...activePath];
      newPath[level - 1] = itemId!;
      setActivePath(newPath);
    },
    [activePath, isHome]
  );

  const { socialMedia: socialSettings } = useStore();

  const handleCloseSubMenu = React.useCallback<(level: number) => void>(
    (level) => {
      if (isHome) {
        const [firstItem, ...rest] = activePath;
        setActivePath([firstItem, ...rest.splice(0, level - 1)]);
        return;
      }

      setActivePath(activePath.splice(0, level - 1));
    },
    [activePath, isHome]
  );

  return (
    <StyledDesktopNav>
      <Menu
        parentId={null}
        activePath={activePath}
        onCloseSubMenu={handleCloseSubMenu}
        onOpenSubMenu={handleOpenSubMenu}
        menu={items}
        level={1}
        isHome={isHome}
      />
      <IconsWrapper>
        <SocialLinks socialSettings={socialSettings} isCircle={false} />
      </IconsWrapper>
    </StyledDesktopNav>
  );
};

const Menu = ({
  activePath,
  parentId,
  onOpenSubMenu,
  onCloseSubMenu = null,
  menu,
  level,
  isHome,
}: MenuProps) => {
  const handleMouseLeave = React.useCallback(() => {
    if (onCloseSubMenu) {
      onCloseSubMenu(level);
    }
  }, [level, onCloseSubMenu]);

  const StyledMenu =
    level === 1
      ? StyledTopMenu
      : level === 2
      ? StyledDropMenu
      : StyledDropSubMenu;

  const isOpen = checkIsActive(activePath, parentId!);

  if (!menu) return null;

  return (
    <StyledMenu
      key={parentId! + level}
      onMouseLeave={handleMouseLeave}
      isOpen={isOpen}
    >
      <StyledInnerMenu data-test="main-menu-list">
        {menu.map((item) => {
          const firstItem = menu.indexOf(item) === 0;
          return (
            <MenuItem
              activePath={activePath}
              onOpenSubMenu={onOpenSubMenu}
              isActive={checkIsActive(activePath, item.id)}
              firstItem={isHome && level === 1 && firstItem}
              key={item.id}
              level={level}
              item={item}
            />
          );
        })}
      </StyledInnerMenu>
    </StyledMenu>
  );
};

const MenuItem = ({
  className,
  item,
  isActive,
  firstItem,
  level,
  activePath,
  onOpenSubMenu,
}: MenuItemProps) => {
  const handleMouseEnter = React.useCallback(() => {
    onOpenSubMenu(item.id, level);
  }, [item.id, level, onOpenSubMenu]);

  if (!item.children) return null;

  return (
    <StyledMenuItem
      className={className}
      isActive={isActive}
      onMouseEnter={handleMouseEnter}
      firstItem={firstItem!}
    >
      <StyledMenuItemContent data-test="main-menu-item" isActive={isActive}>
        <NavigationLink {...item.link} type={item?.link?.type!}>
          <span dangerouslySetInnerHTML={{ __html: item.icon || "" }} />
          {item.title}
        </NavigationLink>
      </StyledMenuItemContent>
      {item.children.length === 0 ? null : (
        <>
          {!firstItem && (
            <IconWrapper data-test="main-menu-item-arrow" isOpen={isActive}>
              <MenuArrow />
            </IconWrapper>
          )}
          <Menu
            parentId={item.id}
            activePath={activePath}
            menu={item.children}
            level={level + 1}
            onCloseSubMenu={null}
            onOpenSubMenu={onOpenSubMenu}
          />
        </>
      )}
    </StyledMenuItem>
  );
};

export default DesktopMenu;

/**
 *
 *
 * Styles
 *
 *
 */

const StyledInnerMenu = styled.div``;

const StyledDesktopNav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
  }
`;

const IconsWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  }
`;

const StyledMenuItemContent = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#E8EDF1" : "#fff")};
  flex: 1 1 auto;
  display: flex;
  & > a,
  & > a:active,
  & > a:hover,
  & > span {
    text-decoration: none;
    color: #000;
    padding: 10px 8px;
    width: 100%;
  }
`;

const StyledMenuItem = styled.div<{
  isActive: boolean;
  firstItem: boolean;
}>`
  padding: 0 7px;
  display: flex;
  color: ${({ theme }) => theme.text.default};
  position: relative;
  background-color: ${({ isActive }) => (isActive ? "#E8EDF1" : "#fff")};
  z-index: ${({ isActive }) => (isActive ? "10" : "1")};
  font-size: 16px;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  ${rtl("margin-left", "margin-right")}: 4px;

  ${({ firstItem }) => firstItem && FirstMenuItemStyles}
`;

const IconWrapper = styled.span<{ isOpen: boolean }>`
  color: ${({ isOpen }) => (isOpen ? "#252A31" : themeColor("primary"))};
`;

const StyledTopMenu = styled.div<{ isOpen: boolean; level: number }>`
  display: flex;
  justify-content: center;

  & > ${StyledInnerMenu} {
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledDropMenu = styled.div<{ isOpen: boolean }>`
  min-width: 210px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  flex-direction: column;
  top: 100%;
  left: ${rtl("auto", 0)};
  right: ${rtl(0, "auto")};
  margin: 0;
  list-style: none;
  flex-direction: column;
  z-index: 10;
  padding: 10px 0;

  & ${IconWrapper} {
    transform: rotate(${rtl("90deg", "-90deg")});
  }
  & > ${StyledInnerMenu} {
    border-radius: 4px;
    padding: 8px 0;
    list-style: none;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15), 0 0 3px 0 rgba(0, 0, 0, 0.1);
  }
`;

const StyledDropSubMenu = styled.div<{ isOpen: boolean }>`
  min-width: 210px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  padding: 4px 0;
  background: #fff;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15), 0 0 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: absolute;
  flex-direction: column;
  left: ${rtl("auto", "100%")};
  right: ${rtl("100%", "auto")};
  top: -4px;
  margin: 0;
  list-style: none;
`;

const FirstMenuItemStyles = css`
  background-color: #333333 !important;
  color: #fff;

  > ${StyledMenuItemContent} {
    background: #333333;

    > a {
      color: #fff;
    }
  }

  > ${StyledDropMenu} {
    min-width: 235px;
  }
`;
