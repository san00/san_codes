import styled from "styled-components"
import { spacingScale, Red, Green } from "../utils"

const BannerWrapper = styled.section`
  grid-area: banner;
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
position: relative;
`
export const Text = styled.p`
position:absolute;
top: 4em;
left:4em;
`
export default BannerWrapper
