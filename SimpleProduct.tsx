import React from "react";
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";
import { ShoppingCart } from "../../../assets/Icons";
import { Badge } from "../../../components/Badge/Badge";
import { PrimaryButton } from "../../../components/Button";
import { DiscountPrice, Price } from "../../../components/Price";
import { QuantityInput } from "../../../components/QuantityInput";
import { H1, P } from "../../../shared/globals";
import { rtl, themeColor } from "../../../shared/styles-utils";
import { StoreTemplate } from "../../TemplateLoader";
import type { SimpleProductProps, TemplateElement } from "../../types";
import Alert from "../../../shared/globals/UiElements/Alert";
import { useCart } from "../../../contexts/CartContext";
import { useStore } from "../../../lib/storeData";
import ProductRatingSummary from "../components/ReviewsAndRatings/ProductRatingSummary";

const SimpleProduct: TemplateElement<SimpleProductProps> = ({
  selectedVariant,
  product,
  availableQuantity,
  collectionHandle,
  isAlertOpen,
  quantity,
  buyXGetYDiscount,
  handleSelect,
  setQuantity,
  handleAddToCart,
  setIsAlertOpen,
  isValueAvailableForOtherSelectedValues,
  tabs,
}) => {
  const Template = StoreTemplate.get();
  const { cart } = useCart();
  const { areReviewsActivated } = useStore();
  const disableButton = () => {
    if (availableQuantity?.type === "cart") {
      const item = cart.items?.find(
        (item) => item?.variantId === selectedVariant?.id
      );
      if (item) {
        return item?.quantity! < availableQuantity?.min!;
      }
      return quantity! < availableQuantity?.min!;
    }
    return false;
  };

  return (
    <>
      <ProductWrapper>
        <Template.elements.ProductGallery
          selectedId={selectedVariant?.image?.id}
          images={product?.images!}
        />
        <StyledProduct>
          <StyledBadge
            outOfStock={
              availableQuantity?.type === "stock" &&
              availableQuantity?.max === 0
            }
            onSale={
              !!selectedVariant?.compareAtPrice &&
              selectedVariant?.price?.amount !== 0
            }
          />
          <StyledBadge buyXGetYDiscountTitle={buyXGetYDiscount?.title} />
          <ProductHead>
            {product?.title}
            {areReviewsActivated && (
              <ProductRatingSummary
                reviewsStatistics={product?.reviewsStatistics}
              />
            )}
          </ProductHead>

          {/* <ShortDescription>
            {`${shortDescription.substring(0, 125)} ... `}
            <Link
              href={`/product/${collectionHandle || "all"}/${
                product.handle
              }/#description`}
            >
              ReadMore
            </Link>
          </ShortDescription> */}
          {product?.options?.map((option, optionIndex) => (
            <div key={option?.name! + optionIndex}>
              <Text>{option?.name}</Text>
              <OptionsWrapper>
                {option?.values?.map((value) => (
                  <OptionBox
                    key={value.id}
                    active={
                      selectedVariant?.selectedOptions?.[optionIndex]?.value
                        ?.id === value.id
                    }
                    isAvailable={
                      !!isValueAvailableForOtherSelectedValues?.(
                        selectedVariant,
                        optionIndex,
                        product,
                        value
                      )
                    }
                    as="button"
                    onClick={handleSelect?.(value, optionIndex)}
                  >
                    {value.name}
                  </OptionBox>
                ))}
              </OptionsWrapper>
            </div>
          ))}
          {selectedVariant?.sku ? (
            <P style={{ fontStyle: "italic" }}>
              <FormattedMessage
                defaultMessage="SKU: {sku}"
                values={{ sku: selectedVariant?.sku }}
              />
            </P>
          ) : null}
          <PricingWrapper>
            {selectedVariant?.price?.amount === 0 ? (
              <H1
                style={{ margin: "20px 0 30px", lineHeight: "normal" }}
                color="primary"
                fontWeight={700}
              >
                <FormattedMessage defaultMessage="Free" />
              </H1>
            ) : (
              <>
                <Price money={selectedVariant?.price} />
                {selectedVariant?.compareAtPrice && (
                  <DiscountPrice
                    fontSize="16px"
                    money={selectedVariant?.compareAtPrice}
                  />
                )}
              </>
            )}
          </PricingWrapper>
          {availableQuantity?.type === "cart" &&
            availableQuantity?.min! > 1 && (
              <Alert
                message={
                  <FormattedMessage
                    defaultMessage="Minimum quantity per order {min}. You can add up to {max} per order"
                    values={{
                      min: availableQuantity?.min,
                      max: availableQuantity?.max,
                    }}
                  />
                }
                style={{ marginBottom: 6 }}
              />
            )}
          <AddToCartWrapper
            className={
              availableQuantity?.type === "stock" &&
              availableQuantity?.max === 0
                ? "dimmed"
                : ""
            }
          >
            <QuantityInput
              max={availableQuantity?.max}
              value={quantity!}
              onChange={(value) => setQuantity?.(value)}
            />
            <PrimaryButton
              suffixIcon={<ShoppingCart />}
              fullWidth
              onClick={handleAddToCart}
              disabled={disableButton()}
            >
              <FormattedMessage defaultMessage="Add to cart" />
            </PrimaryButton>
          </AddToCartWrapper>
          {isAlertOpen && (
            <Alert
              message={
                availableQuantity?.type === "stock" ? (
                  <FormattedMessage defaultMessage="Quantity exceeded" />
                ) : (
                  <FormattedMessage
                    defaultMessage="You can only add up to {max} of this product to cart"
                    values={{ max: availableQuantity?.max }}
                  />
                )
              }
              closeAction={() => setIsAlertOpen!(false)}
            />
          )}
        </StyledProduct>
      </ProductWrapper>
      <Template.elements.ProductDetails
        options={product?.options!}
        title={product?.title!}
        description={product?.descriptionHtml}
        attributes={product?.attributes}
        tabs={tabs!}
      />
      {areReviewsActivated && (
        <Template.elements.RatingAndReviews
          product={{
            id: product?.id!,
            title: product?.title!,
            images: product?.images!,
          }}
        />
      )}
      <Template.elements.AlsoLike
        productId={product?.id!}
        handle={collectionHandle}
      />
    </>
  );
};

