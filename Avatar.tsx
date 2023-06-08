import React from "react";
import styled from "styled-components";

const InitialsSizes = {
  xsmall: "8px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xLarge: "20px",
  xxLarge: "24px",
  xxxLarge: "34px",
};

enum CircleSizes {
  xsmall = "20px",
  small = "32px",
  medium = "40px",
  large = "48px",
  xLarge = "64px",
  xxLarge = "80px",
  xxxLarge = "100px",
}
type SizeType = keyof typeof CircleSizes;

export interface AvatarProps {
  size?: SizeType;
  src?: string | null;
  fullName?: string;
}

const Avatar: React.FC<AvatarProps> = ({ size = "small", src, fullName }) => {
  const initials = getInitials(fullName || "");

  return (
    <StyledDiv size={size}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt="Not found"
          width={CircleSizes[size]}
          height={CircleSizes[size]}
        />
      ) : (
        <StyledInitials size={size}>{initials}</StyledInitials>
      )}
    </StyledDiv>
  );
};

export { Avatar };

/**
 *
 *
 * Helper functions
 *
 *
 */

const getInitials = (fullName: string) => {
  if (!fullName) {
    return null;
  }
  const nameArray = fullName.split(" ");

  return nameArray
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

/**
 *
 *
 * Styles
 *
 *
 */

const StyledDiv = styled.div<{ size: SizeType }>`
  width: ${({ size }) => CircleSizes[size]};
  min-width: ${({ size }) => CircleSizes[size]};
  height: ${({ size }) => CircleSizes[size]};
  min-height: ${({ size }) => CircleSizes[size]};

  border-radius: 100%;
  background-color: ${({ theme }) => theme.bg.gray};
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInitials = styled.span<{ size: SizeType }>`
  display: inline-block;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1;
  font-size: ${({ size }) => InitialsSizes[size]};
`;
