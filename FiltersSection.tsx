import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { LongTailRightArrow } from "../../../assets/Icons/LongTailRightArrow";
import { Spinner } from "../../../shared/globals";
import { rtl } from "../../../shared/styles-utils";
import { DefaultFilters } from "../Filter";
import { FiltersDictionary } from "../helperFunctions";
import SelectedFiltersChoices from "./SelectedFiltersChoices";
import SelectedPriceRange from "./SelectedPriceRange";

interface FiltersSectionProps {
  selectFilter: (selectedFilter: { name: string; id: string }) => void;
  loading: boolean;
  availableFilters: FiltersDictionary;
  selectedFiltersIds: string[];
}

export const FiltersSection = ({
  selectFilter,
  availableFilters,
  loading,
  selectedFiltersIds,
}: FiltersSectionProps) => {
  return (
    <FiltersContainer>
      {!loading ? (
        Object.keys(availableFilters || {}).map((key) => {
          return (
            <StyledFilterRow
              key={key}
              onClick={() =>
                selectFilter({
                  name: availableFilters![key][0].propertyName,
                  id: key,
                })
              }
            >
              {availableFilters![key][0]?.propertyName}
              <SelectedFilters>
                <SelectedFiltersChoices
                  filterId={key}
                  selectedFiltersIds={selectedFiltersIds}
                  availableFilters={availableFilters}
                />
                <LongTailRightArrow />
              </SelectedFilters>
            </StyledFilterRow>
          );
        })
      ) : (
        <Spinner />
      )}
      <StyledFilterRow
        onClick={() =>
          selectFilter({
            id: "",
            name: DefaultFilters.Price,
          })
        }
      >
        <FormattedMessage defaultMessage="Price" />
        <SelectedFilters>
          <SelectedPriceRange />
          <LongTailRightArrow />
        </SelectedFilters>
      </StyledFilterRow>
    </FiltersContainer>
  );
};

const StyledFilterRow = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  cursor: pointer;
  padding: 15px 0;
  :first-of-type {
    padding-top: 5px;
  }
  svg {
    ${rtl("transform: rotate(180deg)", "")}
  }
  gap: 10px;
  white-space: nowrap;
  font-weight: 500;
`;

const FiltersContainer = styled.div`
  width: 100%;
  height: calc(100% - 130px);
  overflow-y: auto;
  padding: 20px;
`;
const SelectedFilters = styled.div`
  display: flex;
  align-items: center;

  overflow: hidden;
  svg {
    flex-shrink: 0;
  }
`;
