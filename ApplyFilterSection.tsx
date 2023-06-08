import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { PrimaryButton } from "../../Button";
import { StyledH3 } from "../styled";

interface ApplyFilterSectionProps {
  onClose: () => void;
  totalCount: number;
  loading: boolean;
}

const getItemsFound = (itemsCount: number) => (
  <FormattedMessage
    defaultMessage="{count, plural, =0 {no items} one {1 item} two {# items} few {# items} many {# items} other {# items}} found"
    values={{ count: itemsCount }}
  />
);

export const ApplyFilterSection = ({
  onClose,
  totalCount,
  loading,
}: ApplyFilterSectionProps) => {
  const router = useRouter();
  return (
    <ApplyFilterContainer>
      <TotalContainer>
        <StyledH3>
          <FormattedMessage defaultMessage="Items" />
        </StyledH3>
        {!loading && <SubTitle>{getItemsFound(totalCount)} </SubTitle>}
      </TotalContainer>
      <ButtonsContainer>
        <PrimaryButton
          style={{
            flexGrow: 1,
          }}
          onClick={onClose}
        >
          <FormattedMessage defaultMessage="Done" />
        </PrimaryButton>
        <ClearFiltersButton
          style={{
            flexGrow: 1,
          }}
          disabled={
            loading ||
            Object.keys(router.query).length === 0 ||
            router.pathname.includes("collection")
          }
          onClick={() => {
            if (!router.pathname.includes("collection")) {
              if (router.pathname.includes("search")) {
                router.push({
                  pathname: router.pathname.split("?")[0],
                  query: {
                    query: router.query.query ? router.query.query : undefined,
                  },
                });
              } else {
                router.push({
                  pathname: router.pathname.split("?")[0],
                });
              }
            }
          }}
        >
          <FormattedMessage defaultMessage="Clear all" />
        </ClearFiltersButton>
      </ButtonsContainer>
    </ApplyFilterContainer>
  );
};

const ApplyFilterContainer = styled.div`
  width: 100%;
  height: 180px;
  flex-shrink: 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  @media (min-width: 768px) {
    height: 130px;
  }
  flex-direction: column;
  padding: 20px;
`;
const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const SubTitle = styled.p`
  font-size: 12px;
  margin: 0;
`;
const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
  justify-content: stretch;
  align-items: stretch;
  margin-top: 20px;
  gap: 10px;
`;
const ClearFiltersButton = styled.button`
  height: 40px;
  background: #fafbfc;
  border: 1px solid #dfe3e8;
  border-radius: 4px;
  color: #5f738c;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
