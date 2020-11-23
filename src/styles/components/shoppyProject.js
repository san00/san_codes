import styled from "styled-components"
import { Neutral, spacingScale, mediaQuery, typeScale } from "../utils"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ShoppyContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: calc((100vw - 60em) / 2);
  padding-right: calc((100vw - 60em) / 2);

  @media (min-width: ${mediaQuery.breakpoint1}) {
    flex-direction: row;
  }
`

export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
export const ShoppyLink = styled(Link)`
  text-decoration: none;
`

export const ShoppyImg = styled(Img)`
  height: 100%;

  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-right: ${spacingScale.spacing_xl};
    min-width: 50%;
  }
`
export const ShoppyHeader = styled.h3`
  font-size: 1.563rem;
  line-height: 1.28em;
  padding-left: ${spacingScale.spacing_l};
  font-family: "Quicksand", sans-serif;
  font-weight: 300;
  color: ${Neutral[600]};
`

export const ShoppyText = styled.p`
  font-size: ${typeScale.paragraph};
  line-height: 1.58em;
  word-break: normal;
  padding-left: ${spacingScale.spacing_l};
  font-family: "Mukta Vaani", sans-serif;
  font-weight: 500;
  color: ${Neutral[500]};
`

export const IconWrapper = styled.section`
  display: flex;
  margin-left: auto;
  font-size: ${typeScale.paragraph};
  line-height: 1.58em;
  padding-top: ${spacingScale.spacing_l};
  font-family: "Mukta Vaani", sans-serif;
`

export const Github = styled.a`
  fill: ${Neutral[400]};
  color: ${Neutral[400]};
  margin-left: auto;
  & :hover {
    fill: ${Neutral[600]};
    color: ${Neutral[600]};
    transition: all 0.1s ease;
  }
`

export default ShoppyContainer
