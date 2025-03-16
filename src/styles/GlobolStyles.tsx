import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

//импорт глобальных стилий в main.tsx
export const GlobolStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  margin: 0;
  font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  line-height: 1.2;
}

 a {
    text-decoration: none;
    list-style: none;
  }

  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
  }

  //стили отступы для секциий
  section {
    /* padding-top: 144px;
    padding-bottom: 144px; */
  }

  @media ${theme.media.mobile} {
      margin: 30px 30px;
  }


`
