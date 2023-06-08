import * as React from "react";
import styled from "styled-components";
import { Link } from "../../../lib/i18n";
import { useStore } from "../../../lib/storeData";
import { Photo } from "../../../shared/globals/UiElements/Photo";
import { themeColor } from "../../../shared/styles-utils";
import shrinkPhoto from "../../../shared/utils/shrinkPhoto";

interface LogoProps {}
const MAX_WIDTH = 120;
const MAX_HEIGHT = 120;

const Logo: React.FC<LogoProps> = () => {
  const { logo, name } = useStore();
  const { imageHeight, imageWidth } = shrinkPhoto({
    photo: logo?.image!,
    maxHeight: MAX_HEIGHT,
    maxWidth: MAX_WIDTH,
  });
  const content = logo?.image?.src ? (
    <LogoImageContainer width={imageWidth} height={imageHeight}>
      <Photo
        src={logo?.image?.src}
        alt={`${name} Logo`}
        objectFit="contain"
        objectPosition="center"
        priority
      />
    </LogoImageContainer>
  ) : (
    <span>{name}</span>
  );
  return (
    <Link href="/" passHref>
      <StyledSpan data-test="store-logo">{content}</StyledSpan>
    </Link>
  );
};

export default Logo;

/**
 *
 * Styles
 *
 */

const StyledSpan = styled.span`
  font-weight: 700;
  font-size: 22px;
  line-height: 1.6;
  text-decoration: none;
  color: ${themeColor("primary")};
`;

const LogoImageContainer = styled.div<{
  width?: number;
  height?: number;
}>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
