import { FC } from "react";
import styled, { css } from "styled-components";
import { FormattedMessage, useIntl } from "react-intl";
import { RightArrow } from "../../../assets/Icons";
import { PrimaryButton } from "../../../components/Button";
import { Link } from "../../../lib/i18n";
import { H2 } from "../../../shared/globals";
import { themeColor } from "../../../shared/styles-utils";
import { SectionHeadingProps } from "../../types";
import { getLocaleInfo } from "../../../lib/i18n/locales-data";
import { SectionTypeEnum } from "../../../generated/graphql";
import { Heading } from "../../../components/UtilityComponents/Heading";

const SectionHeading: FC<SectionHeadingProps> = ({ section }) => {
  const { locale } = useIntl();
  const activeLocale = getLocaleInfo(locale).code;
  const translations = section?.translations?.find(
    (translation) => translation.locale === activeLocale
  );

  const linkTo =
    section?.fromCollection?.handle === "all"
      ? "/shop"
      : `/product/${section?.fromCollection?.handle}`;

  return section?.showSectionHeader ? (
    section?.type === SectionTypeEnum.ProductsRow ? (
      <StyledSectionHeading>
        <StyledHeading>{translations?.header || section?.header}</StyledHeading>
        <Link href={linkTo} passHref>
          <PrimaryButton
            reversed
            transparent
            suffixIcon={
              <StyledArrow>
                <RightArrow />
              </StyledArrow>
            }
          >
            <FormattedMessage defaultMessage="See all" />
          </PrimaryButton>
        </Link>
      </StyledSectionHeading>
    ) : (
      <Heading>{translations?.header || section?.header}</Heading>
    )
  ) : null;
};

export default SectionHeading;

/**
 *
 * Styles
 *
 */

const StyledSectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e9eb;
  margin: 50px 0 40px;
`;

const StyledHeading = styled(H2)`
  border-bottom: 1px solid ${themeColor("primary")};
`;

const StyledArrow = styled.div`
  svg {
    width: 10px;
  }

  ${({ theme }) =>
    theme.isRTL &&
    css`
      transform: rotate(180deg);
    `}
`;
