import * as React from "react";
import { useIntl } from "react-intl";
import { useStore } from "../../../lib/storeData";
import { Spinner } from "../../../shared/globals";
import { Error } from "../../../components/Error";
import { useProductDetailsQuery } from "../../../generated/graphql";
import Head from "next/head";
import { AnalyticsActions } from "../../../lib/analytics-accounts/utils";
import {
  getProductSchema,
  getBreadcrumpSchema,
  getMetaTags,
} from "../../../shared/SeoSchemas";
import type { ModifiedNextPage } from "../../../lib/types";
import { StoreTemplate } from "../../../templates/TemplateLoader";
import { useRouter } from "../../../lib/i18n";
import { useAuth } from "../../../lib/Authentication";

const Product: ModifiedNextPage = () => {
  const Template = StoreTemplate.get();
  const { user } = useAuth();
  const {
    storeId,
    name: storeName,
    description,
    favIcon,
    storeUrl,
  } = useStore();
  const router = useRouter();
  const intl = useIntl();
  const { handle: slug, collection } = router.query;
  const { data, error, loading } = useProductDetailsQuery({
    variables: {
      storeId,
      slug: slug as string,
      collectionHandle: collection as string,
    },
    // fetchPolicy: "cache-and-network",
  });

  const pageUrl = `${storeUrl}/product/${collection}/${slug}`;

  React.useEffect(() => {
    if (data?.product) {
      AnalyticsActions.fireEvent({
        name: "View_Product",
        parameters: {
          event_category: "Shop",
          event_label: data.product?.title,
          content_category: data.collection?.title || undefined,
          content_type: "product_group",
          content_ids: [data.product?.id],
          content_name: data.product?.title,
          content_sku: data.product?.variants?.nodes?.[0]?.sku,
          content_imgSrc: data.product?.images?.[0]?.src,
          content_url: pageUrl,
          content_brand: storeName,
          content_price: data.product?.variants?.nodes?.[0]?.price?.amount,
          content_compareAtPrice:
            data.product?.variants?.nodes?.[0]?.compareAtPrice?.amount,
          content_currency:
            data.product?.variants?.nodes?.[0]?.price?.currencyCode,
          customerId: user?.id,
        },
      });
    }
  }, [data, pageUrl, storeName, user?.id]);

  if (error) {
    return <Error statusCode={404} />;
  }

  if (loading) {
    return <Spinner size={64} inline={false} />;
  }

  const product = data?.product;

  const breadcrumbItems = [
    {
      title: intl.formatMessage({
        defaultMessage: "Shop",
      }),
      link: "/shop",
    },
    data?.collection
      ? {
          title: data?.collection?.title!,
          link: `/product/${data.collection.handle}`,
        }
      : undefined,
  ].filter(Boolean);

  return (
    <>
      <Head>
        {getMetaTags({
          title: `${product?.seo?.title || product?.title} | ${storeName}`,
          description:
            product?.seo?.description ||
            product?.shortDescription?.substring(0, 160) ||
            description,
          pageUrl,
          faviconSrc: favIcon?.src,
          imageSrc: product?.images?.[0]?.src,
        })}
        {getProductSchema(data, pageUrl)}
        {getBreadcrumpSchema(
          breadcrumbItems?.map((item) => ({
            link: storeUrl + item?.link,
            title: item?.title!,
          }))
        )}
        <link rel="canonical" href={`${storeUrl}/product/all/${slug}`} />
      </Head>
      <Template.pages.Product
        breadcrumbItems={breadcrumbItems!}
        product={product}
      />
    </>
  );
};

export default Product;
