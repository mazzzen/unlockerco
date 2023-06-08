import React from "react";
import { Rating } from "react-simple-star-rating";
import styled from "styled-components";
import { EmptyStar, FilledStar } from "../../../../../src/assets/Icons";
import { theme } from "../../../../shared/theme";

interface StyledStarsRatingProps {
  initialRatingValue?: number;
  size?: number;
  isReadonly?: boolean;
  isFractional?: boolean;
  fillColor?: string;
  onClick?: (rate: number) => void;
}

const StyledStarsRating = ({
  initialRatingValue = 0,
  size = 30,
  isReadonly = false,
  isFractional = false,
  fillColor = theme.colors.primary,
  onClick,
}: StyledStarsRatingProps) => {
  return (
    <StarsRow>
      <Rating
        onClick={onClick}
        allowFraction={isFractional}
        readonly={isReadonly}
        initialValue={initialRatingValue}
        fillIcon={<FilledStar fill={fillColor} size={size} />}
        emptyIcon={<EmptyStar size={size} />}
      />
    </StarsRow>
  );
};

const StarsRow = styled.div`
  svg {
    display: inline;
  }
`;

export default StyledStarsRating;
