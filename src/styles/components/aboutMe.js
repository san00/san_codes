import styled from "styled-components"
import { spacingScale, Neutral } from "../utils"

export const AboutMeText = styled.p`
  text-align: center;
  font-size: 1.953rem;
  color: ${Neutral[600]};
  word-break: normal;
  margin:${spacingScale.spacing_l};
  padding:${spacingScale.spacing_m};
`
export default AboutMeText