import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import { SwiperSlide } from "swiper/react";
import { SectionTypeEnum } from "../../../../generated/graphql";
import { FormattedDataType } from "../../../types";
import BannerCard from "./cards/BannerCard";
import AttributeValueCard from "./cards/AttributeValueCard";
import { StoreTemplate } from "../../../TemplateLoader";
import { getColumnCount } from "../../pages/helpers/HomeHelpers";

const SectionGenerator = (
  section: Partial<FormattedDataType>,
  isSliderSection?: boolean
) => {
  const Template = StoreTemplate.get();
  const columnCount = getColumnCount(section);

  if (section.type === SectionTypeEnum.Video) {
    const renderCard = (link: FormattedDataType["links"][0]) => (
      <Template.elements.SectionCardWrapper
        isSlider={isSliderSection}
        data-test="link-card"
        columnCount={columnCount}
        background={section?.background}
      >
        <ReactPlayer url={link} width="100%" height="350px" />
      </Template.elements.SectionCardWrapper>
    );

    return section?.links?.map((link, index) =>
      isSliderSection ? (
        <SwiperSlide
          key={index}
          style={{
            height: "auto",
          }}
        >
          {renderCard(link)}
        </SwiperSlide>
      ) : (
        <Fragment key={index}>{renderCard(link)}</Fragment>
      )
    );
  }

  if (section.type === SectionTypeEnum.CollectionsRow) {
    const renderCard = (collection: FormattedDataType["collections"][0]) => (
      <Template.elements.SectionCardWrapper
        isSlider={isSliderSection}
        isCollection
        data-test="collection-card"
        background={section?.background}
        columnCount={columnCount}
      >
        <Template.elements.CollectionCard
          collection={collection}
          hideTitle={!section?.showItemName}
        />
      </Template.elements.SectionCardWrapper>
    );

    return section?.collections?.map((collection) =>
      isSliderSection ? (
        <SwiperSlide
          key={collection?.id}
          style={{
            height: "auto",
          }}
        >
          {renderCard(collection)}
        </SwiperSlide>
      ) : (
        <Fragment key={collection?.id}>{renderCard(collection)}</Fragment>
      )
    );
  }

  if (section.type === SectionTypeEnum.Banner) {
    const renderCard = (banner: FormattedDataType["banners"][0]) => (
      <Template.elements.SectionCardWrapper
        isSlider={isSliderSection}
        data-test="banner-card"
        columnCount={columnCount}
        background={section?.background}
      >
        <BannerCard banner={banner} />
      </Template.elements.SectionCardWrapper>
    );

    return section?.banners?.map((banner) =>
      isSliderSection ? (
        <SwiperSlide
          key={banner?.id}
          style={{
            height: "auto",
          }}
        >
          {renderCard(banner)}
        </SwiperSlide>
      ) : (
        <Fragment key={banner?.id}>{renderCard(banner)}</Fragment>
      )
    );
  }

  if (section.type === SectionTypeEnum.AttributesRow) {
    const renderCard = (
      attributeValue: FormattedDataType["attributeValues"][0]
    ) => (
      <Template.elements.SectionCardWrapper
        isSlider={isSliderSection}
        data-test="attributeValue-card"
        columnCount={columnCount}
        background={section?.background}
      >
        <AttributeValueCard
          attributeValue={attributeValue}
          hideTitle={!section?.showItemName}
        />
      </Template.elements.SectionCardWrapper>
    );

    return section?.attributeValues?.map((attributeValue) =>
      isSliderSection ? (
        <SwiperSlide
          key={attributeValue?.id}
          style={{
            height: "auto",
          }}
        >
          {renderCard(attributeValue)}
        </SwiperSlide>
      ) : (
        <Fragment key={attributeValue?.id}>
          {renderCard(attributeValue)}
        </Fragment>
      )
    );
  }

  if (section.type === SectionTypeEnum.ProductsRow) {
    const renderCard = (product: FormattedDataType["products"][0]) => (
      <Template.elements.SectionCardWrapper
        isProduct
        data-test="product-card"
        columnCount={columnCount}
        background={section?.background}
        isSlider={isSliderSection}
      >
        <Template.elements.ProductCard
          product={product}
          onlyCardBody
          isSlider={isSliderSection}
        />
      </Template.elements.SectionCardWrapper>
    );

    return section?.products?.map((product) =>
      isSliderSection ? (
        <SwiperSlide
          key={product?.id}
          style={{
            height: "auto",
          }}
        >
          {renderCard(product)}
        </SwiperSlide>
      ) : (
        <Fragment key={product?.id}>{renderCard(product)}</Fragment>
      )
    );
  }

  return undefined;
};

export default SectionGenerator;
