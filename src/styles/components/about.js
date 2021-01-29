import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { Red, Neutral, spacingScale } from "../utils"

const ImgWrapper = styled(BackgroundImage)`
  grid-area: about;
  width: 100%;
  height: 40vh;
  background-position: center;
`
export const AboutGridLink = styled(Link)`
  text-decoration: none;
`
export const AllText = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  padding: ${spacingScale.spacing_xl};
`

export const AboutGridHeader = styled.h2`
  font-size: 2.441rem;
  font-weight: 700;
  color: ${Neutral[600]}; ;
`

export const AboutGridTitle = styled.p`
  font-size: 1.563rem;
  font-weight: 400;
  color: ${Neutral[600]};
  visibility: hidden;
`

export const AboutGridText = styled.p`
  font-size: 1.6rem;
  color: ${Red[200]};
  padding-left: ${spacingScale.spacing_m};
  padding-right: ${spacingScale.spacing_m};
  margin: ${spacingScale.spacing_l};
  word-break: normal;
  visibility: hidden;
`
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacingScale.spacing_xl};
`

export const ColourWrap = styled.div`
  background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8));
`
export const AboutLink = styled(Link)`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`

export const AboutText = styled.p`
  text-align: center;
  font-size: 2.441rem;
  color: ${Neutral[600]};
  word-break: normal; ;
`
export default ImgWrapper
