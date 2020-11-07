import styled from "styled-components"
import { spacingScale, typeScale, Neutral, Red, Yellow } from "../utils"

const AsideWrapper = styled.div`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacingScale.spacing_l};
  background: ${Yellow[100]};
`
export const Rectangle = styled.div`
  width: 100px;
  height: 100px;
  background: ${Red[300]};
  padding-bottom: ${spacingScale.spacing_m};
  margin-bottom: ${spacingScale.spacing_s};
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
  font-size: ${typeScale.paragraph};
`
export default AsideWrapper
