import styled from "styled-components"
import { spacingScale, mediaQuery, Neutral } from "../utils"

export const TextSection = styled.h1`
  text-align: center;
  font-size: 1.953rem;
  color: ${Neutral[600]};
  word-break: normal;
  padding: ${spacingScale.spacing_s};
  font-family: "krub", sans-serif;
  font-weight: 500;
  
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-bottom: ${spacingScale.spacing_m};
  }
`
export default TextSection
