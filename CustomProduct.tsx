import React from "react";
import styled from "styled-components";
import type { CustomProductInfoProps, TemplateElement } from "../../types";
import DesktopCustomProduct from "./DesktopCustomProduct";
import MobileCustomProduct from "./MobileCustomProduct";

const CustomProductInfo: TemplateElement<CustomProductInfoProps> = (props) => {
  return (
    <>
      <OnDesktop>
        <DesktopCustomProduct {...props} />
      </OnDesktop>
      <OnMobile>
        <MobileCustomProduct {...props} />
      </OnMobile>
    </>
  );
};

export default CustomProductInfo;

/**
 *
 *
 * Styles
 *
 *
 */

const OnMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding-bottom: 60px;
  }
`;

const OnDesktop = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;
