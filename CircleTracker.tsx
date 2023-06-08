import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import ProgressCircle from "./ProgressCircle";
import { FlexCol } from "../../../shared/globals";
import { Stepper, StyledH2, StyledH4 } from "../styled";
import useCheckout from "../../../contexts/CartContext/useCheckout";
import { useRouter } from "../../../lib/i18n";
import { getStepsMessages } from "../../../contexts/CartContext/checkoutUtils";

const CircleTracker = () => {
  const intl = useIntl();
  const { route } = useRouter();
  const { checkout } = useCheckout();
  const steps = getStepsMessages(intl, route);
  const currentStep = checkout?.meta?.activeStepInfo?.number;

  return (
    <Stepper>
      <ProgressCircle value={currentStep} total={steps.length} />
      <FlexCol alignItems="flex-start">
        <StyledH2>{steps[currentStep - 1]}</StyledH2>
        {!!steps[currentStep] && (
          <StyledH4>
            <FormattedMessage defaultMessage="Next" />: {steps[currentStep]}
          </StyledH4>
        )}
      </FlexCol>
    </Stepper>
  );
};
export { CircleTracker };
