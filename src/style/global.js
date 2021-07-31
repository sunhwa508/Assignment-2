import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    margin: 0;
    padding: 0;  
    text-decoration:none;
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
