import * as React from "react";
import styled from "styled-components";
import { NextRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import Select, { components } from "react-select";
import { rtl } from "../../shared/styles-utils";
import { P } from "../../shared/globals";
import { MobileSort, MobileFilter } from "../../assets/Icons";
import { PrimaryButton } from "../Button";
import { ProductSortByField, SortOrder } from "../../generated/graphql";
import { useRouter } from "../../lib/i18n";
import FilterTags from "./FilterTags";
import { RowWrapper } from "./DesktopFilterSort";
import TempFilter from "../Filter/TempDynamicFilters/Filter";

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <MobileSort />
      </components.DropdownIndicator>
    )
  );
};

const ItemsWrapper = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  place-content: center;
  background-color: ${({ theme }) => theme.bg.reverse};
  padding: 10px 0;
  justify-content: space-around;
  display: flex;
  padding: 15px 0;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
    justify-content: space-between;
    box-shadow: unset;
  }
`;

const MobileText = styled(P)`
  font-size: 16px;
  font-weight: bold;
  color: #9a9a9a;
  ${rtl("margin-right: 10px;", "margin-left: 10px;")}
`;

const SearchedFor = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */
  margin-top: 30px;

  letter-spacing: -0.1px;

  color: #465567;
`;

const FilterBtn = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.bg.reverse};
  color: #9a9a9a;
  border: none;

  &:hover {
    box-shadow: unset;
  }
  &:focus {
    outline: none;
  }
`;

const VerticalLineBreak = styled.span`
  position: absolute;
  display: inline-block;
  width: 1px;
  height: 10%;
  background-color: #d8d8d8;
`;

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "none",
    width: 100,
    backgroundColor: "transparent",
    boxShadow: "none",
  }),

  selectValueLabel: (provided: any) => ({
    ...provided,
    color: "#9A9A9A",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "#9A9A9A",
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    fontWeight: "bold",
    paddingLeft: 40,
    color: "#9A9A9A",
    position: "unset",
  }),

  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#9A9A9A",
    float: "left",
    position: "absolute",
    left: 10,
  }),

  menu: (provided: any) => ({
    ...provided,
    borderRadius: "4px",
    boxShadow: "0 2px 4px 0 rgba(82, 82, 82, 0.2)",
    border: "solid 1px #dfe3e8",
    backgroundColor: "#fafbfc",
    zIndex: 101,
  }),

  option: (provided: any) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.43",
    color: "#4f4335",
    backgroundColor: "#fafbfc",
    cursor: "pointer",
  }),
};

const options = [
  {
    key: `${ProductSortByField.Title}-${SortOrder.Asc}`,
    value: { sortBy: "title", sortOrder: SortOrder.Asc },
    label: <FormattedMessage defaultMessage="Name" />,
  },
  {
    key: `${ProductSortByField.Price}-${SortOrder.Asc}`,
    value: { sortBy: ProductSortByField.Price, sortOrder: SortOrder.Asc },
    label: <FormattedMessage defaultMessage="Price: low to high" />,
  },
  {
    key: `${ProductSortByField.Price}-${SortOrder.Desc}`,
    value: { sortBy: ProductSortByField.Price, sortOrder: SortOrder.Desc },
    label: <FormattedMessage defaultMessage="Price: high to low" />,
  },
];

function updateQuerySorts(
  router: NextRouter,
  newFilters: { sortBy: string; sortOrder: SortOrder.Asc | SortOrder.Desc }
) {
  router.push({
    pathname: router.asPath.split("?")[0],
    query: {
      ...router.query,
      ...newFilters,
    },
  });
}

const MobileFilterSort = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const handleChange = (selectedOption: {
    value: { sortBy: string; sortOrder: SortOrder.Asc | SortOrder.Desc };
  }) => {
    updateQuerySorts(router, {
      ...selectedOption.value,
    });
  };

  const sort = {
    sortBy: router.query.sortBy,
    sortOrder: router.query.sortOrder,
  };

  return (
    <>
      {/* TODO: FILTERS Revert them */}
      {/* <Filter isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
      <TempFilter isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <ItemsWrapper>
        <RowWrapper border>
          <FilterBtn onClick={() => setIsOpen(true)}>
            <MobileFilter />
            <MobileText>
              <FormattedMessage defaultMessage="Filter" />
            </MobileText>
          </FilterBtn>
          <VerticalLineBreak />
          <Select
            instanceId="sort-products"
            options={options}
            onChange={handleChange}
            styles={customStyles}
            defaultValue={options.find(
              (option) => option.key === `${sort.sortBy}-${sort.sortOrder}`
            )}
            isSearchable={false}
            placeholder={<FormattedMessage defaultMessage="Sort" />}
            components={{
              DropdownIndicator: DropdownIndicator,
              IndicatorSeparator: () => null,
            }}
          />
        </RowWrapper>
        {router.query.query && (
          <RowWrapper>
            <SearchedFor>
              <FormattedMessage defaultMessage="Searched for " />{" "}
              {'"' + router.query.query + '"'}
            </SearchedFor>
          </RowWrapper>
        )}

        <RowWrapper>
          <FilterTags />
        </RowWrapper>
      </ItemsWrapper>
      {/* TODO: aplayed filter text */}
      {/* <MobileCounter>
        <ProductCounter>Showing 6 products of 40</ProductCounter>
      </MobileCounter> */}
    </>
  );
};

export default MobileFilterSort;
