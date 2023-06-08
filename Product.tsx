import React from "react";
import { BreadcrumbHeader } from "../../../components/Breadcrumb";
import type { CustomProductInfoProps } from "../../types";
import { ProductType } from "../../../generated/graphql";
import { Section } from "../../../shared/layout";
import { ProductPageProps } from "../../types/ProductPageProps";
import { StoreTemplate } from "../../TemplateLoader";

const ProductPage: React.FC<ProductPageProps> = ({
  breadcrumbItems,
  product,
}) => {
  const Template = StoreTemplate.get();
  return (
    <>
      <BreadcrumbHeader breadcrumbs={breadcrumbItems} />
      <Section background="backgroundReverse">
        {product?.type === ProductType.Simple ? (
          <Template.elements.SimpleProduct product={product} />
        ) : (
          <Template.elements.CustomProduct
            product={product as CustomProductInfoProps["product"]}
          />
        )}
      </Section>
    </>
  );
};

export default ProductPage;
