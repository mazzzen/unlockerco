import React from "react";
import styled from "styled-components";
import { useAuth } from "../../lib/Authentication";
import { Card, FlexCol, FlexRow, H3, H5 } from "../../shared/globals";
import { rtl, themeColor } from "../../shared/styles-utils";
import { Link, useRouter } from "../../lib/i18n";
import { filterMePageItems, mePageItemsEnum } from "./consts";
import { useStore } from "../../lib/storeData";

interface ProfileLayoutProps {
  children?: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { areReviewsActivated } = useStore();

  return (
    <Container alignItems="flex-start">
      <NavigateList>
        <FlexCol alignItems="flex-start" style={{ marginBottom: 20 }}>
          <H3 fontWeight="bold">{user?.name}</H3>
          <StyledH5>{user?.email}</StyledH5>
        </FlexCol>
        <Card paddingSize="small">
          {filterMePageItems(areReviewsActivated).map((item) =>
            item.id !== mePageItemsEnum.LogOut ? (
              <Link key={item.id} href={`/me/${item.slug}/`}>
                <StyledItem
                  className={
                    router.route.includes(item.slug!) ? "active" : undefined
                  }
                >
                  {item.icon}
                  {item.title}
                </StyledItem>
              </Link>
            ) : (
              <StyledItem key={item.id} onClick={logout}>
                {item.icon}
                {item.title}
              </StyledItem>
            )
          )}
        </Card>
      </NavigateList>
      <Content>{children}</Content>
    </Container>
  );
};

export { ProfileLayout };

/**
 *
 * Styles
 *
 */

const Container = styled(FlexRow)`
  padding: 30px 0 100px;

  > div {
    ${rtl("margin-left", "margin-right")}: 30px;
    width: 100%;
    &:last-child {
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    > div {
      margin: 0;
    }
  }
`;

const NavigateList = styled.div`
  flex: 1;
`;

const Content = styled.div`
  flex: 3;
`;

const StyledItem = styled.div`
  padding: 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 6px;
  display: flex;
  svg {
    margin-inline-end: 5px;
  }
  &:hover {
    background-color: ${themeColor("primary")}20;
  }

  &.active {
    color: ${({ theme }) => theme.text.reverse};
    background-color: ${themeColor("primary")};

    svg > path {
      fill: ${({ theme }) => theme.text.reverse};
    }
  }
`;

const StyledH5 = styled(H5)`
  color: ${({ theme }) => theme.text.secondary};
`;
