import React from "react";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";
import { Link } from "../../i18n";
import {
  filterMePageItems,
  mePageItemsEnum,
} from "../../../components/CustomerProfile";
import { useStore } from "../../storeData";

const AccountButton = () => {
  const { isLoggedIn, logout } = useAuth();
  const { areReviewsActivated } = useStore();
  return (
    <>
      {isLoggedIn && (
        <StyledContainer>
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
        </StyledContainer>
      )}
    </>
  );
};

export default AccountButton;

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c4cdd5;
  padding: 23px 16px;
  font-weight: 600;
  font-size: 16px;
  svg {
    margin-inline-end: 5px;
  }
`;
