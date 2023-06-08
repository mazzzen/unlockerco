import styled from "styled-components";
import { FlexCol, FlexRow, H3, Label } from "../../shared/globals";
import { rtl, themeColor } from "../../shared/styles-utils";

export const Container = styled(FlexCol)<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  ${rtl("right: 0;", "left: 0;")}
  height: 100%;
  width: 90vw;
  max-width: 340px;
  background-color: ${themeColor("white")};
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.2);
  z-index: 102;

  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : rtl("translateX(120%)", "translateX(-120%)")};
`;

export const StyledFlexRow = styled(FlexRow)`
  width: 100%;
`;

export const FilterSection = styled(StyledFlexRow)`
  position: relative;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

export const StyledH3 = styled(H3)`
  font-weight: 700;
`;

export const StyledH3WithMargin = styled(StyledH3)`
  ${rtl("margin-right:8px", "margin-left:8px")}
`;

export const CloseIconDesktop = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: inherit;
  outline: none;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledFlexCol = styled(FlexCol)`
  width: 100%;
  align-items: baseline;
`;

export const ScrollableSection = styled.div`
  width: 100%;
  overflow-y: auto;
  height: calc(100% - 130px);
`;

export const StyledFlexRowPrice = styled(StyledFlexRow)`
  margin: 20px 0;
  justify-content: space-between;
`;

export const StyledUL = styled.ul`
  margin: 20px 0 0;
  ${rtl("padding-right: 10px", "padding-left: 10px")};
`;
export const StyledLI = styled.li`
  list-style: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const StyledLabel = styled(Label)`
  :first-of-type {
    ${rtl("margin-left", "margin-right")}: 10px;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    :first-of-type {
      ${rtl("margin-left", "margin-right")}: 1.25rem;
    }
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fafbfc;
  border: solid 1px #dfe3e8;
  border-radius: 4px;
  margin-top: 10px;
  flex-direction: ${rtl("row-reverse", "row")};
`;

export const StyledPrefix = styled.span`
  padding-left: 12px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const StyledInput = styled.input`
  padding: 9px;
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-weight: 600;
  appearance: none;
  /* Chrome, Safari, Edge, Opera, Firefox */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    font-weight: 400;
    color: #bbb;
  }
  -moz-appearance: textfield;
`;

export const CloseIconMobile = styled.button`
  cursor: pointer;
  padding: 10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  border: solid 1px ${({ theme }) => theme.special.border};
  background-color: ${themeColor("white")};
  color: ${({ theme }) => theme.colors.primary};

  position: absolute;
  bottom: 0;

  transform: ${rtl("translate(-100%, 50%)", "translate(100%, 50%)")};
  ${rtl("left: 20px", "right: 20px;")};

  svg {
    ${rtl("transform: rotate(180deg)", "")}
  }

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Section = styled(StyledFlexCol)`
  padding: 10px 20px;
  height: calc(100% - 130px);
`;

export const FlipSvg = styled.div`
  cursor: pointer;
  svg {
    ${rtl("", "transform: rotate(180deg)")}
  }
`;

export const SelectedFiltersValues = styled.div`
  overflow: hidden;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.2px;
  color: #252a31;
  opacity: 0.7;
  text-overflow: ellipsis;
`;
export const OverflowSelectedFilters = styled.div`
  font-weight: 700;
  font-size: 12px;
  text-align: right;
  letter-spacing: -0.2px;
  margin-inline-start: 5px;
  color: #252a31;
`;
