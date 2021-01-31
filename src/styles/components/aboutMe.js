import styled from "styled-components"
import { spacingScale, Neutral, mediaQuery } from "../utils"

export const AboutMeText = styled.h1`
  color: ${Neutral[600]};
  word-break: normal;
  padding: ${spacingScale.spacing_xs};
  margin: 0;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  line-height: 1.28em;
  text-align:center;
  @media (min-width: ${mediaQuery.breakpoint1}) {
   text-align:left;
  }
`

export const Text = styled.p`
  font-weight: 300;
  color: ${Neutral[600]};
  word-break: normal;
  font-size: 1.25rem;
  text-align:center;
  line-height: 1.58em;
  font-family: "Quicksand", sans-serif;
  padding-left: ${spacingScale.spacing_xs};
  margin: 0;
  @media (min-width: ${mediaQuery.breakpoint1}) {
   text-align:left;
  }
`

export const BioText = styled.p`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.58em;
  color: ${Neutral[600]};
  margin-left: ${spacingScale.spacing_xl};
  margin-right: ${spacingScale.spacing_xl}; 
  word-break: normal;
  padding: ${spacingScale.spacing_m};
  font-family: "Quicksand", sans-serif;
  font-weight: 300;
`
