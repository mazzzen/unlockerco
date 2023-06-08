import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { SelectedFiltersValues } from "../styled";

const SelectedPriceRange = () => {
  const router = useRouter();
  const minPrice = router.query.minPrice as string;
  const maxPrice = router.query.maxPrice as string;
  if (minPrice && maxPrice) {
    return (
      <SelectedFiltersValues>
        <FormattedMessage defaultMessage="From" /> {minPrice}{" "}
        <FormattedMessage defaultMessage="To" /> {maxPrice}
      </SelectedFiltersValues>
    );
  }
  if (minPrice) {
    return (
      <SelectedFiltersValues>
        Price {">"} {minPrice}
      </SelectedFiltersValues>
    );
  }
  if (maxPrice) {
    return (
      <>
        <SelectedFiltersValues>
          Price {"<"} {maxPrice}
        </SelectedFiltersValues>
      </>
    );
  }
  return null;
};

export default SelectedPriceRange;
