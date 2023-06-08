import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { PageSubHeader } from "../../../components/UtilityComponents/PageSubHeader";
import { Section } from "../../../shared/layout";
import type { StaticPageProps } from "../../types";
import { EmptyPageIllustration } from "../../../assets/Icons";
import { PrimaryButton } from "../../../components/Button";
import { EmptyState } from "../../../components/UtilityComponents/EmptyState";

const StaticPage: React.FC<StaticPageProps> = ({ pageData }) => {
  return pageData ? (
    <>
      <PageSubHeader>{pageData?.title}</PageSubHeader>
      <Section background="white">
        <StyledContent
          dangerouslySetInnerHTML={{
            __html: pageData?.htmlTemplate || "",
          }}
        />
      </Section>
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

export default StaticPage;

/**
 *
 * Styles
 *
 */

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 60px 0;

  p {
    color: ${({ theme }) => theme.text.default};
    font-weight: 400;
    line-height: 1.4;
  }
`;
