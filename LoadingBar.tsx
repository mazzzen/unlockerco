import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { usePrevious } from "../../hooks/usePrevious";
import useRouteChange from "../../hooks/useRouteChange";
import { useStateWithTimeout } from "../../hooks/useStateWithTimeout";
import { rtl, themeColor } from "../../shared/styles-utils";

interface LoadingBarProps {}

const LoadingBar: React.FC<LoadingBarProps> = () => {
  const { isLoading: pageLoading } = useRouteChange();
  const [prevLoading, setPreviousLoading] = usePrevious(false);
  const [isLoading, setIsLoading, setIsLoadingWithTimeout] =
    useStateWithTimeout(false, 1000);
  const isCompleted = !!prevLoading && !pageLoading;

  useEffect(() => {
    setPreviousLoading(isLoading);
  }, [isLoading, setPreviousLoading]);

  useEffect(() => {
    if (pageLoading) {
      setIsLoading(true);
    } else {
      setIsLoadingWithTimeout(false);
    }
  }, [pageLoading, setIsLoading, setIsLoadingWithTimeout]);

  return (
    <StyledWrapper>
      <StyledBar isLoading={isLoading} isCompleted={isCompleted} />
    </StyledWrapper>
  );
};

export default LoadingBar;

/**
 * Styles
 */

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 4px;
  width: 100%;
  z-index: 702;
`;

const StyledBar = styled.div<{ isLoading: boolean; isCompleted: boolean }>`
  position: fixed;
  content: "";
  top: 0;
  left: 0;
  transform-origin: ${rtl("right", "left")};
  transform: scaleX(0);
  display: block;
  width: 100%;
  background: ${themeColor("primary")};
  height: 4px;

  ${({ isLoading, isCompleted }) =>
    isLoading &&
    !isCompleted &&
    css`
      transform: scaleX(0.7);
      transition: transform 10s;
    `}

  ${({ isLoading, isCompleted }) =>
    isLoading &&
    isCompleted &&
    css`
      transform: scaleX(0.99);
      transition: transform 1s;
    `}
`;
