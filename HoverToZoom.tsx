import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Search } from "../../assets/Icons";
import useIsMobile from "../../shared/utils/useIsMobile";

interface HoverToZoomProps {
  src: string;
  zoomScale?: number;
  hideBadge?: boolean;
}

const HoverToZoom = ({ src, zoomScale = 2, hideBadge }: HoverToZoomProps) => {
  const [mouseX, setMouseX] = React.useState<null | number>();
  const [mouseY, setMouseY] = React.useState<null | number>();
  const [isHovered, setIsHovered] = React.useState(false);
  const zoomContainerRef = React.useRef<HTMLDivElement>(null);
  const { isMobile } = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.screenY - top) / height) * 100;

    setMouseX(x);
    setMouseY(y);
    setIsHovered(true);
  };
  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    const targetElement = touch.target;
    const { left, top, width, height } = (
      targetElement as Element
    ).getBoundingClientRect();

    const x = ((e.touches[0].clientX - left) / width) * 100;
    const y = ((e.touches[0].clientY - top) / height) * 100;

    setMouseX(x);
    setMouseY(y);
    setIsHovered(true);
  };
  const handleTouchStart = () => {
    zoomContainerRef?.current?.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleTouchMove(e);
      },
      {
        passive: false,
      }
    );
  };

  return (
    <HoverToZoomContainer
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      onTouchEnd={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      ref={zoomContainerRef}
    >
      <StyledHoverToZoom
        src={src}
        isHovered={isHovered}
        x={mouseX}
        y={mouseY}
        zoomScale={zoomScale}
      />
      {hideBadge || !isHovered ? (
        <HoverToZoomBadge>
          <Search />
          {isMobile ? (
            <FormattedMessage defaultMessage="Touch & hold to zoom" />
          ) : (
            <FormattedMessage defaultMessage="Hover to zoom" />
          )}
        </HoverToZoomBadge>
      ) : null}
    </HoverToZoomContainer>
  );
};

const HoverToZoomContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: zoom-in;
`;

const StyledHoverToZoom = styled.div<{
  src: string;
  isHovered: boolean;
  x: number | null | undefined;
  y: number | null | undefined;
  zoomScale: number;
}>`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform-origin: ${({ x, y }) => `${x ?? 0}% ${y ?? 0}%`};
  transition: transform 0.2s ease-out;
  transform: scale(
    ${({ isHovered, zoomScale }) => (isHovered ? zoomScale : 1)}
  );
`;

const HoverToZoomBadge = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 5px;
  background: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  color: #444;
  border: 1px solid #444;
  font-size: 14px;
  align-items: center;
  font-weight: 600;
  svg {
    width: 15px;
  }
  white-space: nowrap;
`;

export default HoverToZoom;
