import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { EmptyCartMob } from "../../../../../assets/Icons";
import { Link } from "../../../../../lib/i18n";
import { ImgContainer } from "../../../../../components/Cart/styled";
import { Price } from "../../../../../components/Price";
import { useStore } from "../../../../../lib/storeData";
import { FlexCol, FlexRow, H4 } from "../../../../../shared/globals";
import LoadingSpinner from "../../../../../shared/globals/UiElements/LoadingSpinner";
import { rtl, themeColor } from "../../../../../shared/styles-utils";
import { Photo } from "../../../../../shared/globals/UiElements/Photo";
import { ImageFragment } from "../../../../../generated/graphql";

interface SearchResultsProps {
  data:
    | {
        title: string;
        img: ImageFragment | null;
        price: number;
        handle: string;
        collectionHandle: string;
      }[]
    | null
    | undefined;
  loading?: boolean;
  closeModal?: () => void;
  ref?: React.MutableRefObject<HTMLDivElement | null>;
}

const SearchResults = React.forwardRef<HTMLDivElement, SearchResultsProps>(
  ({ data, loading, closeModal }, ref) => {
    const { currency: currencyCode } = useStore();

    return (
      <Container data-test="search-results-list" ref={ref}>
        {loading && <LoadingSpinner size="medium" />}
        {data?.length === 0 && (
          <ItemHolder>
            <FormattedMessage defaultMessage="No Results" />
          </ItemHolder>
        )}
        {data?.map((elem) => {
          return (
            <Link
              key={elem?.handle}
              href={`/product/${elem?.collectionHandle || "all"}/${
                elem.handle
              }`}
              fullWidth
            >
              <ItemHolder data-test="search-result-item" onClick={closeModal}>
                <ImgContainer width="40px" height="40px">
                  {!elem.img ? (
                    <EmptyCartMob />
                  ) : (
                    <Photo
                      image={elem.img}
                      objectFit="contain"
                      alt={elem.title}
                    />
                  )}
                </ImgContainer>
                <StyledFlexCol alignItems="flex-start">
                  <H4 fontWeight={600}>{elem.title}</H4>
                  <StyledPrice money={{ amount: elem.price, currencyCode }} />
                </StyledFlexCol>
              </ItemHolder>
            </Link>
          );
        })}
      </Container>
    );
  }
);
SearchResults.displayName = "SearchResults";
export default SearchResults;

const Container = styled(FlexCol)`
  width: 100%;
  position: absolute;
  top: 40px;
  background: ${themeColor("white")};
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%), 0 0 2px 0 rgb(0 0 0 / 20%);
  z-index: 99;
`;

const ItemHolder = styled(FlexRow)`
  width: inherit;
  padding: 12px;
  cursor: pointer;

  :first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  :last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  :not(:last-of-type) {
    border-bottom: solid 1px ${({ theme }) => theme.bg.wash}1a;
  }
  :hover,
  :focus {
    background: #e8edf1;
  }
`;

const StyledFlexCol = styled(FlexCol)`
  ${rtl("margin-right", "margin-left")}: 12px;
`;

const StyledPrice = styled(Price)`
  width: 100%;
  font-size: 12px;
  font-weight: normal;
`;
