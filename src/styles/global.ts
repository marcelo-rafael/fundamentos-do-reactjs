import { createGlobalStyle } from "styled-components";

import githubBackground from '../assets/bg-github.svg';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    /* 1rem = 16px (User Agent) = 100% (User Agent) */
  font-size: 62.5% /* 10px */
  }
  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body, input, button {
    font: 1.6rem Roboto, sans-serif
  }

  #root {
    max-width: 96rem;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
