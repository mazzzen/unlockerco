import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import {
  GridLayoutAdd,
  ShoppingCart,
  EmptyCartMob,
} from "../../../../assets/Icons";
import { useStore } from "../../../../lib/storeData";
import { FlexCol, FlexRow, H1, H4, H5, H6 } from "../../../../shared/globals";
import { rtl, themeColor } from "../../../../shared/styles-utils";
import { PrimaryButton } from "../../../../components/Button";
import { PriceBase } from "../../../../components/Price/Price";
import type { CartBuildData } from "../../../types";
import { Link } from "../../../../lib/i18n";
import Modal from "../../../../shared/globals/UiElements/Modal";
import { DiscountPrice } from "../../../../components/Price";
import { Badge } from "../../../../components/Badge/Badge";
import { CustomProductDiscount } from "../../../../generated/graphql";
import { Photo } from "../../../../shared/globals/UiElements/Photo";

interface SummaryPanelProps {
  buildState: CartBuildData | null;
  isOpen: boolean;
  hideButtons?: boolean;
  productDiscount?: CustomProductDiscount | null;
  isDiscount?: boolean;
  onClose: () => void;
  onAddToCart?: () => void;
}

const SummaryPanel = ({
  buildState,
  isOpen,
  hideButtons,
  productDiscount,
  isDiscount,
  onClose,
  onAddToCart,
}: SummaryPanelProps) => {
  const { currency: currencyCode } = useStore();

  if (!buildState) {
    return null;
  }

  const CustomizationButton = buildState.buildId ? (
    <Link
      href={`/product/all/${buildState.handle}`}
      query={{ buildId: buildState.buildId }}
    >
      <ContinueCustomization
        reversed
        fullWidth
        prefixIcon={<GridLayoutAdd />}
        style={{ marginBottom: 0 }}
        onClick={onClose}
      >
        <FormattedMessage defaultMessage="Change Selections" />
      </ContinueCustomization>
    </Link>
  ) : (
    <ContinueCustomization
      reversed
      fullWidth
      prefixIcon={<GridLayoutAdd />}
      onClick={onClose}
    >
      <FormattedMessage defaultMessage="Continue Customization" />
    </ContinueCustomization>
  );

  const isProductHasImg = Boolean(buildState.imageSrc);

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Body>
        <Content alignItems="flex-start">
          <InfoSection
            alignItems="flex-start"
            isProductHasImg={isProductHasImg}
          >
            <FlexRow alignItems="flex-start">
              {isProductHasImg && (
                <CollectionImageContainer>
                  <Photo src={buildState?.imageSrc!} alt={buildState.title} />
                </CollectionImageContainer>
              )}
              <FlexCol alignItems="flex-start" spacing="xl">
                <FlexCol alignItems="flex-start">
                  <H1 fontWeight={500} style={{ marginBottom: 5 }}>
                    {buildState.title}
                  </H1>
                  {/* <span
                  dangerouslySetInnerHTML={{ __html: product?.descriptionHtml }}
                /> */}
                </FlexCol>
                <FlexCol alignItems="flex-start">
                  {isDiscount && <Badge discount={productDiscount} />}
                  <SummaryPriceText>
                    <FormattedMessage defaultMessage="Price including Taxes" />
                  </SummaryPriceText>
                  <H1 fontWeight={500}>
                    <PriceWrapper>
                      <PriceBase
                        money={{
                          amount: buildState.subtotal,
                          currencyCode,
                        }}
                      />
                      {isDiscount && (
                        <DiscountPrice
                          fontSize="16px"
                          style={{ paddingBottom: 0 }}
                          money={{
                            amount: buildState.subtotalBeforeDiscount!,
                            currencyCode,
                          }}
                        />
                      )}
                    </PriceWrapper>
                  </H1>
                </FlexCol>
                {!hideButtons && (
                  <DesktopButtons>
                    {CustomizationButton}
                    {onAddToCart && (
                      <PrimaryButton
                        fullWidth
                        prefixIcon={<ShoppingCart />}
                        onClick={onAddToCart}
                      >
                        <FormattedMessage defaultMessage="Add to Cart" />
                      </PrimaryButton>
                    )}
                  </DesktopButtons>
                )}
              </FlexCol>
            </FlexRow>
            {!hideButtons && (
              <MobileButtons>
                {CustomizationButton}
                {onAddToCart && (
                  <PrimaryButton
                    fullWidth
                    prefixIcon={<ShoppingCart />}
                    onClick={onAddToCart}
                  >
                    <FormattedMessage defaultMessage="Add to Cart" />
                  </PrimaryButton>
                )}
              </MobileButtons>
            )}
          </InfoSection>
          <VariantsSection alignItems="flex-start">
            {buildState.categories.map((category) => {
              return category.selectedVariants.length ? (
                <BuildItem key={category.id} alignItems="flex-start">
                  {category.imageSrc && (
                    <CategoryImgContainer>
                      <Photo
                        src={category.imageSrc || ""}
                        alt={category.type}
                      />
                    </CategoryImgContainer>
                  )}
                  <CategoryInfo alignItems="flex-start">
                    <CategoryTitle>{category.name}</CategoryTitle>
                    {category.selectedVariants.map((variant) => (
                      <FlexRow key={variant.id}>
                        <VariantImageContainer>
                          {variant.imageSrc ? (
                            <Photo
                              objectFit="contain"
                              src={variant.imageSrc}
                              alt={variant.title}
                            />
                          ) : (
                            <EmptyCartMob />
                          )}
                          <VariantQuantity>{variant?.quantity}</VariantQuantity>
                        </VariantImageContainer>
                        <FlexCol alignItems="flex-start">
                          <H5 fontWeight={400}>{variant.title}</H5>
                          <H6 color="secondary" style={{ minHeight: 16 }}>
                            {variant?.selectedOptions
                              ?.map((option) => option.value.name)
                              ?.join(" / ")}
                          </H6>
                          {variant?.sku ? (
                            <H6
                              color="secondary"
                              style={{ fontStyle: "italic" }}
                            >
                              <FormattedMessage
                                defaultMessage="SKU: {sku}"
                                values={{ sku: variant?.sku }}
                              />
                            </H6>
                          ) : null}
                          {variant.price.amount === 0 ? (
                            <FreeString>
                              <FormattedMessage defaultMessage="Free" />
                            </FreeString>
                          ) : (
                            <H5>
                              <PriceBase money={variant.price} />
                            </H5>
                          )}
                        </FlexCol>
                      </FlexRow>
                    ))}
                  </CategoryInfo>
                </BuildItem>
              ) : null;
            })}
          </VariantsSection>
        </Content>
      </Modal.Body>
    </Modal>
  );
};

