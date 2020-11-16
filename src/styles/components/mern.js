import styled from "styled-components"
import { spacingScale, typeScale } from "../utils"
import { Link } from "gatsby"
import Img from "gatsby-image"

const MernWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: ${spacingScale.spacing_m};
`

export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: right;
  padding: ${spacingScale.spacing_m};
`
export const MernLink = styled(Link)`
  text-decoration: none;
`

export const MernImg = styled(Img)`
  width: 30em;
  height: auto;
`
export const MernHeader = styled.h3`
  font-size: 1.953rem;
  text-align:center;
`

export const MernText = styled.p`
  font-size: ${typeScale.paragraph};
  text-align: left;
  word-break: normal;
`

export default MernWrapper
