import styled from "styled-components";
import { rtl } from "../../styles-utils";

const Asterisk = styled.span`
  width: fit-content;
  :after {
    content: "*";
    color: #d21c1c;
    ${rtl("margin-right", "margin-left")}: 3px;
  }
`;

export default Asterisk;
