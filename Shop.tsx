import { useRouter } from "next/router";
import React from "react";
import { FormattedMessage } from "react-intl";
import { EmptyCartIcon } from "../../../assets/Icons";
import { Pagination } from "../../../components/Pagination/Pagination";
import { EmptyState } from "../../../components/UtilityComponents/EmptyState";
import { Section } from "../../../shared/layout";
import { StoreTemplate } from "../../TemplateLoader";
import type { ShopPageProps } from "../../types";

const ShopPage: React.FC<ShopPageProps> = ({
  products,
  itemPerPage,
  productsTotalCount,
  offset,
}) => {
  const Template = StoreTemplate.get();
  const router = useRouter();
  return (
    <>
      <Section background="backgroundReverse">
        {products.length === 0 ? (
          <EmptyState
            title={
              router.query.filters ||
              router.query.minPrice ||
              router.query.maxPrice ? (
                <FormattedMessage defaultMessage="There are no products match your search criteria" />
              ) : (
                <FormattedMessage defaultMessage="There are no products added yet" />
              )
            }
            image={<EmptyCartIcon />}
          />
        ) : (
          <Template.elements.ProductsList products={products} />
        )}
        <Pagination
          offset={offset}
          itemPerPage={itemPerPage}
          totalCount={productsTotalCount}
        />
      </Section>
    </>
  );
};

export default ShopPage;
