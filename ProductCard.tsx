import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { ProductPlaceHolder, ShoppingCart } from "../../../assets/Icons";
import { Badge } from "../../../components/Badge/Badge";
import { PrimaryButton } from "../../../components/Button";
import { Price, DiscountPrice } from "../../../components/Price";
import { ProductType } from "../../../generated/graphql";
import { Link } from "../../../lib/i18n";
import { useStore } from "../../../lib/storeData";
import { P, FlexCol } from "../../../shared/globals";
import { Photo } from "../../../shared/globals/UiElements/Photo";
import { themeColor } from "../../../shared/styles-utils";
import Alert from "../../../shared/globals/UiElements/Alert";
import ProductCardReviews from "../../default/components/ReviewsAndRatings/ProductCardReviews";
import type { ProductCardProps } from "../../types";

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  collection,
  isAlertOpen,
  handleAddToCart,
  setIsAlertOpen,
  isDiscount,
  discountedCustomProductPrice,
  buyXGetYDiscount,
  availableQuantity,
  onlyCardBody,
}) => {
  const { currency: currencyCode, areReviewsActivated } = useStore();
  const productTitle = product?.title?.substring(0, 58);
  const firstVariant = product?.variants?.nodes[0];
  const customProduct = product.type === ProductType.Custom;
  const productHasOptions =
    !customProduct && !!product?.variants?.nodes[0]?.selectedOptions?.length;

  const CardBodyFragment = (
    <>
      <BadgeContainer alignItems="flex-start">
        <Badge
          outOfStock={!product.isInStock}
          onSale={
            !!firstVariant?.compareAtPrice && firstVariant?.price?.amount !== 0
          }
          customInStock={customProduct && !!product.isInStock}
        />
        {isDiscount && <Badge discount={product?.discount ?? undefined} />}
        {!!buyXGetYDiscount && (
          <Badge buyXGetYDiscountTitle={buyXGetYDiscount?.title} />
        )}
      </BadgeContainer>

      <Link
        fullWidth
        href={`/product/${collection || "all"}/${product.handle}`}
      >
        <P
          data-test="text-product-title"
          style={{ flexGrow: 1 }}
          margin="0 0 10px 0"
        >
          {productTitle}
        </P>
        <ImageContainer>
          {product.images.length === 0 ? (
            <ProductPlaceHolder />
          ) : (
            <Photo
              data-test="product-image"
              src={product?.images?.[0]?.src || ""}
              alt={product.title}
              objectFit="contain"
              absolute
            />
          )}
        </ImageContainer>
        {areReviewsActivated && (
          <ProductCardReviews
            averageRating={product?.reviewsStatistics?.average}
            totalReviews={product?.reviewsStatistics?.total}
          />
        )}
        <PriceWrapper>
          {!customProduct ? (
            <>
              <Price money={firstVariant?.price} />
              {firstVariant?.compareAtPrice && (
                <DiscountPrice money={firstVariant?.compareAtPrice} />
              )}
            </>
          ) : (
            <>
              {isDiscount ? (
                <>
                  <Price
                    money={{
                      amount: discountedCustomProductPrice!,
                      currencyCode,
                    }}
                  />
                  <DiscountPrice money={product?.initialPrice} />
                </>
              ) : (
                <Price money={product?.initialPrice} />
              )}
            </>
          )}
        </PriceWrapper>
      </Link>

      <AddButton
        data-test="button-add-product-to-cart"
        fullWidth
        suffixIcon={
          !productHasOptions &&
          !customProduct &&
          availableQuantity?.type !== "cart" && <ShoppingCart />
        }
        size="medium"
        onClick={
          !productHasOptions &&
          !customProduct &&
          availableQuantity?.type !== "cart"
            ? handleAddToCart
            : undefined
        }
        disabled={!product.isInStock}
      >
        {customProduct ? (
          <Link
            fullWidth
            href={`/product/${collection || "all"}/${product.handle}`}
          >
            <ButtonText>
              <FormattedMessage defaultMessage="Build your product" />
            </ButtonText>
          </Link>
        ) : productHasOptions || availableQuantity?.type === "cart" ? (
          <Link
            fullWidth
            href={`/product/${collection || "all"}/${product.handle}`}
          >
            <ButtonText>
              <FormattedMessage defaultMessage="Select options" />
            </ButtonText>
          </Link>
        ) : (
          <ButtonText>
            <FormattedMessage defaultMessage="Add to cart" />
          </ButtonText>
        )}
      </AddButton>
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
    </>
  );

  return onlyCardBody ? (
    CardBodyFragment
  ) : (
    <StyledCard data-test="product-card">{CardBodyFragment}</StyledCard>
  );
};

export default ProductCard;

/**
 *
 * Styles
 *
 */

const StyledCard = styled(FlexCol)`
  align-items: flex-start;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  a {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.14);
  }

  flex-basis: 25%;
  @media (max-width: 768px) {
    flex-basis: 50%;
  }
  @media (max-width: 375px) {
    flex-basis: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  ::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  margin: 14px 0 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AddButton = styled(PrimaryButton)`
  flex-grow: 0;
  min-height: 36px;
  font-size: 12px;
  padding: 5px;
  color: ${themeColor("primary")};
  border: ${({ theme }) => `solid 1px ${theme.space.border}`};
  background-color: transparent;
  @media (min-width: 768px) {
    padding: 6px 0;
    font-size: 14px;
  }

  div {
    @media (min-width: 768px) {
      padding: 0 4px;
    }
    padding: 0;
  }
`;

const ButtonText = styled.span`
  padding: 0 4px;
`;

const BadgeContainer = styled(FlexCol)`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
