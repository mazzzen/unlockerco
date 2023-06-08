import React from "react";
import { Heading } from "../../../components/UtilityComponents/Heading";
import { StoreAboutFragment } from "../../../generated/graphql";
import HTMLRender from "../../../shared/globals/UiElements/HTMLRender";
import { Section } from "../../../shared/layout";

export interface HomeAboutProps {
  aboutSettings?: StoreAboutFragment | null;
}

const HomeAbout: React.FC<HomeAboutProps> = ({ aboutSettings }) => {
  if (!aboutSettings?.isActive) return null;

  return (
    <Section background="backgroundReverse" spaceAfter="20px">
      <Heading>{aboutSettings?.title}</Heading>
      <HTMLRender html={aboutSettings?.content} />
    </Section>
  );
};

export default HomeAbout;
