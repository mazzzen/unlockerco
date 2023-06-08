import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { PhoneAHW, UserIconAHW } from "../../../assets/Icons";
import AccountButton from "../../../lib/Authentication/components/DesktopAccountButton";
import { useStore } from "../../../lib/storeData";
import { FlexRow, P } from "../../../shared/globals";
import { Section } from "../../../shared/layout";
import { rtl } from "../../../shared/styles-utils";

const InfoBar = () => {
  const { contactInfo } = useStore();

  return (
    <StyledInfoWrapper>
      <Section>
        <FlexRow justifyContent="space-between">
          <P size="14px" color="white">
            <FormattedMessage defaultMessage="SUN-THU 10AM to 6PM" />
          </P>
          <br />

          <FlexRow>
            <StyledContactUs>
              <FlexRow>
                <PhoneAHW />
                <a href={`tel:${contactInfo?.phone}`}>
                  <FormattedMessage defaultMessage="Contact us" />
                </a>
              </FlexRow>
            </StyledContactUs>
            <AccountButton color="white" icon={<UserIconAHW />} />
          </FlexRow>
        </FlexRow>
      </Section>
    </StyledInfoWrapper>
  );
};

export default InfoBar;

/**
 *
 * Styles
 *
 */

const StyledInfoWrapper = styled.div`
  background-color: #333;
  padding: 12px 0;
`;

const StyledContactUs = styled.div`
  ${rtl("border-left", "border-right")}: 2px solid #d8d8d8;
  padding: 0 14px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  svg {
    margin: 0 10px;
  }
`;
