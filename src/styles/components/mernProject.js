import styled from "styled-components"
import { spacingScale, typeScale, mediaQuery, Neutral, Red } from "../utils"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Container = styled.section`
  grid-area: mernProject;
  transition: 1s ease-in-out;
  & :hover {
    transition: 1s ease-in-out;
    transform: scale(1.03);
    text-decoration: underline;
  }
`

export const AppImg = styled(Img)`
  object-fit: contain;
  max-width: 80%;
  box-shadow: 0 1px 6px 0 hsla(0, 0%, 0%, 0.2);
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-left: ${spacingScale.spacing_l};
    margin-right: ${spacingScale.spacing_l};
    max-width: 100%;
  }
`

export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    flex-direction: column;
    margin-left: ${spacingScale.spacing_l};
    margin-right: ${spacingScale.spacing_l};
    padding: ${spacingScale.spacing_m};
  }
`

export const Header = styled.h2`
  line-height: 1.28em;
  font-family: "Quicksand", sans-serif;
  color: ${Neutral[600]};
`

export const Text = styled.p`
  font-size: ${typeScale.paragraph};
  line-height: 1.58em;
  word-break: normal;
  font-family: "Mukta Vaani", sans-serif;
  font-weight: 300;
  color: ${Neutral[500]};
`

export const IconWrapper = styled.section`
  display: flex;
  justify-content: right;
  font-size: ${typeScale.paragraph};
  line-height: 1.58em;
  font-family: "Mukta Vaani", sans-serif;
`

export const Github = styled.a`
  fill: ${Neutral[600]};
  color: ${Neutral[600]};
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

export const ReadMore = styled.p`
  line-height: 1.58em;
  word-break: normal;
  font-family: "Mukta Vaani", sans-serif;
  font-weight: 500;
  color: ${Neutral[500]};
  & :hover {
    text-decoration: underline;
  }
`

export const AppDetail = styled(Link)`
  text-decoration: none;
`

export default Container
