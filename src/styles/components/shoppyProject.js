import styled from "styled-components"
import { Neutral, spacingScale, typeScale } from "../utils"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ShoppyContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin: ${spacingScale.spacing_xl};
`

export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
export const ShoppyLink = styled(Link)`
  text-decoration: none; ;
`

export const ShoppyImg = styled(Img)`
  width: 100%;
  height: 100%;
  margin-right: ${spacingScale.spacing_xl};
`
export const ShoppyHeader = styled.h3`
  font-size: 2.441rem;
  line-height: 1.28em;
  padding-left: ${spacingScale.spacing_l};
  font-family: "Quicksand", sans-serif;
  font-weight: 300;
  color: ${Neutral[600]};
`

export const ShoppyText = styled.p`
  font-size:${typeScale.paragraph}; 
  line-height: 1.58em;
  word-break: normal;
  padding-left: ${spacingScale.spacing_l};
  font-family: "Mukta Vaani", sans-serif;
  font-weight: 500;
  color: ${Neutral[500]};
`

export default ShoppyContainer