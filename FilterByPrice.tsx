import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { useStore } from "../../../lib/storeData";
import {
  Section,
  StyledDiv,
  StyledFlexRowPrice,
  StyledInput,
  StyledLabel,
  StyledPrefix,
} from "../styled";

export const FilterByPrice = () => {
  const { currency } = useStore();
  const router = useRouter();
  const [minValue, setMinValue] = React.useState(
    (router.query.minPrice as string) || ""
  );
  const [maxValue, setMaxValue] = React.useState(
    (router.query.maxPrice as string) || ""
  );
  useEffect(() => {
    setMinValue((router.query.minPrice as string) || "");
    setMaxValue((router.query.maxPrice as string) || "");
  }, [router.query.minPrice, router.query.maxPrice]);

  return (
    <Section>
      <StyledFlexRowPrice>
        <StyledLabel>
          <FormattedMessage defaultMessage="Min" />
          <StyledDiv>
            <StyledPrefix>{currency}</StyledPrefix>
            <StyledInput
              value={minValue}
              type="number"
              onChange={(e) => setMinValue(e.target.value)}
              min="0"
              placeholder="500"
              onBlur={() => {
                if (
                  (!router.query.minPrice && minValue === "") ||
                  parseFloat(minValue) >= parseFloat(maxValue)
                )
                  return;
                router.push(
                  {
                    pathname: router.asPath?.split("?")[0],
                    query: {
                      ...router.query,
                      page: 1,
                      minPrice: minValue,
                    },
                  },
                  undefined,
                  { scroll: false }
                );
              }}
            />
          </StyledDiv>
        </StyledLabel>

        <StyledLabel>
          <FormattedMessage defaultMessage="Max" />
          <StyledDiv>
            <StyledPrefix>{currency}</StyledPrefix>
            <StyledInput
              value={maxValue}
              type="number"
              onChange={(e) => setMaxValue(e.target.value)}
              placeholder="1000"
              onBlur={() => {
                if (
                  (!router.query.maxPrice && maxValue === "") ||
                  parseFloat(minValue) >= parseFloat(maxValue)
                )
                  return;
                router.push(
                  {
                    pathname: router.asPath?.split("?")[0],
                    query: {
                      ...router.query,
                      page: 1,
                      maxPrice: maxValue,
                    },
                  },
                  undefined,
                  { scroll: false }
                );
              }}
            />
          </StyledDiv>
        </StyledLabel>
      </StyledFlexRowPrice>
      {parseFloat(minValue) >= parseFloat(maxValue) && (
        <StyledErrorMessage>
          <FormattedMessage defaultMessage="Please make sure that min price is less than the max price" />
        </StyledErrorMessage>
      )}
    </Section>
  );
};

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
