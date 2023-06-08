import React from "react";
import styled, { css } from "styled-components";
import { useIntl } from "react-intl";
import { DebounceInput } from "react-debounce-input";
import SearchResults from "./SearchResults";
import { useStore } from "../../../../../lib/storeData";
import {
  ProductType,
  useSearchProductsLazyQuery,
} from "../../../../../generated/graphql";
import { useClickOutside } from "../../../../../hooks/useClickOutside";
import { Search } from "../../../../../assets/Icons";
import InputWithIcon from "../../../../../shared/globals/UiElements/InputWithIcon";
import { useRouter } from "next/router";
import { getLocaleInfo } from "../../../../../lib/i18n/locales-data";

interface SearchBarProps {
  mobile?: boolean;
}

const SearchBar = ({ mobile }: SearchBarProps) => {
  const intl = useIntl();
  const { id: storeId } = useStore();
  const [isOpenedResults, setIsOpenedResults] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const router = useRouter();
  const { locale } = useIntl();
  const activeLocale = getLocaleInfo(locale).code;

  const [queryProducts, { data, loading, refetch }] =
    useSearchProductsLazyQuery({
      variables: { filter: { storeIds: [storeId] }, connection: { first: 5 } },
      ssr: false,
    });

  const handleClickOutside = React.useCallback(() => {
    setIsOpenedResults(false);
  }, []);
  const { ref } = useClickOutside(handleClickOutside);

  const handleInputKeyEvents = (key: string) => {
    if (key === "Escape") {
      setIsOpenedResults(false);
    }
  };

  const handleInputFocus = () => {
    if (!data) queryProducts();
    setIsOpenedResults(true);
  };

  const handleSearch = (title: string) => {
    refetch({ filter: { storeIds: [storeId], title } });
    setIsOpenedResults(true);
  };

  const perResultData = data?.products?.nodes?.map((product) => {
    const simpleProductPrice =
      product.type === ProductType.Simple &&
      product?.variants?.nodes?.[0]?.price?.amount;
    const customProductPrice =
      product.type === ProductType.Custom && product?.initialPrice?.amount;

    return {
      title: product.title,
      img: product.images?.[0],
      price: simpleProductPrice || customProductPrice || 0,
      handle: product.handle,
      collectionHandle: product.collections?.nodes?.[0]?.handle || "",
    };
  });

  return (
    <StyledDiv ref={ref} mobile={!!mobile}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (searchValue.length <= 2) return;
          router.replace(`/${activeLocale}/search?query=${searchValue}`);
          setIsOpenedResults(false);
        }}
      >
        <DebounceInput
          // @ts-ignore
          element={InputWithIcon}
          data-test="type-search"
          debounceTimeout={500}
          width={mobile ? "auto" : "400px"}
          suffix={<Search width="13" />}
          onChange={(e) => {
            handleSearch(e?.target?.value?.trim());
            setSearchValue(e?.target?.value?.trim());
          }}
          onFocus={handleInputFocus}
          onKeyUp={(e: KeyboardEvent) => handleInputKeyEvents(e.key)}
          placeholder={intl.formatMessage({
            defaultMessage: "Search store",
          })}
        />
      </form>
      {isOpenedResults && (
        <SearchResults
          data={perResultData}
          loading={loading}
          closeModal={() => setIsOpenedResults(false)}
        />
      )}
    </StyledDiv>
  );
};

export default SearchBar;

const StyledDiv = styled.div<{ mobile: boolean }>`
  position: relative;
  display: ${({ mobile }) => (mobile ? "block" : "none")};

  ${({ mobile }) =>
    mobile &&
    css`
      margin: 12px 0;
      width: 100%;
    `};

  @media (min-width: 768px) {
    display: ${({ mobile }) => (mobile ? "none" : "block")};
  }
`;
