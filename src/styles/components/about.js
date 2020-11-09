import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { Red,Neutral, spacingScale } from "../utils"

const AboutWrapper = styled(BackgroundImage)`
  grid-area: about;
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-position:center;
  position:relative;
  
`
export const AboutGridLink = styled(Link)`
text-decoration:none;`

export const AboutGridHeader = styled.h2`
text-align:center;
font-size: 2.441rem;
font-weight:700;
color:${Neutral[600]};
;`

export const AboutGridTitle = styled.p`
text-align:left;
padding:${spacingScale.spacing_l};
font-size: 1.563rem;
font-weight:500;
color:${Neutral[600]};
`

export const AboutGridText = styled.p`
text-align:center;
font-size: 2.441rem;
color:${Red[200]};
padding-left:${spacingScale.spacing_m};
padding-right:${spacingScale.spacing_m};
margin:${spacingScale.spacing_l};
word-break:normal;
;`

export const AboutText = styled.p`
text-align:center;
font-size: 2.441rem;
color:${Neutral[600]};
word-break:normal;
;`

export const AboutLink = styled(Link)`
font-size: 1.2rem;
display:flex;
justify-content:center;
`


export default AboutWrapper
