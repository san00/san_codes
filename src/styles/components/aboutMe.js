import styled from "styled-components"
import { spacingScale, Neutral } from "../utils"

export const AboutMeText = styled.h1`
  text-align: center;
  font-size: 1.953rem;
  line-height: 1.28em;
  color: ${Neutral[600]};
  word-break: normal;
  margin: ${spacingScale.spacing_l};
  padding: ${spacingScale.spacing_m};
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
`

export const Bio = styled.p`
  text-align: center;
  font-size: 1.563rem;
  line-height: 1.28em;
  color: ${Neutral[600]};
  word-break: normal;
  margin: ${spacingScale.spacing_l};
  padding: ${spacingScale.spacing_m};
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
`

export default AboutMeText
