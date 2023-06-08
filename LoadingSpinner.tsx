import React from "react";
import styled from "styled-components";
import { Spinner } from "..";

const alignItems = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end",
};

const sizes = {
  small: 16,
  medium: 32,
  large: 64,
};

interface LoadingSpinnerProps {
  size?: keyof typeof sizes;
  position?: "top" | "center" | "bottom";
  minHeight?: React.CSSProperties["minHeight"];
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "large",
  position = "center",
  minHeight = "200px",
}) => {
  return (
    <StyledContainer position={position} minHeight={minHeight}>
      <Spinner size={sizes[size]} inline />
    </StyledContainer>
  );
};

export default LoadingSpinner;

const StyledContainer = styled.div<{ position; minHeight }>`
  display: flex;
  justify-content: center;
  align-items: ${({ position }) => alignItems[position]};
  min-height: ${({ minHeight }) => minHeight};
  width: 100%;
  height: 100%;
`;
