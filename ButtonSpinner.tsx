import styled, { css, keyframes } from "styled-components";
import { themeColor } from "../../shared/styles-utils";
import { ColorType } from "../../shared/styles-utils/themeColor";

// area = diameter + thickness * 2
const SIZES = {
  small: {
    area: "14px",
    diameter: "10px",
    thickness: "1px",
  },
  medium: {
    area: "26px",
    diameter: "22px",
    thickness: "2px",
  },
  large: {
    area: "40px",
    diameter: "34px",
    thickness: "3px",
  },
};

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const ButtonSpinnerWrapper = styled.span<{
  color: ColorType;
  size: string;
}>`
  display: inline-block;
  position: absolute;
  width: ${({ size }) => SIZES[size].area};
  height: ${({ size }) => SIZES[size].area};
  > span {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => SIZES[size].diameter};
    height: ${({ size }) => SIZES[size].diameter};
    margin: ${({ size }) => SIZES[size].thickness};
    border: ${({ size }) => SIZES[size].thickness} solid;
    border-radius: 50%;
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) =>
      css`
        ${themeColor(color)} transparent transparent transparent
      `};
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

interface ButtonSpinnerProps {
  color?: ColorType;
  size?: keyof typeof SIZES;
}

const ButtonSpinner = ({
  color = "white",
  size = "medium",
}: ButtonSpinnerProps) => {
  return (
    <ButtonSpinnerWrapper size={size} color={color}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </ButtonSpinnerWrapper>
  );
};

export default ButtonSpinner;