export default SimpleProduct;

/**
 *
 *
 * Styles
 *
 */

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

const StyledProduct = styled.div`
  max-width: 512px;
  flex: 1 1 50%;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 512px;
  }
`;

const ProductHead = styled(H1)`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${({ theme }) => theme.text.default};
  margin-bottom: 16px;
  max-width: 490px;
`;

const Text = styled(P)`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.default};
  margin-bottom: 8px;
  text-transform: capitalize;
`;

const OptionsWrapper = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 16px 0;
  padding: 0;
`;

const OptionBox = styled.button<{ active: boolean; isAvailable: boolean }>`
  padding: 10px 12px;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.bg.inactive};
  color: ${({ theme }) => theme.text.default};
  background-color: ${({ theme }) => theme.bg.reverse};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.29;
  margin-bottom: 8px;
  text-transform: capitalize;
  cursor: pointer;
  &:not(:last-child) {
    ${rtl("margin-left: 10px;", "margin-right: 10px;")}
  }
  ${({ active }) =>
    active
      ? css`
          color: ${themeColor("primary")};
          border: solid 1px ${themeColor("primary")};
          background-color: ${themeColor("white")};
          outline: none;
        `
      : ""}

  ${({ isAvailable }) =>
    !isAvailable &&
    css`
      opacity: 0.4;
    `}
`;

const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${Price} {
    margin: 20px 0 30px 0;
    font-size: 24px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AddToCartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 430px;

  &.dimmed {
    opacity: 0.5;
    pointer-events: none;
  }

  > * {
    :not(:last-child) {
      ${rtl(" margin:0 0 0 10px ;", " margin: 0 10px 0 0;")};
    }
  }
`;

const StyledBadge = styled(Badge)`
  margin-bottom: 16px;
`;

// const ShortDescription = styled(P)`
//   font-size: 14px;
//   line-height: 1.43;
//   color: #5f738c;
//   a {
//     color: ${themeColor("primary")};
//     font-size: 14px;
//     line-height: 1.43;
//     text-decoration: none;
//   }
// `;
