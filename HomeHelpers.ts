import {
  SectionTypeEnum,
  StorePageSection,
} from "../../../../generated/graphql";
import { StorePageSectionsType, FormattedDataType } from "../../../types";

type SharedItemType = Omit<StorePageSection, "id" | "body">;

export function formatSections(data: StorePageSectionsType) {
  const sharedInput = (item: SharedItemType): SharedItemType => ({
    storeId: item?.storeId,
    header: item?.header,
    displayAs: item?.displayAs,
    locale: item?.locale,
    showSectionHeader: item?.showSectionHeader,
    stretchToFullWidth: item?.stretchToFullWidth,
    itemsPerRow: item?.itemsPerRow ?? 1,
    translations: item?.translations,
    background: item?.background,
  });

  return data?.map((item) => {
    if (item?.body?.__typename === "SectionCollectionsRow") {
      return {
        ...sharedInput(item.body as SharedItemType),
        id: item?.id,
        type: item?.body?.type,
        showItemName: item?.body?.showItemName,
        // a filtering guard for some elements may be returned as null
        collections: item?.body?.collections?.filter(
          (collection) => !!collection
        ),
      };
    }
    if (item?.body?.__typename === "SectionProductsRow") {
      return {
        ...sharedInput(item.body as SharedItemType),
        id: item?.id,
        type: item?.body?.type,
        fromCollection: item?.body?.fromCollection,
        productsDisplayNumber: item?.body?.productsDisplayNumber,
        // a filtering guard for some elements may be returned as null
        products: item?.body?.products?.filter((product) => !!product),
      };
    }
    if (item?.body?.__typename === "SectionAttributesRow") {
      return {
        ...sharedInput(item.body as SharedItemType),
        id: item?.id,
        type: item?.body?.type,
        showItemName: item?.body?.showItemName,
        attributeValues: item?.body?.attributeValues,
      };
    }
    if (item?.body?.__typename === "SectionContent") {
      return {
        ...sharedInput(item as SharedItemType),
        id: item?.id,
        type:
          item?.body?.type === SectionTypeEnum.Text
            ? SectionTypeEnum.Text
            : SectionTypeEnum.Embed,
        content: item?.body?.content,
      };
    }
    if (item?.body?.__typename === "SectionVideos") {
      return {
        ...sharedInput(item as SharedItemType),
        id: item?.id,
        type: SectionTypeEnum.Video,
        links: item?.body?.videosUrls,
      };
    }
    if (item?.body?.__typename === "SectionBanners") {
      return {
        ...sharedInput(item as SharedItemType),
        id: item?.id,
        type: SectionTypeEnum.Banner,
        banners: item?.body?.banners,
      };
    }
    return undefined;
  }) as Partial<FormattedDataType>[];
}

export const getColumnCount = (section: Partial<FormattedDataType>) => {
  const itemsProvidedCount =
    section?.collections?.length ||
    section?.products?.length ||
    section?.attributeValues?.length ||
    section?.links?.length ||
    section?.banners?.length ||
    1;
  return Math.min(section?.itemsPerRow!, itemsProvidedCount);
};
