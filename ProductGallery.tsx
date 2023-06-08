import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductPlaceHolder, ArrowRight } from "../../../assets/Icons";
import { PrimaryButton } from "../../../components/Button";
import { Photo } from "../../../shared/globals/UiElements/Photo";
import { rtl, themeColor } from "../../../shared/styles-utils";
import type { ProductGalleryProps } from "../../types";
import HoverToZoom from "../../../components/HoverToZoom/HoverToZoom";

const ProductGallery = ({ images, selectedId }: ProductGalleryProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const index = images.findIndex((image) => {
      return image?.id === selectedId;
    });
    if (index !== -1) {
      setActiveImageIndex(index);
    }
  }, [images, selectedId]);

  const total = images.length;
  const hasNext = activeImageIndex < total - 1;
  const hasPrevious = activeImageIndex !== 0;

  const handleNext = () => {
    setActiveImageIndex(activeImageIndex + 1);
  };

  const handlePrevious = () => {
    setActiveImageIndex(activeImageIndex - 1);
  };
  return (
    <GalleryContainer>
      <ActiveImgContainer key={images[activeImageIndex]?.src}>
        {images[activeImageIndex] ? (
          <HoverToZoom src={images[activeImageIndex]?.src!} />
        ) : (
          <ProductPlaceHolder />
        )}
        {hasNext && (
          <ImagesButton suffixIcon={<ArrowRight />} onClick={handleNext} next />
        )}
        {hasPrevious && (
          <ImagesButton
            suffixIcon={<ArrowRight />}
            onClick={handlePrevious}
            next={false}
          />
        )}
      </ActiveImgContainer>
      <PassiveImgContainer>
        {images.map((thumb, index) => {
          if (!thumb) return null;
          return (
            <ThumbImgWrapper
              key={`gl-${index}`}
              onClick={() => setActiveImageIndex(index)}
              active={index === activeImageIndex}
            >
              <Photo
                image={thumb}
                alt={thumb?.altText! || ""}
                objectFit="contain"
              />
            </ThumbImgWrapper>
          );
        })}
      </PassiveImgContainer>
    </GalleryContainer>
  );
};

export default ProductGallery;

/**
 *
 * Styles
 *
 */

const GalleryContainer = styled.div`
  margin: 0 0 25px;
  display: flex;
  flex-direction: column;
  overflow-anchor: none;
  justify-content: start;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 512px;
  }
`;

const ActiveImgContainer = styled.div`
  position: relative;
  max-width: 520px;
  height: 520px;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  background: #fff;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
`;

const PassiveImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 -10px;
  @media (min-width: 768px) {
    width: 512px;
  }
`;

const ThumbImgWrapper = styled.div<{ active: boolean }>`
  width: 100%;
  position: relative;
  aspect-ratio: 1 / 1;
  border: 1px solid
    ${({ active, theme }) => (active ? theme.colors.primary : "#d6d6d6")};
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 5px 0 0;
  flex: 0 0 calc(25% - 5px);
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    flex: 0 0 calc(20% - 5px);
  }
`;

const ImagesButton = styled(PrimaryButton)<{ next: boolean }>`
  font-weight: 600;
  font-size: 12px;
  padding: 13px 15px;
  border-radius: 50%;
  background-color: #ffffff;
  color: ${themeColor("primary")};
  border: solid 1px #bac7d5;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: ${({ next }) => (next ? rtl("", "83%") : rtl("83%", ""))};
  right: ${({ next }) => (next ? rtl("83%", "") : rtl("", "83%"))};
  div {
    padding: 0;
    svg {
      ${({ next }) =>
        next
          ? rtl("transform: rotate(180deg)", "")
          : rtl("", "transform: rotate(180deg)")};
    }
  }
  &:hover {
    box-shadow: none;
  }
  @media (min-width: 768px) {
    left: ${({ next }) => (next ? rtl("", "90%") : rtl("90%", ""))};
    right: ${({ next }) => (next ? rtl("90%", "") : rtl("", "90%"))};
  }
`;
