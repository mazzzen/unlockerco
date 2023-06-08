import Select from "react-select";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { NextRouter } from "next/router";
import { ProductSortByField, SortOrder } from "../../generated/graphql";
import { useRouter } from "../../lib/i18n";

const StyledSelect = styled(Select)`
  min-width: 180px;
  max-height: 40px;
  border-radius: 4px;
  background-color: #fafbfc;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
`;

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "solid 1px #dfe3e8",
    fontWeight: "500",
    cursour: "pointer",
    // backgroundColor: "transparent",
    // boxShadow: "none",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#252a31",
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "4px",
    boxShadow: "0 2px 4px 0 rgba(82, 82, 82, 0.2)",
    border: "solid 1px  #dfe3e8",
    backgroundColor: "#fafbfc",
    zIndex: 101,
  }),

  option: (provided: any) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.43",
    color: "#252a31",
    backgroundColor: "#fafbfc",
    cursor: "pointer",

    ":hover": {
      backgroundColor: "#dfe3e8",
    },
  }),

  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#252a31",
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

export const Sorting = () => {
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
    <StyledSelect
      instanceId="select-sorting"
      options={options}
      onChange={handleChange}
      styles={customStyles}
      defaultValue={options.find(
        (option) => option.key === `${sort.sortBy}-${sort.sortOrder}`
      )}
      isSearchable={false}
      placeholder={<FormattedMessage defaultMessage="Default Sorting" />}
      components={{ IndicatorSeparator: () => null }}
    />
  );
};
