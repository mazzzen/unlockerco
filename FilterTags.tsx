import { FormattedMessage, useIntl } from "react-intl";
import styled from "styled-components";
import { ArrowRight, Delete as DeleteIcon } from "../../assets/Icons";
import { useRouter } from "../../lib/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { rtl } from "../../shared/styles-utils";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { useStore } from "../../lib/storeData";
import {
  FiltersDictionary,
  getAvailableFilters,
} from "../Filter/TempDynamicFilters/helperFunctions";
import {
  ProductAttributeValue,
  ProductCollection,
  useGetFiltersQuery,
  ProductOptionValue,
} from "../../generated/graphql";
import { getLocaleInfo } from "../../lib/i18n/locales-data";

const FilterTags = () => {
  const [filtersDictionary, setFiltersDictionary] =
    useState<FiltersDictionary>();
  const router = useRouter();
  const { storeId } = useStore();
  const intl = useIntl();
  const { locale } = useIntl();
  const selectedFiltersIds =
    typeof router.query.filters === "string"
      ? [router.query.filters]
      : router.query.filters || [];
  const activeLocale = getLocaleInfo(locale).code;

  const { data } = useGetFiltersQuery({
    variables: {
      storeId,
    },
  });

  useEffect(() => {
    if (data) {
      const { filtersDictionary: temp } = getAvailableFilters({
        attributesProductsDistribution: data?.getApplicableFilters
          ?.attributeValues! as ProductAttributeValue[],
        collectionsProductsDistribution: data?.getApplicableFilters
          ?.collections as ProductCollection[],
        optionsProductsDistribution: data?.getApplicableFilters
          ?.optionValues as ProductOptionValue[],
        intl,
      });
      setFiltersDictionary(temp);
    }
  }, [data, intl]);

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  if (
    !(router.query.filters || router.query.minPrice || router.query.maxPrice) ||
    router.route.includes("collection")
  ) {
    return null;
  }
  const removeFilter = (filter: string) => {
    const newFilters = { ...router.query };
    if (typeof newFilters.filters === "string") {
      newFilters.filters = [newFilters.filters];
    }

    if (filter === "minPrice" || filter === "maxPrice") {
      newFilters[filter] = undefined;
    } else {
      newFilters.filters = (newFilters.filters as string[])?.filter(
        (f: string) => f !== filter
      ) as string[];
    }
    if (
      !newFilters?.minPrice?.length &&
      !newFilters?.maxPrice?.length &&
      !newFilters?.filters?.length &&
      !router.query.query
    ) {
      router.push({ pathname: `/${activeLocale}/shop`, query: null });
      return;
    }
    router.push(
      {
        pathname: router.asPath?.split("?")[0],
        query: newFilters,
      },
      undefined,
      { scroll: false }
    );
  };

  const getSelectedFiltersNames = () => {
    const selectedFiltersNames: {
      filterName: string;
      filterValue: string;
    }[] = [];

    if (!filtersDictionary) return [];

    for (const [key, value] of Object.entries(filtersDictionary)) {
      value.forEach((filter) => {
        if (
          selectedFiltersIds.includes(filter.valueId) ||
          selectedFiltersIds?.includes(
            filter?.valueId! + "|" + filter?.propertyId!
          )
        )
          selectedFiltersNames.push({
            filterName: filter.valueName,
            filterValue: filter.valueId.startsWith("c:")
              ? filter.valueId
              : filter.valueId + "|" + filter.propertyId,
          });
      });
    }
    return selectedFiltersNames;
  };

  return (
    <TagsContainer>
      <SelectedFiltersLabel>
        <FormattedMessage defaultMessage="Selected Filters" />
      </SelectedFiltersLabel>
      <FilterTagsBarContainer>
        <SlideButtons ref={(node) => setPrevEl(node)}>
          <ArrowRight />
        </SlideButtons>
        <FilterTagsBar>
          <Swiper
            direction="horizontal"
            slidesPerView="auto"
            spaceBetween={10}
            navigation={{ prevEl, nextEl }}
            modules={[Navigation]}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {router.query.minPrice && (
              <SwiperSlide style={{ width: "auto" }}>
                <FilterTag>
                  <FormattedMessage defaultMessage="Min Price: " />{" "}
                  {router.query.minPrice}
                  <Div onClick={() => removeFilter("minPrice")}>
                    <DeleteIcon />
                  </Div>
                </FilterTag>
              </SwiperSlide>
            )}
            {router.query.maxPrice && (
              <SwiperSlide style={{ width: "auto" }}>
                <FilterTag>
                  <FormattedMessage defaultMessage="Max Price" />{" "}
                  {router.query.maxPrice}
                  <Div onClick={() => removeFilter("maxPrice")}>
                    <DeleteIcon />
                  </Div>
                </FilterTag>
              </SwiperSlide>
            )}
            {getSelectedFiltersNames().map((item) => (
              <SwiperSlide
                key={item.filterValue}
                style={{
                  width: "auto",
                }}
              >
                <FilterTag>
                  {item.filterName}
                  <Div onClick={() => removeFilter(item.filterValue)}>
                    <DeleteIcon />
                  </Div>
                </FilterTag>
              </SwiperSlide>
            ))}
          </Swiper>
        </FilterTagsBar>
        <SlideButtons right ref={(node) => setNextEl(node)}>
          <ArrowRight />
        </SlideButtons>
      </FilterTagsBarContainer>
    </TagsContainer>
  );
};
export default FilterTags;

const TagsContainer = styled.div`
  display: flex;
  margin: 30px 0 0 0;
  padding-left: 20px;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    height: auto;
    padding: 0;
    gap: 20px;
    flex-wrap: nowrap;
  }
`;

const SelectedFiltersLabel = styled.div`
  font-weight: 600;
  white-space: nowrap;
  flex: 1 0;
  padding-bottom: 20px;
  color: #1c1f23;
  @media (min-width: 768px) {
    display: flex;
    padding: 0;
  }
`;

const FilterTagsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  gap: 10px;
  overflow-x: hidden;
`;

const SlideButtons = styled.button<{ right?: boolean }>`
  display: none;
  background: #fafbfc;
  border: 1px solid #dfe3e8;
  border-radius: 4px;
  height: 100%;
  :disabled {
    visibility: hidden;
  }
  aspect-ratio: 1/1;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  @media (min-width: 768px) {
    display: flex;
  }
  svg {
    transform: ${({ right }) =>
      right ? rtl("rotate(180deg)", "") : rtl("", "rotate(180deg)")};
    color: #5f738c;
    width: 6px;
  }
`;

const FilterTagsBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const FilterTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafbfc;
  border: 1px solid #dfe3e8;
  border-radius: 4px;
  height: calc(100% - 2px);
  padding: 0 10px;
  color: #5f738c;
  font-size: 12px;
  font-weight: 600;
  flex-direction: ${() => rtl("row-reverse", "row")};
  svg {
    margin-left: 5px;
    color: #252a31;
    stroke: #252a31;
    width: 10px;
  }
`;

const Div = styled.div`
  cursor: pointer;
`;
