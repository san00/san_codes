import styled from "styled-components"
import { spacingScale, typeScale, mediaQuery, Neutral } from "../utils"
import Img from "gatsby-image"

export const DesktopImg = styled(Img)`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-bottom: ${spacingScale.spacing_m};
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-bottom: ${spacingScale.spacing_xl};
  }
`

export const MobileImg = styled(Img)`
  width: 30%;
  box-shadow: 0 1px 6px 0 hsla(0, 0%, 0%, 0.2);
`

export const FormImg = styled(Img)`
  width: 60%;
  box-shadow: 0 1px 6px 0 hsla(0, 0%, 0%, 0.2);
`

export const ImgWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${spacingScale.spacing_m};
  @media (min-width: ${mediaQuery.breakpoint1}) {
    flex-direction: column;
  }
`

export const TextDetail = styled.p`
  font-size: ${typeScale.paragraph};
  line-height: 1.58em;
  overflow-wrap: break-word;
  word-break: normal;
  font-family: "krub", sans-serif;
  font-weight: 300;
  color: ${Neutral[500]};
  margin-bottom: ${spacingScale.spacing_l};
  @media (min-width: ${mediaQuery.breakpoint1}) {
    padding-left: ${spacingScale.spacing_m};
    padding-right: ${spacingScale.spacing_m};
    margin-bottom: ${spacingScale.spacing_l};
  }
`

export const TextDetailLast = styled.p`
  font-size: ${typeScale.paragraph};
  line-height: 1.58em;
  overflow-wrap: break-word;
  word-break: normal;
  font-family: "krub", sans-serif;
  font-weight: 300;
  color: ${Neutral[500]};
  margin-bottom: ${spacingScale.spacing_l};
  @media (min-width: ${mediaQuery.breakpoint1}) {
    padding-left: ${spacingScale.spacing_m};
    padding-right: ${spacingScale.spacing_m};
    margin-bottom: ${spacingScale.spacing_xxl};
  }
`
export const TextDetailFirst = styled.p`
  font-size: ${typeScale.paragraph};
  line-height: 1.58em;
  overflow-wrap: break-word;
  word-break: normal;
  font-family: "krub", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 0;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    padding-left: ${spacingScale.spacing_m};
    padding-right: ${spacingScale.spacing_m};
  }
`

export const FigTxt = styled.p`
  font-size: ${typeScale.helperText};
  line-height: 1.58em;
  word-break: normal;
  font-family: "krub", sans-serif;
  font-weight: 500;
  color: ${Neutral[500]};
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-bottom: ${spacingScale.spacing_xxl};
  }
`

export const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-left: ${spacingScale.spacing_xl};
    margin-right: ${spacingScale.spacing_xl};
  }
`

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${spacingScale.spacing_xl};
  margin-right: ${spacingScale.spacing_xl};
  margin-bottom: ${spacingScale.spacing_m};
`

export const AppHeading = styled.p`
  font-size: 1.5em;
  font-family: "krub", sans-serif;
  font-weight: 500;
  margin-bottom: 0;
  padding-left: ${spacingScale.spacing_m};
  padding-right: ${spacingScale.spacing_m};
`

export const Tech = styled.p`
  font-size: ${typeScale.helperText};
  line-height: 1.58em;
  word-break: normal;
  font-family: "krub", sans-serif;
  font-weight: 500;
  color: ${Neutral[500]};
  text-align: center;
  margin-bottom: ${spacingScale.spacing_l};
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-bottom: ${spacingScale.spacing_xl};
  }
`
