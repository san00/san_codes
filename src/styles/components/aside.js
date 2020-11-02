import styled from "styled-components"
import { spacingScale,  typeScale, Neutral, Red, Yellow } from "../utils"

const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacingScale.spacing_l};
  background: ${Yellow[100]};
`
export const Rectangle = styled.div`
  width: auto;
  height: 100px;
  background: ${Red[300]};
  padding-bottom: ${spacingScale.spacing_m};
`
export const Circle = styled.div`
  width: 100px;
  height: 100px;
  background: ${Red[300]};
  border-radius: 50%;
  margin-bottom: ${spacingScale.spacing_m};
`
export const AsideText = styled.p`
color: ${Neutral[600]};
font-size:${typeScale.paragraph};
`
export default AsideWrapper
