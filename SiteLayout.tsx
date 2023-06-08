import React from "react";
import styled from "styled-components";
import { StoreTemplate } from "../../TemplateLoader";
import type { SiteLayoutProps, TemplateElement } from "../../types";

const SiteLayout: TemplateElement<SiteLayoutProps> = ({ children }) => {
  const Template = StoreTemplate.get();

  return (
    <>
      <Template.elements.InfoBar />
      <Template.elements.NavBar />
      <Main>{children}</Main>
      <Template.elements.Footer />
    </>
  );
};

export default SiteLayout;

/**
 * styles
 */

const Main = styled.main`
  min-height: 60vh;
  background-color: ${({ theme }) => theme.colors.backgroundReverse};
  padding: 0 0 60px 0;
`;
