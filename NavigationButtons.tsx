import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { LeftSmallArrow, RightSmallArrow } from "../../../../assets/Icons";
import { PrimaryButton } from "../../../../components/Button";
import { H4, FlexRow } from "../../../../shared/globals";
import { themeColor, rtl } from "../../../../shared/styles-utils";
import type { BuildState, BuildStateCategory } from "../../../types";

interface NavigationButtonsProps {
  buildState: BuildState;
  activeCategory: BuildStateCategory;
  handleNavigationButtons: (type: "next" | "previous") => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  buildState,
  activeCategory,
  handleNavigationButtons,
}) => {
  const categoryIndex = buildState?.findIndex(
    (cat) => cat?.id === activeCategory?.id
  );

  return (
    <GroupedButtons>
      <BackButtonHolder
        prefixIcon={<LeftSmallArrow />}
        reversed
        onClick={() => handleNavigationButtons("previous")}
        disabled={categoryIndex === 0}
      >
        <H4 fontWeight={600}>
          <FormattedMessage defaultMessage="BACK" />
        </H4>
      </BackButtonHolder>
      <NextButtonHolder
        suffixIcon={<RightSmallArrow />}
        reversed
        onClick={() => handleNavigationButtons("next")}
        disabled={categoryIndex === buildState?.length - 1}
      >
        <H4 fontWeight={600}>
          <FormattedMessage defaultMessage="NEXT" />
        </H4>
      </NextButtonHolder>
    </GroupedButtons>
  );
};

export default NavigationButtons;

/**
 *
 * Styles
 *
 */

const GroupedButtons = styled(FlexRow)`
  border: 1px solid #e5e9eb;
  border-radius: 6px;
  & > * > * {
    color: ${themeColor("primary")};
  }
`;

const BackButtonHolder = styled(PrimaryButton)`
  padding: 6px 10px;
  ${rtl("border-left", "border-right")}: 1px solid #e5e9eb;
  border-radius: 6px;
  ${rtl("border-top-left-radius", "border-top-right-radius")}: unset;
  ${rtl("border-bottom-left-radius", "border-bottom-right-radius")}: unset;
  cursor: pointer;

  & > div {
    padding: ${rtl("0 0 0 15px", "0 15px 0 0")};
  }

  & > div > svg {
    transform: ${rtl("rotateY(180deg)", "rotateY(0deg)")};
  }
`;

const NextButtonHolder = styled(PrimaryButton)`
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;

  & > div {
    padding: ${rtl("0 15px 0 0", "0 0 0 15px")};
  }

  & > div > svg {
    transform: ${rtl("rotateY(180deg)", "rotateY(0deg)")};
  }
`;
