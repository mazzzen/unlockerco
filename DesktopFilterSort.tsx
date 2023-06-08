import * as React from "react";
import styled from "styled-components";
import { Sorting } from "./Sorting";
import { PrimaryButton } from "../Button";
import { Filter as FilterIcon } from "../../assets/Icons";
import { FormattedMessage } from "react-intl";
import { Section } from "../../shared/layout";
import FilterTags from "./FilterTags";
import { useRouter } from "next/router";
import TempFilter from "../Filter/TempDynamicFilters/Filter";

const ItemsWrapper = styled.div`
  display: none;
  align-items: center;
  place-content: center;
  padding: 30px 0 0;
  justify-content: space-between;
  margin: auto;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RowWrapper = styled.div<{
  border?: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: ${({ border }) => (border ? ` 1px solid #d8d8d8;` : "unset")};
  @media (min-width: 768px) {
    justify-content: space-between;
    display: flex;
  }
`;

const FilterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// TODO: showing number of products
// const ProductCounter = styled(Span)`
//   font-size: 12px;
//   font-weight: bold;
//   line-height: 1.5;
//   color: #969696;
//   ${rtl("margin: 0 16px 0 0 ", "margin: 0 0 0 16px;")};
// `;

const DesktopFilterSort = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  return (
    <Section background="backgroundReverse">
      {/* TODO: FILTERS Revert them */}
      {/* <Filter isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
      <TempFilter isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div>
        <ItemsWrapper>
          <RowWrapper>
            <FilterBox>
              <PrimaryButton
                prefixIcon={<FilterIcon />}
                onClick={() => setIsOpen(true)}
              >
                <FormattedMessage defaultMessage="Filter" />
              </PrimaryButton>
              {/* <ProductCounter>Showing 6 products of 40</ProductCounter> */}
            </FilterBox>
            {router.query.query && (
              <>
                <FormattedMessage defaultMessage="Searched for " />{" "}
                {'"' + router.query.query + '"'}
              </>
            )}
            <Sorting />
          </RowWrapper>
          <RowWrapper>
            <FilterTags />
          </RowWrapper>
        </ItemsWrapper>
      </div>
    </Section>
  );
};

export default DesktopFilterSort;