export default SummaryPanel;

/**
 *
 *
 * Styles
 *
 *
 */

const Content = styled(FlexRow)`
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const InfoSection = styled(FlexCol)<{ isProductHasImg: boolean }>`
  width: 100%;
  position: relative;
  border-bottom: 1px solid #e5e9eb;
  padding-bottom: 10px;

  > ${FlexRow} {
    width: auto;
    justify-content: ${({ isProductHasImg }) =>
      isProductHasImg ? "flex-start" : "center"};
  }

  @media (min-width: 768px) {
    width: 45%;
    position: static;
    padding-bottom: 0;
    border-bottom: 0;

    > ${FlexRow} {
      width: 100%;
    }
  }
`;

const DesktopButtons = styled(FlexCol)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MobileButtons = styled(FlexCol)`
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const CollectionImageContainer = styled.div`
  position: relative;
  width: 120px;
  min-width: 120px;
  height: 120px;
  min-height: 120px;
  margin-inline-end: 10px;
`;

const SummaryPriceText = styled(H5)`
  margin-bottom: 5px;
  color: #a3a3a3;
`;

const ContinueCustomization = styled(PrimaryButton)`
  color: ${({ theme }) => theme.text.default};
  padding: 6px 20px;
  border: 1px solid #e5e9eb;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 12px;
`;

const VariantsSection = styled(FlexRow)`
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  ${rtl("margin-right", "margin-left")}: 0px;
  margin-top: 20px;

  > * {
    flex: 1 1 50%;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    width: calc(55% - 60px);
    ${rtl("margin-right", "margin-left")}: 60px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

const BuildItem = styled(FlexRow)`
  max-width: 166px;
  padding: 0 0 10px 0;
  width: 50%;

  @media (min-width: 768px) {
    max-width: 250px;
    padding: 0 10px 10px;
    width: 100%;
  }
`;

const CategoryImgContainer = styled.div`
  width: 24px;
  min-width: 24px;
  aspect-ratio: 1 / 1;
  margin-inline-end: 6px;
  position: relative;
`;

const VariantImageContainer = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  min-width: 45px;
  min-height: 45px;
  ${rtl("margin-left", "margin-right")}: 10px;

  > svg {
    max-width: 100%;
    max-height: 100%;
  }

  @media (min-width: 768px) {
    width: 65px;
    height: 65px;
    min-width: 65px;
    min-height: 65px;
  }
`;

const VariantQuantity = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${themeColor("primary")};
  position: absolute;
  border-radius: 30px;
  text-align: center;
  color: #fff;
  top: -5px;
  ${rtl("left", "right")}: -5px;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 4px;

  @media (min-width: 768px) {
    width: 17px;
    height: 17px;
    top: -7px;
    ${rtl("left", "right")}: -7px;
    font-size: 10px;
  }
`;

const CategoryInfo = styled(FlexCol)`
  flex-basis: 100%;
  > ${FlexRow} {
    margin-bottom: 15px;
    flex-grow: 1;
    width: 100%;
  }
`;

const CategoryTitle = styled(H4)`
  margin-bottom: 12px;
`;

const PriceWrapper = styled(FlexCol)`
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FreeString = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.4;
  margin: 0;
`;
