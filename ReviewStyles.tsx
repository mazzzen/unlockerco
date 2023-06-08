import styled from "styled-components";
import {
  FlexRow,
  H5,
  Input,
  Label,
  TextArea,
} from "../../../../../shared/globals";
import { rtl, themeColor } from "../../../../../shared/styles-utils";
import { theme } from "../../../../../shared/theme";
import { PrimaryButton } from "../../../../Button";

export const StyledButton = styled(PrimaryButton)`
  height: fit-content;
  justify-self: flex-end;
  background-color: ${themeColor("white")};
  border-color: #d0d5dd;
  color: #000;
  div {
    ${({ theme }) => (theme.isRTL ? "padding-right" : "padding-left")}: 0;
  }
`;

export const ItemVariants = styled(H5)`
  opacity: 0.5;
`;

export const StyledDivForLabel = styled(FlexRow)`
  width: 100%;
  user-select: none;
  &:hover input ~ span,
  &.active input ~ span {
    background-color: ${themeColor("primary")};
  }
`;

export const RadioButtonLabel = styled(Label)`
  margin-top: 0;
  position: relative;
  cursor: pointer;
  ${rtl("padding-right", "padding-left")}: 30px;
`;

export const CheckboxInput = styled(Input)`
  display: none;
  margin: 0;
`;

// the styled input
export const Checkmark = styled.span`
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.bg.wash}1a;
  border-radius: 50%;
  position: absolute;
  ${rtl("right", "left")}: 0;
  /* the dot circle */
  &:after {
    content: "";
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${themeColor("white")};
    display: block;
    position: absolute;
  }
`;

export const RequiredSpan = styled.span`
  font-size: 12px;
  color: #d21c1c;
  font-weight: 400;
  height: 0;
`;

export const StyledInput = styled(Input)`
  margin: 0;
  &::placeholder {
    font-weight: 400;
  }
`;

export const StyledTextArea = styled(TextArea)`
  height: 120px;
  margin: 0;
  resize: none;
  &::placeholder {
    font-weight: 400;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const SaveButton = styled(PrimaryButton)`
  margin-inline-start: 10px;
  padding: 12px 34px;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 0;
    width: auto;
    flex: 0 0 auto;
  }
  div {
    ${rtl("padding-right", "padding-left")}: 8px;
    display: flex;
    transform: scaleX(${rtl("-1", "1")});
  }
`;

export const CancelButton = styled(PrimaryButton)`
  border: 1px solid #dde2e4;
  background-color: ${themeColor("white")};
  color: ${theme.text.default};
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
