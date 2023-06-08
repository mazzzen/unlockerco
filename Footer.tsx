import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { SocialLinks } from "../../../components/UtilityComponents/SocialLinks";
import { ActiveFooter } from "../../../generated/graphql";
import { Link } from "../../../lib/i18n";
import { Span, FlexRow, FlexCol } from "../../../shared/globals";
import { Section } from "../../../shared/layout";
import { themeColor } from "../../../shared/styles-utils";
import { StoreTemplate } from "../../TemplateLoader";
import type { FooterProps, TemplateElement } from "../../types";

const Footer: TemplateElement<FooterProps> = ({
  footerData,
  date,
  legalPages,
  socialMedia,
}) => {
  const Template = StoreTemplate.get();
  return (
    <PaddingBottom>
      {footerData?.activeFooter === ActiveFooter.Custom ? (
        <div
          dangerouslySetInnerHTML={{
            __html: footerData?.customPart || "",
          }}
        />
      ) : (
        <div>
          <StyledContainer>
            <Section>
              <FlexCol spacing="xl">
                <SpanInfo>
                  <Template.elements.Logo />
                </SpanInfo>
                <Navigation>
                  <NavLink>
                    <Link href="/">
                      <FormattedMessage defaultMessage="HOME" />
                    </Link>
                  </NavLink>
                  <NavLink>
                    <Link href="/shop">
                      <FormattedMessage defaultMessage="SHOP" />
                    </Link>
                  </NavLink>
                  <NavLink>
                    <Link href="/contact-us">
                      <FormattedMessage defaultMessage="CONTACT" />
                    </Link>
                  </NavLink>
                  {legalPages?.map?.((page) => (
                    <NavLink key={page?.id}>
                      <Link href={`/page/${page?.handle}`}>{page?.title}</Link>
                    </NavLink>
                  ))}
                </Navigation>
                {socialMedia?.length ? (
                  <SocialLinks socialSettings={socialMedia} />
                ) : null}
              </FlexCol>
            </Section>
          </StyledContainer>

          <BottomFooter>
            <Section>
              <StyledFlexRow>
                {footerData?.startPart ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: footerData?.startPart,
                    }}
                  />
                ) : (
                  <TextBottom>
                    <FormattedMessage
                      defaultMessage="© {year} All rights reserved — Powered by Wuilt"
                      values={{
                        year: date,
                      }}
                    />
                  </TextBottom>
                )}
                <div
                  dangerouslySetInnerHTML={{
                    __html: footerData?.endPart || "",
                  }}
                />
              </StyledFlexRow>
            </Section>
          </BottomFooter>
        </div>
      )}
    </PaddingBottom>
  );
};

export default Footer;

/**
 *
 * Styles
 *
 */

const PaddingBottom = styled.div`
  @media (max-width: 768px) {
    padding-bottom: 88px;
  }
`;

const StyledContainer = styled.div`
  background-color: #fff;
  padding: 50px 0;
  box-shadow: rgb(238 238 238) 0px -1px 0px;
`;

const SpanInfo = styled(Span)`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > a {
    cursor: pointer;
  }
`;

const NavLink = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.default};
  padding: 0 20px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text.default};

    &:hover {
      color: ${themeColor("primary")};
    }
  }
  @media (max-width: 768px) {
    padding: 0 10px;
    height: 58px;
    background-color: ${themeColor("white")};
  }
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-inline-start: 0;
  width: 100%;
`;

const BottomFooter = styled.div`
  background-color: #fff;
  padding: 20px;
  border-top: 1px solid #eee;
`;

const TextBottom = styled(Span)`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.5;
  color: ${({ theme }) => theme.text.secondary};
`;

const StyledFlexRow = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
