import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import type { StorePageProps } from "../../types";
import { SectionTypeEnum } from "../../../generated/graphql";
import { EmptyPageIllustration } from "../../../assets/Icons";
import { EmptyState } from "../../../components/UtilityComponents/EmptyState";
import { StoreTemplate } from "../../TemplateLoader";
import { formatSections } from "./helpers/HomeHelpers";
import { PageSubHeader } from "../../../components/UtilityComponents/PageSubHeader";
import { getLocaleInfo } from "../../../lib/i18n/locales-data";
import { PrimaryButton } from "../../../components/Button";

const StorePage: React.FC<StorePageProps> = ({ pageData }) => {
  const Template = StoreTemplate.get();
  const formattedSections = formatSections(pageData?.sections);

  const { locale } = useIntl();
  const activeLocale = getLocaleInfo(locale).code;
  const translations = pageData?.translations?.find(
    (translation) => translation?.locale === activeLocale
  );

  return pageData ? (
    <>
      <PageSubHeader>{translations?.name || pageData?.name}</PageSubHeader>
      {formattedSections?.map((section) => {
        if (
          section?.type === SectionTypeEnum.Text ||
          section?.type === SectionTypeEnum.Embed
        ) {
          return (
            <Template.elements.HomeContentSection
              key={section.id}
              section={section}
            />
          );
        }

        return (
          <Template.elements.HomeGallerySection
            key={section.id}
            section={section}
          />
        );
      })}
    </>
  ) : (
    <EmptyState
      title={
        <FormattedMessage defaultMessage="The page you’re looking for is temporarily unavailable!" />
      }
      description={
        <FormattedMessage defaultMessage="The info you’re looking for cannot be found, try using the store navigation or go back to the shop homepage" />
      }
      image={<EmptyPageIllustration />}
      button={
        <PrimaryButton size="medium" href="/">
          <FormattedMessage defaultMessage="Return to homepage" />
        </PrimaryButton>
      }
    />
  );
};

export default StorePage;
