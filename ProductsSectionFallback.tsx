import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { RightArrow } from "../../../assets/Icons";
import { Heading } from "../../../components/UtilityComponents/Heading";
import { CenterWrapper } from "../../../components/UtilityComponents/styled";
import { Link } from "../../../lib/i18n";
import { StoreTemplate } from "../../TemplateLoader";
import { ProductBasicInfoFragment } from "../../../generated/graphql";
import { PrimaryButton } from "../../../components/Button";
import { rtl } from "../../../shared/styles-utils";
import { Section } from "../../../shared/layout";

interface ProductsSectionFallbackProps {
  products: ProductBasicInfoFragment[];
}

const ProductsSectionFallback = ({
  products,
}: ProductsSectionFallbackProps) => {
  const Template = StoreTemplate.get();

  return (
    <Section>
      <Heading>
        <FormattedMessage defaultMessage="Our Products" />
      </Heading>
      <Template.elements.ProductsList products={products} />
      <CenterWrapper>
        <Link href={"/shop"} passHref>
          <ProductButton suffixIcon={<RightArrow />}>
            <FormattedMessage defaultMessage="See more from Our Products" />
          </ProductButton>
        </Link>
      </CenterWrapper>
    </Section>
  );
};

export default ProductsSectionFallback;

const ProductButton = styled(PrimaryButton)`
  padding: 14px 32px;
  span {
    padding: 0 5px;
  }
  div {
    padding: 0 5px;
  }
  svg {
    ${rtl("transform: rotate(180deg)", "transform: rotate(0deg)")}
  }
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;
