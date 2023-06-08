import React from "react";
import styled from "styled-components";
import { Photo } from "../../../../../shared/globals/UiElements/Photo";
import { Link } from "../../../../../lib/i18n";
import { FormattedDataType } from "../../../../types";
import useIsMobile from "../../../../../shared/utils/useIsMobile";
import { LinkType } from "../../../../../generated/graphql";

export interface BannerCardProps {
  banner: FormattedDataType["banners"][0];
}

const BannerCard: React.FC<BannerCardProps> = ({ banner }) => {
  const { isMobile } = useIsMobile();

  return (
    <Link
      fullHeight
      fullWidth
      href={
        banner?.bannerLink?.type === LinkType.Collection
          ? `/product/${banner?.bannerLink?.resource?.handle}`
          : banner?.bannerLink?.type === LinkType.Product
          ? `/product/all/${banner?.bannerLink?.resource?.handle}`
          : "/shop"
      }
      absoluteHref={
        banner?.bannerLink?.type === LinkType.ExternalLink
          ? banner?.bannerLink?.url!
          : ""
      }
    >
      <PhotoContainer>
        <Photo
          src={
            (isMobile ? banner?.mobileImage?.src : banner?.image?.src) ||
            "/default-placeholder-image.png"
          }
        />
      </PhotoContainer>
    </Link>
  );
};

export default BannerCard;

/**
 *
 * Styles
 *
 */

const PhotoContainer = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
`;
