import React from "react";
import styled from "styled-components";
import { FlexRow, H1, H2 } from "../../../shared/globals";
import { rtl, themeColor } from "../../../shared/styles-utils";
import { Section } from "../../../shared/layout";
import { PrimaryButton } from "../../../components/Button";
import { LeftSmallArrow, RightSmallArrow } from "../../../assets/Icons";
import { HeroBtnLink } from "../../default/components/HeroBtnLink";
import type { HeroProps } from "../../types";
import { Photo } from "../../../shared/globals/UiElements/Photo";

const Hero: React.FC<HeroProps> = ({
  heroSettings,
  activeSlide,
  isButton1Exist,
  isButton2Exist,
  image,
  handleNavigationButtons,
  setActiveSlide,
  hasOverlay,
}) => {
  return (
    <StyledSection>
      <HeroBox align={activeSlide?.align!}>
        {image && (
          <Photo
            src={image || ""}
            alt={activeSlide?.headingText!}
            objectFit="cover"
            priority
            absolute
          />
        )}
        <HeroContainer hasOverlay={hasOverlay!}>
          <Heading headingColor={activeSlide?.subHeadingColor!}>
            {activeSlide?.headingText}
          </Heading>
          <Text
            subHeadingColor={activeSlide?.subHeadingColor!}
            subHeadingSize={String(activeSlide?.subHeadingSize!)}
            align={activeSlide?.align!}
          >
            {activeSlide?.subHeadingText}
          </Text>
          <ButtonsWrapper align={activeSlide?.align!}>
            {!isButton1Exist ? null : (
              <HeroBtnLink {...activeSlide?.buttons?.[0]?.link}>
                <HeroBtn>{activeSlide?.buttons?.[0]?.text}</HeroBtn>
              </HeroBtnLink>
            )}
            {!isButton2Exist ? null : (
              <HeroBtnLink {...activeSlide?.buttons?.[1]?.link}>
                <SecondButton>{activeSlide?.buttons?.[1]?.text}</SecondButton>
              </HeroBtnLink>
            )}
          </ButtonsWrapper>
        </HeroContainer>
        {heroSettings?.length! > 1 && (
          <NavigationContainer>
            <FlexRow>
              {heroSettings?.map((hero, i) => {
                return (
                  <NavigationCircle
                    key={hero?.id}
                    className={hero?.id === activeSlide?.id ? "active" : ""}
                    onClick={() => setActiveSlide?.(heroSettings[i])}
                  />
                );
              })}
            </FlexRow>
            <FlexRow>
              <ButtonHolder
                prefixIcon={<LeftSmallArrow />}
                reversed
                onClick={() => handleNavigationButtons?.("previous")}
              />
              <ButtonHolder
                suffixIcon={<RightSmallArrow />}
                reversed
                onClick={() => handleNavigationButtons?.("next")}
              />
            </FlexRow>
          </NavigationContainer>
        )}
      </HeroBox>
    </StyledSection>
  );
};

export default Hero;

/**
 *
 * Styles
 *
 */

const StyledSection = styled(Section)`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const HeroBtn = styled(PrimaryButton)`
  border-radius: 4px;
  padding: 12px 32px;
  margin: 0 0 10px;
  background-color: ${themeColor("primary")};
  color: white;

  svg {
    ${rtl("transform: rotate(180deg)", "transform: rotate(0deg)")};
  }

  @media (min-width: 768px) {
    margin: 0 10px;
  }
`;
const AlignValues = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

const SecondButton = styled(PrimaryButton)`
  background-color: white;
  border: 1px solid ${themeColor("primary")};
  color: ${themeColor("primary")};
  padding: 12px 32px;
  div {
    padding: 0 16px;
  }
  svg {
    ${rtl("transform: rotate(180deg)", "transform: rotate(0deg)")}
  }
`;

const ButtonsWrapper = styled.div<{ align: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => AlignValues[align]};

  @media (min-width: 768px) {
    justify-content: ${({ align }) => AlignValues[align]};
    flex-direction: row;
  }
`;

const HeroBox = styled.section<{
  align: string;
}>`
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ align }) => AlignValues[align]};
  border-radius: 4px;
  min-height: 300px;
  aspect-ratio: 2/3;
  @media (min-width: 768px) {
    aspect-ratio: 16/9;
    width: calc(100% - 265px); // 235px sub-menu-width + 30px margin
  }
`;

const HeroContainer = styled.div<{ hasOverlay: boolean }>`
  z-index: 1;
  ${({ hasOverlay }) =>
    hasOverlay && "box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);"};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`;

const Heading = styled(H1)<{ headingColor: string }>`
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.headingColor};
  text-align: center;
  padding: 0 40px;

  @media (min-width: 768px) {
    font-size: 64px;
    padding: 0 10px;
  }
`;

const Text = styled(H2)<{
  subHeadingColor: string;
  subHeadingSize: string;
  align: string;
}>`
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.subHeadingColor};
  margin: 10px 0 30px;
  text-align: ${(props) => props.align};
  padding: 0 20px;

  @media (min-width: 768px) {
    font-size: ${(props) => props.subHeadingSize}px;
  }
`;

const NavigationContainer = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
  position: absolute;
  bottom: 20px;
  transform: ${rtl("rotateX(180deg)", "rotateX(0deg)")};
  z-index: 2;
`;

const NavigationCircle = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 30px;
  background-color: ${themeColor("white")};
  cursor: pointer;

  :not(:last-of-type) {
    ${rtl("margin-left", "margin-right")}: 6px;
  }

  &.active {
    background-color: ${themeColor("primary")};
    border: 1px solid ${themeColor("white")};
  }
`;

const ButtonHolder = styled(PrimaryButton)`
  padding: 12px 6px;
  border-radius: 30px;

  :first-of-type {
    ${rtl("margin-left", "margin-right")}: 10px;
  }

  > div {
    transform: ${rtl("rotateY(180deg)", "rotateY(0deg)")};
  }
`;
