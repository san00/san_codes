import styled from "styled-components"
import { spacingScale, typeScale, mediaQuery, Neutral } from "../utils"
import Img from "gatsby-image"

export const DesktopImg = styled(Img)`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-bottom: ${spacingScale.spacing_xl};
`

export const MobileImg = styled(Img)`
  max-width: 30%;
  margin-bottom: ${spacingScale.spacing_l};
  box-shadow: 0 1px 6px 0 hsla(0, 0%, 0%, 0.2);
  @media (min-width: ${mediaQuery.breakpoint1}) {
    min-width: 30%;
  }
`

export const FormImg = styled(Img)`
  width: 60%;
  box-shadow: 0 1px 6px 0 hsla(0, 0%, 0%, 0.2);
  @media (min-width: ${mediaQuery.breakpoint1}) {
    min-width: 30%;
  }
`

export const ImgWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    flex-direction: column;
  }
`

export const TextDetail = styled.p`
  font-size: ${typeScale.paragraph};
  padding-bottom: ${spacingScale.spacing_l};
  line-height: 1.58em;
  word-break: normal;
  font-family: "krub", sans-serif;
  font-weight: 300;
  color: ${Neutral[500]};
  text-align: center;
  width:65ch;
`

export const FigTxt = styled.p`
  font-size: ${typeScale.helperText};
  line-height: 1.58em;
  word-break: normal;
  font-family: "krub", sans-serif;
  font-weight: 500;
  color: ${Neutral[500]};
`

export const InnerWrap = styled.div`
padding: ${spacingScale.spacing_m};
`

export const AppHeading = styled.p`
font-size:1.5em;
font-family: "krub", sans-serif;
font-weight: 500;
`