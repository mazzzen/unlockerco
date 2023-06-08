import { useStore } from "../lib/storeData";
import { useIntl } from "react-intl";
import Head from "next/head";
import { Spinner } from "../shared/globals";
import {
  SectionCollectionsRow,
  SectionTypeEnum,
  useStoreHomepageQuery,
} from "../generated/graphql";
import {
  getHomeCollectionListSchema,
  getMetaTags,
  getStoreSchema,
} from "../shared/SeoSchemas";
import type { ModifiedNextPage } from "../lib/types";
import { StoreTemplate } from "../templates/TemplateLoader";
import { useRouter } from "../lib/i18n";
import { useLocalStorage } from "../hooks/useStorage";
import React from "react";
import { StorePageSectionsType } from "../templates/types";

const Home: ModifiedNextPage = () => {
  const router = useRouter();
  const storeData = useStore();
  const Template = StoreTemplate.get();
  const {
    storeId,
    name: storeName,
    description,
    seo,
    favIcon,
    storeUrl,
    logo,
  } = storeData;
  const ref = router.query.ref as string;
  const intl = useIntl();
  const { data, error, loading } = useStoreHomepageQuery({
    variables: { storeId },
  });

  const [defaultState, updateStorage] = useLocalStorage<string>("ref", "");

  React.useEffect(() => {
    updateStorage(ref);
  }, []);

  if (loading) {
    return <Spinner size={64} />;
  }

  if (!data || error) {
    return null;
  }
  const homeCollections = data?.store?.StoreHomePageSections?.filter(
    (section) => section?.body?.type === SectionTypeEnum.CollectionsRow
  ).map((section) => ({
    collections: (section?.body as SectionCollectionsRow).collections,
  }));

  return (
    <>
      <Head>
        {getMetaTags({
          title: `${intl.formatMessage({
            defaultMessage: "Homepage",
          })} | ${storeName}`,
          description: seo?.description || description,
          pageUrl: `${storeUrl}`,
          faviconSrc: favIcon?.src,
          imageSrc: logo?.image?.src,
        })}
        {getStoreSchema(storeData, data?.storePaymentMethods)}
        {getHomeCollectionListSchema(
          homeCollections || [],
          storeData?.storeUrl
        )}
      </Head>

      <Template.pages.Home
        appearance={data?.store?.appearance}
        homepageSections={
          data?.store?.StoreHomePageSections as StorePageSectionsType
        }
        products={data?.store?.products?.nodes}
      />
    </>
  );
};

export default Home;
