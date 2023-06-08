import styled from "styled-components";
import { themeColor } from "../../../shared/styles-utils";
import type { ProductDetailsProps } from "../../types";
import { useState } from "react";
import { ProductAttributes } from "./ProductAttributes";
import { ProductOverview } from "./ProductOverview";

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  description,
  attributes,
  tabs,
}) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <SummaryBoxWrapper id={"description"}>
      <SummaryBox>
        <TabContainer>
          {tabs?.map((tab, index) => (
            <TabButton
              onClick={() => {
                setCurrentTab(tab.value);
              }}
              key={index}
              isActive={currentTab === tab.value}
            >
              {tab.label}
            </TabButton>
          ))}
        </TabContainer>
        {currentTab === tabs[0].value ? (
          <ProductOverview title={title} description={description} />
        ) : (
          <ProductAttributes attributes={attributes} />
        )}
      </SummaryBox>
    </SummaryBoxWrapper>
  );
};

export default ProductDetails;

/**
 *
 * Styles
 *
 */
const SummaryBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const SummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  border-bottom: 2px solid #e5e9eb;
  padding: 20px 10px 0 10px;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  background: transparent;
  border-bottom: 2px solid
    ${({ isActive }) => (isActive ? themeColor("primary") : "transparent")};
  color: ${({ isActive }) => (isActive ? themeColor("primary") : "#252C32")};
  padding-bottom: 10px;
  margin-bottom: -2px;
`;
