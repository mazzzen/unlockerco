import { FiltersDictionary } from "../helperFunctions";
import { OverflowSelectedFilters, SelectedFiltersValues } from "../styled";

interface selectedFiltersChoicesProps {
  selectedFiltersIds: string[];
  availableFilters: FiltersDictionary;
  filterId: string;
}

const SelectedFiltersChoices = ({
  filterId,
  availableFilters,
  selectedFiltersIds,
}: selectedFiltersChoicesProps) => {
  const selectedFiltersValues: string[] = [];
  availableFilters[filterId].forEach((filter) => {
    if (
      selectedFiltersIds.includes(filter.valueId) ||
      selectedFiltersIds.includes(filter.valueId + "|" + filter.propertyId)
    )
      selectedFiltersValues.push(filter.valueName);
  });
  return (
    <>
      <SelectedFiltersValues>
        {selectedFiltersValues[0]}
        {selectedFiltersValues.length > 1 && <span>{", "}</span>}
        {selectedFiltersValues[1]}
      </SelectedFiltersValues>
      <OverflowSelectedFilters>
        {selectedFiltersValues.length > 2 && (
          <div>(+{selectedFiltersValues.length - 2})</div>
        )}
      </OverflowSelectedFilters>
    </>
  );
};
export default SelectedFiltersChoices;
