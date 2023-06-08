import React from "react";
import {
  StepsHolder,
  StyledStepItem,
  StepBar,
  StepLabel,
  StepMarker,
} from "./styled";
import { Ok } from "../../assets/Icons";
import { CheckoutStepInfo } from "../../contexts/CartContext/types";

interface StepItemProps {
  active: boolean;
  done: boolean;
  step: string;
  stepNumber: number;
}

const StepItem = ({ active, done, step, stepNumber }: StepItemProps) => {
  return (
    <StyledStepItem>
      <StepBar done={done} />
      <StepMarker justifyContent="center" done={done} active={active}>
        {done ? <Ok /> : stepNumber}
      </StepMarker>
      <StepLabel active={active || done}>{step}</StepLabel>
    </StyledStepItem>
  );
};

interface TrackerProps {
  steps: CheckoutStepInfo["name"][];
  currentStep: number;
}

const BarTracker = ({ steps, currentStep }: TrackerProps) => {
  return (
    <StepsHolder>
      {steps.map((step, index) => {
        return (
          <StepItem
            active={currentStep === index + 1}
            done={currentStep > index + 1}
            step={step}
            stepNumber={index + 1}
            key={`step${index}`}
          />
        );
      })}
    </StepsHolder>
  );
};

export { BarTracker };
