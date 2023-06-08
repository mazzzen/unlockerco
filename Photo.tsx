import { ImageProps } from "next/image";
import { CSSProperties } from "react";
import styled from "styled-components";
import { ImageFragment } from "../../../generated/graphql";

enum Layout {
  "intrinsic",
  "responsive",
  "fill",
  "fixed",
}

export interface PhotoProps extends Omit<ImageProps, "src" | "alt"> {
  className?: string;
  image?: ImageFragment;
  src?: string;
  absolute?: boolean;
  objectFit?: CSSProperties["objectFit"];
  objectPosition?: "top" | "bottom" | "center" | "left" | "right";
  layout?: keyof typeof Layout;
  alt?: string;
  isSquare?: boolean;
}

export const Photo = ({ image, absolute, ...restProps }: PhotoProps) => {
  const imageSrc = image?.src || restProps.src;

  return (
    <StyledImg
      src={imageSrc}
      objectFit={restProps.objectFit!}
      objectPosition={restProps.objectPosition!}
      absolute={absolute}
      alt={restProps.alt}
    />
  );
};

const StyledImg = styled.img<{
  objectFit: string;
  objectPosition: any;
  absolute?: boolean;
}>`
  width: 100%;
  height: 100%;
  ${({ absolute }) =>
    absolute && "position: absolute;top: 0;left: 0;right: 0;bottom: 0;"}
  object-fit: ${({ objectFit }) => (objectFit ? objectFit : null)};
  ${({ objectPosition }) =>
    objectPosition && `object-position: : ${objectPosition}`};
`;
