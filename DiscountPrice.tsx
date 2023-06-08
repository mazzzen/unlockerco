import styled from "styled-components";
import { Price } from "./Price";

export const DiscountPrice = styled(Price)<{
  fontSize?: string;
}>`
  color: ${({ theme }) => theme.text.secondary};
  text-decoration: line-through;
  line-height: 1.5;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
  padding: 0 10px;
  font-weight: 500;
  align-self: flex-start;

  @media (min-width: 768px) {
    align-self: center;
    padding: 0 2px;
  }
`;
