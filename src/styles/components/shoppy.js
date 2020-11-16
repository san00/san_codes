import styled from "styled-components"
import { spacingScale, typeScale } from "../utils"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ShoppyWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: ${spacingScale.spacing_xxl};
`

export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin: ${spacingScale.spacing_l};
`
export const ShoppyLink = styled(Link)`
  text-decoration: none; ;
`

export const ShoppyImg = styled(Img)`
  width: 30em;
  height: auto;
`
export const ShoppyHeader = styled.h3`
  font-size: 1.953rem;
  text-align: center;
`

export const ShoppyText = styled.p`
  font-size: ${typeScale.paragraph};
  text-align: right;
  word-break: normal;
`

export default ShoppyWrapper
