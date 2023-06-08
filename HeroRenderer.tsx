import React, { useEffect, useState } from "react";
import { HeroSliderFragment } from "../generated/graphql";
import useIsMobile from "../shared/utils/useIsMobile";
import type { HeroProps } from "../templates/types";
import type { RendererComponent } from "./types";

interface HeroRendererProps extends RendererComponent<HeroProps> {}

const HeroRenderer: React.FC<HeroRendererProps> = ({
  Component,
  heroSettings,
}) => {
  const [activeSlide, setActiveSlide] = useState(heroSettings?.[0]);
  const { isLoading, isMobile } = useIsMobile();
  const hasOverlay =
    !!activeSlide?.headingText ||
    !!activeSlide?.subHeadingText ||
    !!activeSlide?.buttons?.[0] ||
    !!activeSlide?.buttons?.[1];
  useEffect(() => {
    function changeSlide() {
      const newIndex = getNextSlideIndex(activeSlide?.id!, heroSettings);
      setActiveSlide(heroSettings?.[newIndex]);
    }
    let interval;
    if (heroSettings?.length! > 1) {
      interval = setInterval(changeSlide, 4000);
    }
    // cleanUp
    return () => clearInterval(interval);
  }, [activeSlide, heroSettings]);

  const handleNavigationButtons = (type: "next" | "previous") => {
    const newIndex = getNextSlideIndex(activeSlide?.id!, heroSettings, type);
    setActiveSlide(heroSettings?.[newIndex]);
  };

  if (!activeSlide) return null;

  const isButton1Exist =
    !!activeSlide?.buttons?.[0]?.text &&
    !!activeSlide?.buttons?.[0]?.link?.type;
  const isButton2Exist =
    !!activeSlide?.buttons?.[1]?.text &&
    !!activeSlide?.buttons?.[1]?.link?.type;
  let image: string | undefined | null = "";

  const getImageUrl = () => {
    return isMobile
      ? activeSlide?.mobileImage?.src || activeSlide?.image?.src
      : activeSlide?.image?.src || activeSlide?.mobileImage?.src;
  };
  const hasDesktopAndMobileImages =
    !!activeSlide?.mobileImage?.src && !!activeSlide?.image?.src;
  if (!hasDesktopAndMobileImages) image = getImageUrl();
  else {
    if (!isLoading) image = getImageUrl();
  }

  return (
    <Component
      activeSlide={activeSlide}
      heroSettings={heroSettings}
      isButton1Exist={isButton1Exist}
      isButton2Exist={isButton2Exist}
      image={image!}
      handleNavigationButtons={handleNavigationButtons}
      setActiveSlide={setActiveSlide}
      hasOverlay={hasOverlay}
    />
  );
};

export default HeroRenderer;

/**
 *
 * Function
 *
 */

function getNextSlideIndex(
  activeSlideId: string,
  heroSettings: (HeroSliderFragment | null)[] | null | undefined,
  type: "next" | "previous" = "next"
): number {
  const activeHeroIndex = heroSettings?.findIndex(
    (hero) => hero?.id === activeSlideId
  );

  if (type === "previous") {
    return (
      (activeHeroIndex! + heroSettings?.length! - 1) % heroSettings?.length!
    );
  }

  return (activeHeroIndex! + 1) % heroSettings?.length!;
}
