import * as React from "react";
import styled from "styled-components";
import { ArrowRight } from "../../assets/Icons";
import { Link } from "../../lib/i18n";
import { H2, Span } from "../../shared/globals";
import { Section } from "../../shared/layout";
import { rtl } from "../../shared/styles-utils";

const NavigatorHeading = styled(H2)`
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
`;

const NavIcon = styled(Span)`
  margin: 0 8px;
  transform: ${rtl("rotate(180deg)", "rotate(0deg)")};
`;

const BreadcrumbContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 0;
  width: 100%;

  div {
    display: flex;
    align-items: center;
  }
`;

export type BreadCrumpType = {
  title: string;
  link: string;
};

interface BreadcrumbProps {
  breadcrumbs: (BreadCrumpType | undefined)[];
}

export const BreadcrumbHeader = ({ breadcrumbs }: BreadcrumbProps) => {
  return (
    <Section background="backgroundReverse">
      <BreadcrumbContainer>
        {breadcrumbs.reduce((memo, breadcrumb, index) => {
          let item = <NavigatorHeading>{breadcrumb?.title}</NavigatorHeading>;
          let arrow: any = null;

          if (index !== breadcrumbs.length - 1) {
            arrow = (
              <NavIcon>
                <ArrowRight />
              </NavIcon>
            );
          }

          if (breadcrumb?.link) {
            item = <StyledLink href={breadcrumb?.link}>{item}</StyledLink>;
          }

          return [
            ...memo,
            <div key={index}>
              {item}
              {arrow}
            </div>,
          ];
        }, [])}
      </BreadcrumbContainer>
    </Section>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;
