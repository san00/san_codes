import styled from "styled-components"
import { spacingScale, Red, Green } from "../utils"

const BannerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${spacingScale.spacing_l};
  background: ${Green[100]};
`
export const Circle = styled.div`
  width: 100px;
  height: 100px;
  background: ${Red[300]};
  border-radius: 50%;
  margin-bottom: ${spacingScale.spacing_m};
`
export default BannerWrapper
