import styled from "styled-components"
import { spacingScale, typeScale, mediaQuery, Neutral, Red } from "../utils"
import { Link } from "gatsby"
import Img from "gatsby-image"

const MernContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: ${mediaQuery.breakpoint1}) {
    flex-direction: row;
  }
`

export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacingScale.spacing_xl};
`
export const MernLink = styled(Link)`
  text-decoration: none;
`

export const MernImg = styled(Img)`
  height: 100%;
  box-shadow: 0 1px 6px 0 hsla(0, 0%, 0%, 0.2);
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-right: ${spacingScale.spacing_xl};
    min-width: 50%;
  }
`
export const MernHeader = styled.h2`
  font-size: 1.563rem;
  line-height: 1.28em;
  padding-left: ${spacingScale.spacing_l};
  font-family: "Quicksand", sans-serif;
  font-weight: 300;
  color: ${Neutral[600]};
`

export const MernText = styled.p`
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
  padding-top: ${spacingScale.spacing_xl};
  font-family: "Mukta Vaani", sans-serif;
`

export const Github = styled.a`
  fill: ${Neutral[600]};
  color: ${Neutral[600]};
  margin-left: auto;
  padding-right: ${spacingScale.spacing_l};
  & :hover {
    fill: ${Red[100]};
    color: ${Red[100]};
    transition: all 0.1s ease;
  }
`

export const AppLink = styled.a`
  fill: ${Neutral[600]};
  color: ${Neutral[600]};
  & :hover {
    fill: ${Red[100]};
    color: ${Red[100]};
    transition: all 0.1s ease;
  }
`

export default MernContainer
