import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { BarTracker } from "../../../components/ProgressTracker/BarTracker";
import { TrialMessage } from "../../../components/UtilityComponents/TrialNotice";
import {
  HideOnMobile,
  Container,
  Header,
} from "../../../components/Checkout/styled";
import { StoreTemplate } from "../../TemplateLoader";
import MobileSubHeader from "../../../components/Checkout/MobileSubHeader";
import { LargeScreensCheckoutCart } from "../../../components/Checkout/CheckoutCart";
import useCheckout from "../../../contexts/CartContext/useCheckout";
import { FlexCol, FlexRow, H5 } from "../../../shared/globals";
import styled from "styled-components";
import { rtl } from "../../../shared/styles-utils";
import ClientComponent from "../../../shared/globals/UiElements/ClientComponent";
import { useRouter } from "../../../lib/i18n";
import { getStepsMessages } from "../../../contexts/CartContext/checkoutUtils";

const CheckoutLayout = (page: React.ReactNode) => {
  const intl = useIntl();
  const { route } = useRouter();
  const { checkout } = useCheckout();
  const currentStep = checkout?.meta?.activeStepInfo?.number;
  const Template = StoreTemplate.get();
  const isLastStep = currentStep === 5;
  const stepsMessages = getStepsMessages(intl, route);

  return (
    <ClientComponent>
      <Container>
        <Header>
          <Template.elements.Logo />

          <HideOnMobile>
            {!isLastStep && (
              <BarTracker steps={stepsMessages} currentStep={currentStep} />
            )}
          </HideOnMobile>
        </Header>
        <TrialMessage />
        <MobileSubHeader />
        <BodyContent>
          <BodyLayout>
            {page}
            <StyledH5>
              <FormattedMessage
                defaultMessage="© {year} All rights reserved — Powered by Wuilt"
                values={{
                  year: new Date().getFullYear(),
                }}
              />
            </StyledH5>
          </BodyLayout>
          <LargeScreensCheckoutCart />
        </BodyContent>
      </Container>
    </ClientComponent>
  );
};

export default CheckoutLayout;

/**
 * STYLES
 */

const BodyContent = styled(FlexRow)`
  align-items: flex-start;
  width: 100%;
  flex-grow: 1;
`;

const BodyLayout = styled(FlexCol)`
  background-color: ${({ theme }) => theme.bg.reverse};
  width: 100%;
  padding: 30px 20px;

  @media (min-width: 768px) {
    width: 56%;
    padding: ${rtl("40px 165px 40px 45px", "40px 45px 40px 165px")};
    min-height: 100vh;
  }
`;

const StyledH5 = styled(H5)`
  font-weight: bold;
  color: ${({ theme }) => theme.text.secondary};
  width: 100%;
  margin-top: 40px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.bg.wash}1a;
`;
