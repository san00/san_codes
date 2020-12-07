import styled from "styled-components"
import { spacingScale, mediaQuery, Neutral } from "../utils"

export const TextSection = styled.h1`
  text-align: center;
  font-size: 1.953rem;
  color: ${Neutral[600]};
  word-break: normal;
  padding: ${spacingScale.spacing_m};
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-bottom: ${spacingScale.spacing_xl};
  }
`
export default TextSection
