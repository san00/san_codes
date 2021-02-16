import styled from "styled-components"
import { spacingScale, Neutral, Red, mediaQuery } from "../utils"
import { Link } from "gatsby"

export const AboutMeText = styled.h1`
  color: ${Neutral[600]};
  word-break: normal;
  padding: ${spacingScale.spacing_xs};
  margin: 0;
  font-family: "krub", sans-serif;
  font-weight: 500;
  line-height: 1.28em;
  text-align: center;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    text-align: left;
  }
`

export const Text = styled.p`
  font-weight: 100;
  color: ${Neutral[600]};
  word-break: normal;
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.58em;
  font-family: "krub", sans-serif;
  padding-left: ${spacingScale.spacing_xs};
  margin: 0;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    text-align: left;
  }
`

export const BioText = styled.p`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.58em;
  color: ${Neutral[600]};
  margin-left: ${spacingScale.spacing_xl};
  margin-right: ${spacingScale.spacing_xl};
  word-break: normal;
  padding: ${spacingScale.spacing_l};
  font-family: "krub", sans-serif;
  font-weight: 300;
  max-width: 65ch;
`
export const BioLink = styled(Link)`
  padding: ${spacingScale.spacing_xs};
  text-align: center;
  color: ${Red[100]};
`

export const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
`
export const GoalsHeader = styled.p`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.58em;
  color: ${Neutral[600]};
  margin-left: ${spacingScale.spacing_xl};
  margin-right: ${spacingScale.spacing_xl};
  word-break: normal;
  padding: ${spacingScale.spacing_m};
  font-family: "krub", sans-serif;
  font-weight: 700;
  margin: 0;
  padding: 0;
`
export const Goals = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.58em;
  color: ${Neutral[600]};
  margin-left: ${spacingScale.spacing_xl};
  margin-right: ${spacingScale.spacing_xl};
  word-break: normal;
  padding: ${spacingScale.spacing_m};
  font-family: "krub", sans-serif;
  font-weight: 300;
  margin: 0;
  padding: 0;
`

export const Twitter = styled.a`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.58em;
  color: ${Neutral[600]};
  padding: ${spacingScale.spacing_xs};
  font-family: "krub", sans-serif;
  font-weight: 300;
  &:hover {
    color: ${Red[100]};
  }
`

export const TalkLink = styled.a`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.58em;
  color: ${Neutral[600]};
  font-family: "krub", sans-serif;
  font-weight: 300;
  &:hover {
    color: ${Red[100]};
  }
`