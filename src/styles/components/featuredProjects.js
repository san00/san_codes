import styled from "styled-components"
import Img from "gatsby-image"
import { spacingScale, mediaQuery, typeScale, Neutral, Red } from "../utils"
import { Link } from "gatsby"

export const Wrapper = styled.section`
  display: grid;
  gap: 0.2em;
  grid-template-columns: repeat(auto-fit);
  grid-template-areas:
    "mern"
    "shoppy";
  margin: ${spacingScale.spacing_m};
  @media (min-width: ${mediaQuery.breakpoint1}) {
    grid-template-rows: 2, 1fr, 1fr;
    grid-template-areas: "mern shoppy";
    margin-bottom: ${spacingScale.spacing_xxl};
  }
`
export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    width: 100%;
    height: 100%;
  }
`

export const AppOne = styled(Img)`
  width: 100%;
  height: 100%;
  grid-area: mern;
`

export const AppTwo = styled(Img)`
  width: 100%;
  height: 100%;
  grid-area: shoppy;
`

export const Title = styled.p`
  line-height: 1.28em;
  font-size: 1.25em;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  color: ${Neutral[600]};
  padding: ${spacingScale.spacing_m};
  margin: ${spacingScale.spacing_m};
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-bottom: ${spacingScale.spacing_s};
  }
`

export const Description = styled.p`
  font-size: ${typeScale.paragraph};
  line-height: 1.58em;
  word-break: normal;
  font-family: "krub", sans-serif;
  font-weight: 300;
  color: ${Neutral[500]};
  margin: 0;
  padding: ${spacingScale.spacing_m};
  max-width: 60ch;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin: 0 ${spacingScale.spacing_m};
  }
`
export const ReadMore = styled.p`
  line-height: 1.58em;
  word-break: normal;
  font-family: "krub", sans-serif;
  font-weight: 500;
  margin: ${spacingScale.spacing_m};
  color: ${Neutral[500]};
  text-decoration: underline;
  & :hover {
    color: ${Red[100]};
  }
  @media (min-width: ${mediaQuery.breakpoint1}) {
    padding: ${spacingScale.spacing_m};
    margin-bottom: ${spacingScale.spacing_xs};
  }
`

export const IconWrapper = styled.section`
  display: flex;
  justify-content: right;
  font-size: ${typeScale.paragraph};
  line-height: 1.58em;
  font-family: "krub", sans-serif;
  margin-bottom: ${spacingScale.spacing_m};
  @media (min-width: ${mediaQuery.breakpoint1}) {
    padding: ${spacingScale.spacing_m};
  }
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
  padding-right: ${spacingScale.spacing_xl};
  & :hover {
    fill: ${Red[100]};
    color: ${Red[100]};
    transition: all 0.1s ease;
  }
`

export const AppDetail = styled(Link)`
  text-decoration: none;
`
