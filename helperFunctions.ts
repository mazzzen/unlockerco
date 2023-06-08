import { Dictionary, groupBy } from "lodash";
import { IntlShape } from "react-intl";
import {
  AttributeProductsCount,
  AttributeValueSelector,
  CollectionProductsCount,
  OptionProductsCount,
  OptionValueSelector,
} from "../../generated/graphql";

export type FiltersDictionary = Dictionary<
  {
    propertyName: string;
    propertyId: string;
    valueName: string;
    valueId: string;
    count?: number;
  }[]
>;

interface GetAvailableFiltersProps {
  attributesProductsDistribution: AttributeProductsCount[] | null | undefined;
  collectionsProductsDistribution: CollectionProductsCount[] | null | undefined;
  optionsProductsDistribution: OptionProductsCount[] | null | undefined;
  intl: IntlShape;
}
export const getAvailableFilters = ({
  attributesProductsDistribution,
  collectionsProductsDistribution,
  optionsProductsDistribution,
  intl,
}: GetAvailableFiltersProps) => {
  const collectionsData = (collectionsProductsDistribution || [])
    ?.filter(
      (collection) =>
        !collection.collection?.isDeleted &&
        !collection.collection?.isArchived &&
        collection.collection?.isVisible
    )
    .map((collection) => ({
      propertyName: intl.formatMessage({
        defaultMessage: "Product Collections",
      }),
      propertyId: "c",
      valueName: collection?.collection?.title!,
      valueId: "c_" + collection?.collection?.id!,
      count: collection?.count!,
    }));

  const attributesData = (attributesProductsDistribution || [])?.map(
    (attribute) => ({
      propertyName: attribute?.attributeValue?.attribute?.name!,
      propertyId: attribute?.attributeValue?.attribute?.id!,
      valueName: attribute?.attributeValue?.name!,
      valueId: "a_" + attribute?.attributeValue?.id!,
      count: attribute?.count!,
    })
  );
  const optionsData = (optionsProductsDistribution || [])?.map((option) => ({
    propertyName: option?.optionValue?.option?.name!,
    propertyId: option?.optionValue?.option?.id!,
    valueName: option?.optionValue?.name!,
    valueId: "o_" + option?.optionValue?.id!,
    count: option?.count!,
  }));
  const availableFilters = [
    ...collectionsData,
    ...attributesData,
    ...optionsData,
  ];
  const filtersDictionary = groupBy(
    availableFilters,
    (item) => item?.propertyId!
  );
  return { filtersDictionary };
};

export const getFiltersSelectors = (selectedFilters: string[]) => {
  const collectionIds: string[] = [];
  const attributeValueSelectors: AttributeValueSelector[] = [];
  const optionValueSelectors: OptionValueSelector[] = [];

  (typeof selectedFilters === "string"
    ? [selectedFilters]
    : selectedFilters
  ).forEach((filter) => {
    if (filter.startsWith("c_")) {
      collectionIds.push(filter.split("_")[1]);
    } else if (filter.startsWith("a_")) {
      const attributeSelector = {
        attributeId: filter.split(":")[1],
        attributeValueId: filter.split(":")[0].split("_")[1],
      };
      attributeValueSelectors.push(attributeSelector);
    } else if (filter.startsWith("o_")) {
      const optionSelector = {
        optionId: filter.split(":")[1],
        optionValueId: filter.split(":")[0].split("_")[1],
      };
      optionValueSelectors.push(optionSelector);
    }
  });

  return { collectionIds, attributeValueSelectors, optionValueSelectors };
};
