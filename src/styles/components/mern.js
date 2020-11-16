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
  font-family: 'Quicksand', sans-serif;
  font-weight:400;
`

export const MernText = styled.p`
  font-size: ${typeScale.paragraph};
  text-align: left;
  word-break: normal;
  font-family: 'Mukta Vaani', sans-serif;
  font-weight:300;
`

export default MernWrapper
