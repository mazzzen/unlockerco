import * as React from "react";
import styled from "styled-components";
import { MenuArrow } from "../../../../../assets/Icons";
import { rtl, themeColor } from "../../../../../shared/styles-utils";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import type { MenuItemProps, MenuProps, MenuWithChildrenType } from "./types";

function checkIsActive(activePath: string[], pageId: string): boolean {
  return pageId === null ? true : activePath.indexOf(pageId) !== -1;
}

const MobileMenu = ({ items }: { items: MenuWithChildrenType }) => {
  const [activePath, setActivePath] = React.useState<string[]>([]);

  const handleOpenSubMenu = React.useCallback<MenuProps["onOpenSubMenu"]>(
    (parentId, level) => {
      const newPath = [...activePath];
      newPath[level - 1] = parentId!;
      setActivePath(newPath);
    },
    [activePath]
  );

  const handleCloseSubMenu = React.useCallback<(level: number) => void>(
    (level) => {
      setActivePath(activePath.splice(0, level - 1));
    },
    [activePath]
  );

  return (
    <Menu
      parentId={null}
      activePath={activePath}
      onCloseSubMenu={handleCloseSubMenu}
      onOpenSubMenu={handleOpenSubMenu}
      menu={items}
      level={1}
    />
  );
};

const Menu = ({
  activePath,
  parentId,
  onOpenSubMenu,
  onCloseSubMenu,
  menu,
  level,
}: MenuProps) => {
  const isOpen = checkIsActive(activePath, parentId!);

  if (!menu) return null;

  return (
    <StyledMenu key={parentId! + level} level={level} isOpen={isOpen}>
      {menu.map((item) => (
        <MenuItem
          activePath={activePath}
          onOpenSubMenu={onOpenSubMenu}
          onCloseSubMenu={onCloseSubMenu}
          isActive={checkIsActive(activePath, item.id)}
          key={item.id}
          level={level}
          item={item}
        />
      ))}
    </StyledMenu>
  );
};

const MenuItem = ({
  item,
  isActive,
  level,
  activePath,
  onOpenSubMenu,
  onCloseSubMenu,
}: MenuItemProps) => {
  const handleOpenSubMenu = React.useCallback(() => {
    if (isActive) {
      if (onCloseSubMenu) onCloseSubMenu(level);
    } else {
      onOpenSubMenu(item.id, level);
    }
  }, [isActive, item.id, level, onCloseSubMenu, onOpenSubMenu]);

  return (
    <StyledMenuItem isActive={isActive} level={level}>
      <StyledMenuItemContent level={level} isActive={isActive}>
        {item.type === "Folder" ? (
          <div onClick={handleOpenSubMenu}>
            <NavigationLink {...item.link} type={item?.link?.type!}>
              <span dangerouslySetInnerHTML={{ __html: item.icon || "" }} />

              {item.title}
            </NavigationLink>
          </div>
        ) : (
          <NavigationLink {...item.link} type={item?.link?.type!}>
            <span dangerouslySetInnerHTML={{ __html: item.icon || "" }} />
            {item.title}
          </NavigationLink>
        )}
        {item?.children?.length !== 0 && (
          <IconWrapper isOpen={isActive} onClick={handleOpenSubMenu}>
            <MenuArrow />
          </IconWrapper>
        )}
      </StyledMenuItemContent>
      {item?.children?.length !== 0 && (
        <Menu
          parentId={item.id}
          activePath={activePath}
          menu={item.children!}
          level={level + 1}
          onCloseSubMenu={onCloseSubMenu}
          onOpenSubMenu={onOpenSubMenu}
        />
      )}
    </StyledMenuItem>
  );
};

export default MobileMenu;

/**
 *
 *
 * Styles
 *
 *
 */

const StyledMenuItemContent = styled.div<{
  isActive: boolean;
  level: number;
}>`
  display: flex;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? "#E8EDF1" : "#fff")};
  font-weight: ${({ level }) => 700 - level * 100};
  border-bottom: 1px solid #c4cdd5;
  padding: 23px 16px;
  & > a,
  & > a:active,
  & > a:hover,
  & > div {
    flex: 1;
    text-decoration: none;
    color: #000;
  }
`;

const StyledMenuItem = styled.li<{
  isActive: boolean;
  level: number;
}>`
  cursor: pointer;
  display: flex;
  color: ${({ theme }) => theme.text.default};
  flex-direction: column;
  font-size: ${({ level }) => 16 - (level - 1) * 2}px;
`;

const IconWrapper = styled.span<{ isOpen: boolean }>`
  color: ${({ isOpen }) => (isOpen ? themeColor("primary") : "#252A31")};
  padding: 10px 20px;
  ${rtl("border-right", "border-left")}: 1px solid #c4cdd5;
  svg {
    ${({ isOpen }) => (isOpen ? "transform: rotate(180deg);" : "")}
  }
`;

const StyledMenu = styled.ul<{ isOpen: boolean; level: number }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  width: 100%;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  ${({ theme: { isRTL }, level }) =>
    `${isRTL ? "padding-right" : "padding-left"}: ${(level - 1) * 14}px`}
`;
