import {createGlobalStyle} from "styled-components"
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  line-height: 1.5em;
  font-family:'Montserrat', sans-serif;
}
`
export default GlobalStyle