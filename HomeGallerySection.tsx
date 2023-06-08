import React, { useState } from "react";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Section } from "../../../shared/layout";
import type { HomeGallerySectionProps } from "../../types";
import { rtl } from "../../../shared/styles-utils";
import { ArrowRight } from "../../../assets/Icons";
import { FlexRow } from "../../../shared/globals";
import useIsMobile from "../../../shared/utils/useIsMobile";
import { DisplayAsEnum, SectionTypeEnum } from "../../../generated/graphql";
import SectionGenerator from "../components/HomeGallerySection/SectionGenerator";
import { StoreTemplate } from "../../TemplateLoader";
import { getColumnCount } from "../pages/helpers/HomeHelpers";

const HomeGallerySection: React.FC<HomeGallerySectionProps> = ({ section }) => {
  const Template = StoreTemplate.get();
  const { isMobile, isLoading } = useIsMobile();
  const [prevEl, setPrevEl] = useState<HTMLSpanElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLSpanElement | null>(null);
  const columnCount = getColumnCount(section);
  const slidesPerView = isMobile
    ? 1
    : section?.products?.length
    ? columnCount! <= 3
      ? 3
      : columnCount
    : columnCount;

  if (isLoading) return null;

  return (
    <StyledSection stretchToFullWidth={section?.stretchToFullWidth}>
      <Template.elements.SectionHeading section={section} />
      {section.displayAs === DisplayAsEnum.Slider ? (
        <SliderContainer spacing="m">
          <SlideButtons ref={(node) => setPrevEl(node)}>
            <ArrowRight />
          </SlideButtons>
          <Swiper
            direction="horizontal"
            slidesPerView={slidesPerView}
            spaceBetween={20}
            navigation={{ prevEl, nextEl }}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ dynamicBullets: true, clickable: true }}
            loop
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
          >
            {SectionGenerator(section, true)}
          </Swiper>

          <SlideButtons right ref={(node) => setNextEl(node)}>
            <ArrowRight />
          </SlideButtons>
        </SliderContainer>
      ) : (
        <Template.elements.GridGallerySection
          isProduct={section?.type === SectionTypeEnum.ProductsRow}
        >
          {SectionGenerator(section)}
        </Template.elements.GridGallerySection>
      )}
    </StyledSection>
  );
};

export default HomeGallerySection;

/**
 *
 * Styles
 *
 */

const StyledSection = styled(Section)<{ stretchToFullWidth?: boolean }>`
  max-width: ${({ stretchToFullWidth }) => stretchToFullWidth && "98vw"};
  padding: ${({ stretchToFullWidth }) => stretchToFullWidth && "unset"};
`;

const SliderContainer = styled(FlexRow)`
  padding: 0 5px;
  .swiper-pagination-bullets-dynamic {
    bottom: 0;
  }
`;

const SlideButtons = styled.span<{ right?: boolean }>`
  cursor: pointer;

  svg {
    transform: ${({ right }) =>
      right ? rtl("rotate(180deg)", "") : rtl("", "rotate(180deg)")};
    color: #5f738c;
    width: 30px;
    height: 30px;
  }
`;
