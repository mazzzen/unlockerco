import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./index";
import { FontTypeEnum } from "../../generated/graphql";

export const GlobalStyle = createGlobalStyle<{ theme?: ThemeType }>`
  html {
    font-family: ${({ theme }) => theme.fonts[FontTypeEnum.Body]};
		box-sizing: border-box;
  }
  
  * {
    font-family: inherit;
  }

	h1,h2,h3,h4,h5,h6{
    font-family:  ${({ theme }) => theme.fonts[FontTypeEnum.Headers]};
	}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  svg {
    display: block;
  }
  
  body {
    direction: ${({ theme: { isRTL } }) => (isRTL ? "rtl" : "ltr")};
    margin: 0;
    padding: 0;
    touch-action: pan-x pan-y;
  }

  a {
  text-decoration: none;
  color: ${({ theme }) => theme.text.default};
  }
`;
