import React, { Dispatch, SetStateAction } from "react";
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";
import { Ok, RightSmallArrow } from "../../../assets/Icons";
import { FlexCol, FlexRow, H4, H5 } from "../../../shared/globals";
import { Photo } from "../../../shared/globals/UiElements/Photo";
import { rtl, themeColor } from "../../../shared/styles-utils";
import { StoreTemplate } from "../../TemplateLoader";
import type {
  BuildState,
  CustomProductInfoProps,
  TemplateElement,
} from "../../types";

export interface CategoriesSectionProps {
  buildState: BuildState;
  activeCategory: CustomProductInfoProps["product"]["categories"][0];
  setActiveCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
  setBuildState?: React.Dispatch<React.SetStateAction<BuildState>>;
  activeCategoryId?: string;
  productId?: string;
  exceededVariantId?: string;
  setExceededVariantId?: Dispatch<SetStateAction<string>>;
}

const CategoriesSection: TemplateElement<CategoriesSectionProps> = ({
  buildState,
  activeCategory,
  setActiveCategoryId,
  setBuildState,
  activeCategoryId,
  productId,
  exceededVariantId,
  setExceededVariantId,
}) => {
  const Template = StoreTemplate.get();
  return (
    <Container>
      {buildState.map((category) => (
        <React.Fragment key={category.id}>
          <Category
            alignItems="flex-start"
            className={activeCategory === category ? "active" : ""}
            completed={category.isCompleted}
            onClick={() =>
              activeCategoryId === category.id
                ? setActiveCategoryId(null)
                : setActiveCategoryId(category.id)
            }
          >
            {category.image?.src && (
              <CategoryImgContainer>
                <Photo
                  src={category.image?.src || ""}
                  objectPosition="center"
                  alt={category.name}
                />
              </CategoryImgContainer>
            )}
            <CategoryInfo alignItems="flex-start">
              {category.isRequired && (
                <RequiredTag>
                  <FormattedMessage defaultMessage="REQUIRED" />
                </RequiredTag>
              )}
              <CategoryTitle>{category.name}</CategoryTitle>
              {category.isCompleted ? (
                category.variants
                  .filter((variant) => variant.variant.isSelected)
                  .map((variant) => (
                    <H5
                      key={variant.variant.id}
                      fontWeight={400}
                      style={{ color: "#166534" }}
                    >
                      - {variant.variant.product.title}
                    </H5>
                  ))
              ) : (
                <H5 fontWeight={400} style={{ opacity: 0.5 }}>
                  <FormattedMessage defaultMessage="Choose component..." />
                </H5>
              )}
            </CategoryInfo>
            <ActiveIndicator>
              <CircleContainer
                justifyContent="center"
                active={category.isCompleted}
              >
                {category.isCompleted && <Ok width="10" />}
              </CircleContainer>
              <RightSmallArrow
                className={activeCategoryId === category.id ? "active" : ""}
              />
            </ActiveIndicator>
          </Category>
          {activeCategoryId === category.id && (
            <VariantsSectionForMob>
              <Template.elements.VariantsSection
                buildState={buildState}
                setBuildState={setBuildState!}
                activeCategoryId={activeCategoryId}
                exceededVariantId={exceededVariantId}
                setExceededVariantId={setExceededVariantId}
                setActiveCategoryId={setActiveCategoryId}
                activeCategory={activeCategory}
                productId={productId!}
              />
            </VariantsSectionForMob>
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default CategoriesSection;

/**
 *
 *
 * Styles
 *
 *
 */

const radius = {
  topLeft: "border-top-left-radius",
  topRight: "border-top-right-radius",
  bottomLeft: "border-bottom-left-radius",
  bottomRight: "border-bottom-right-radius",
} as const;

const Container = styled(FlexCol)`
  display: block;
  width: 100%;
  border: 0px;
  overflow-x: visible;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    width: 30%;
    border-radius: 0px;
    ${rtl("border-left", "border-right")}: 1px solid #e5e9eb;
    ${rtl(`${radius.topRight}`, `${radius.topLeft}`)}: 6px;
    ${rtl(`${radius.bottomRight}`, `${radius.bottomLeft}`)}: 6px;
  }
`;

const RequiredTag = styled.span`
  padding: 6px;
  margin-bottom: 4px;
  background-color: #bbf7d0;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  color: #166534;
`;

const CircleContainer = styled(FlexRow)<{ active?: boolean }>`
  width: 18px;
  height: 18px;
  border: 1.5px solid #d4d4d4;
  border-radius: 30px;
  ${rtl("margin-left", "margin-right")}: 10px;
  color: ${themeColor("white")};

  ${({ active }) =>
    active &&
    css`
      background-color: #15803d;
    `};
`;

const Category = styled(FlexRow)<{
  completed?: boolean;
}>`
  width: 100%;
  min-height: 48px;
  padding: 10px;
  cursor: pointer;
  position: relative;

  ${({ completed }) =>
    completed &&
    css`
      background-color: #f0fdf4;
    `};

  &.active {
    background-color: ${themeColor("primary")};

    > * {
      > ${RequiredTag} {
        background-color: #ffffff66;
      }

      > * {
        color: ${themeColor("white")} !important;
      }

      > ${CircleContainer} {
        background-color: ${themeColor("white")};

        > svg {
          color: #166534;
        }
      }
    }
  }

  :first-child {
    ${rtl(`${radius.topRight}`, `${radius.topLeft}`)}: 3px;
    ${rtl(`${radius.topLeft}`, `${radius.topRight}`)}: 3px;
  }

  :last-child {
    ${rtl(`${radius.bottomRight}`, `${radius.bottomLeft}`)}: 3px;
    ${rtl(`${radius.bottomLeft}`, `${radius.bottomRight}`)}: 3px;
  }

  :not(:last-child) {
    border-bottom: 1px solid #e5e9eb;
  }

  @media (min-width: 768px) {
    border-bottom: 1px solid #e5e9eb;

    &.active {
      width: calc(100% + 4px);
      ${rtl(`${radius.topLeft}`, `${radius.topRight}`)}: 6px !important;
      ${rtl(`${radius.bottomLeft}`, `${radius.bottomRight}`)}: 6px !important;
    }

    :first-child {
      ${rtl(`${radius.topRight}`, `${radius.topLeft}`)}: 3px;
      ${rtl(`${radius.topLeft}`, `${radius.topRight}`)}: 0px;
    }

    :last-child {
      ${rtl(`${radius.bottomRight}`, `${radius.bottomLeft}`)}: 3px;
      ${rtl(`${radius.bottomLeft}`, `${radius.bottomRight}`)}: 0px;
    }
  }
`;

const CategoryImgContainer = styled.div`
  width: 24px;
  min-width: 24px;
  aspect-ratio: 1 / 1;
  position: relative;
`;

const ActiveIndicator = styled(FlexRow)`
  position: absolute;
  ${rtl("left", "right")}: 10px;

  > svg {
    color: #d4d4d4;
    transform: rotate3d(0, 0, 1, 90deg);

    &.active {
      transform: rotate3d(0, 0, 1, 270deg);
    }
  }

  @media (min-width: 768px) {
    > svg {
      transform: ${rtl("rotateY(180deg)", "rotateY(0deg)")};
    }
  }
`;

const CategoryInfo = styled(FlexCol)`
  ${rtl("margin-right", "margin-left")}: 10px;
`;

const CategoryTitle = styled(H4)`
  margin-bottom: 4px;

  @media (min-width: 768px) {
    max-width: 145px;
  }
`;

const VariantsSectionForMob = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
