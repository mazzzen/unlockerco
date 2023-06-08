import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { Heading } from "../../../components/UtilityComponents/Heading";
import HTMLRender from "../../../shared/globals/UiElements/HTMLRender";
import { Section } from "../../../shared/layout";
import { HomeContentSectionProps } from "../../types";
import { getLocaleInfo } from "../../../lib/i18n/locales-data";

const HomeContentSection: React.FC<HomeContentSectionProps> = ({ section }) => {
  const { locale } = useIntl();
  const activeLocale = getLocaleInfo(locale).code;
  const translations = section?.translations?.find(
    (translation) => translation.locale === activeLocale
  );

  return (
    <StyledSection stretchToFullWidth={section?.stretchToFullWidth}>
      {section?.showSectionHeader && (
        <Heading>{translations?.header || section?.header}</Heading>
      )}
      <HTMLRender html={translations?.content || section?.content} />
    </StyledSection>
  );
};

export default HomeContentSection;

const StyledSection = styled(Section)<{ stretchToFullWidth?: boolean }>`
  max-width: ${({ stretchToFullWidth }) => stretchToFullWidth && "98vw"};
  padding: ${({ stretchToFullWidth }) => stretchToFullWidth && "unset"};
`;
