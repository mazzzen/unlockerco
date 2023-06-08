import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { AvailableFilterChoices } from "./components/AvailableFilterChoices";
import { FilterByPrice } from "./components/FilterByPrice";
import { Overlay } from "../../shared/globals";
import {
  Filter as FilterIcon,
  Delete as Delete,
  LeftArrow,
} from "../../assets/Icons";
import { useRouter } from "next/router";
import { useEscapeAndStopScrollingEffect } from "../../hooks/useEscapeAndStopScrollingEffect";
import {
  CloseIconDesktop,
  CloseIconMobile,
  Container,
  FilterSection,
  FlipSvg,
  ScrollableSection,
  StyledFlexRow,
  StyledH3WithMargin,
} from "./styled";
import { FiltersSection } from "./components/FiltersSection";
import { ApplyFilterSection } from "./components/ApplyFilterSection";
import { LongTailRightArrow } from "../../assets/Icons/LongTailRightArrow";
import { useStore } from "../../lib/storeData";
import {
  AttributeProductsCount,
  CollectionProductsCount,
  OptionProductsCount,
  useSearchAndFiltersQuery,
} from "../../generated/graphql";
import { getAvailableFilters, getFiltersSelectors } from "./helperFunctions";

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SelectedFiltersProps {
  id: string | null | undefined;
  name: string | null | undefined;
}

export enum DefaultFilters {
  Price = "Price",
  Collections = "Product Collections",
}

const Filter = ({ isOpen, onClose }: FilterProps) => {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] =
    React.useState<SelectedFiltersProps>({
      id: "",
      name: "",
    });
  const { storeId } = useStore();
  const selectedFiltersIds =
    typeof router.query.filters === "string"
      ? [router.query.filters]
      : router.query.filters || [];

  const intl = useIntl();

  const { attributeValueSelectors, collectionIds, optionValueSelectors } =
    getFiltersSelectors(selectedFiltersIds || []);

  const { data, error, loading } = useSearchAndFiltersQuery({
    variables: {
      storeId,
      connectionSettings: {
        offset: 0,
      },
      filters: {
        search: router.query.query as string,
        collectionIds,
        attributeValueSelectors,
        optionValueSelectors,
        priceRange: {
          min: parseFloat(router.query.minPrice as string) || undefined,
          max: parseFloat(router.query.maxPrice as string) || undefined,
        },
      },
    },
  });

  useEscapeAndStopScrollingEffect({ isOpen, onClose });

  const { filtersDictionary } = getAvailableFilters({
    attributesProductsDistribution: data?.searchCatalog?.metaData
      ?.attributesProductsDistribution! as AttributeProductsCount[],
    collectionsProductsDistribution: data?.searchCatalog?.metaData
      ?.collectionsProductsDistribution! as CollectionProductsCount[],
    optionsProductsDistribution: data?.searchCatalog?.metaData
      ?.optionsProductsDistribution! as OptionProductsCount[],
    intl,
  });

  return (
    <>
      {isOpen && <Overlay onClick={onClose} />}
      <Container isOpen={isOpen}>
        <FilterSection>
          <StyledFlexRow>
            {selectedFilter.name === "" ? (
              <FilterIcon />
            ) : (
              <FlipSvg
                onClick={() =>
                  setSelectedFilter({
                    id: "",
                    name: "",
                  })
                }
              >
                <LongTailRightArrow />
              </FlipSvg>
            )}
            <StyledH3WithMargin>
              {selectedFilter.name === "" ? (
                <FormattedMessage defaultMessage="Filter" />
              ) : selectedFilter.name === DefaultFilters.Collections ? (
                <FormattedMessage defaultMessage="Product Collections" />
              ) : selectedFilter.name === DefaultFilters.Price ? (
                <FormattedMessage defaultMessage="Price" />
              ) : (
                selectedFilter.name
              )}
            </StyledH3WithMargin>
          </StyledFlexRow>
          <CloseIconDesktop onClick={onClose}>
            <Delete />
          </CloseIconDesktop>
          <CloseIconMobile onClick={onClose}>
            <LeftArrow />
          </CloseIconMobile>
        </FilterSection>
        {selectedFilter.name === "" && (
          <FiltersSection
            selectFilter={setSelectedFilter}
            availableFilters={filtersDictionary}
            loading={loading}
            selectedFiltersIds={selectedFiltersIds}
          />
        )}
        {selectedFilter.id && (
          <ScrollableSection>
            <AvailableFilterChoices
              availableFilters={filtersDictionary[selectedFilter.id]}
              loading={loading}
              error={error!}
              selectedFilterIds={selectedFiltersIds}
            />
          </ScrollableSection>
        )}
        {selectedFilter.name === "Price" && <FilterByPrice />}
        <ApplyFilterSection
          onClose={onClose}
          totalCount={data?.searchCatalog?.metaData?.totalCount || 0}
          loading={loading}
        />
      </Container>
    </>
  );
};

export default Filter;
