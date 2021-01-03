import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    max-height: 100%;
    max-width:100%;
    background:#000;
  }
`;
