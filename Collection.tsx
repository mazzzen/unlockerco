import { useRouter } from "next/router";
import React from "react";
import { FormattedMessage } from "react-intl";
import { EmptyCartIcon } from "../../../assets/Icons";
import { Pagination } from "../../../components/Pagination/Pagination";
import { EmptyState } from "../../../components/UtilityComponents/EmptyState";
import { FilterAndSort } from "../../../components/UtilityComponents/FilterAndSort";
import { PageSubHeader } from "../../../components/UtilityComponents/PageSubHeader";
import { Section } from "../../../shared/layout";
import { StoreTemplate } from "../../TemplateLoader";
import type { CollectionPageProps } from "../../types";

const Collection: React.FC<CollectionPageProps> = ({
  collection,
  itemsPerPage,
  offset,
}) => {
  const Template = StoreTemplate.get();
  const router = useRouter();
  router.query.filters = "c:" + collection?.id;
  return (
    <>
      <PageSubHeader>{collection?.title}</PageSubHeader>
      <FilterAndSort />
      <Section background="backgroundReverse">
        {!collection?.products?.nodes?.length ? (
          <EmptyState
            title={
              <FormattedMessage defaultMessage="There are no products added yet" />
            }
            image={<EmptyCartIcon />}
          />
        ) : (
          <Template.elements.ProductsList
            products={collection?.products?.nodes}
          />
        )}
        <Pagination
          offset={offset}
          itemPerPage={itemsPerPage}
          totalCount={collection?.products?.totalCount!}
        />
      </Section>
    </>
  );
};

export default Collection;
