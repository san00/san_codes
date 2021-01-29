import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { typeScale, spacingScale, mediaQuery, Neutral } from "../utils"


const ProjectsWrapper = styled.section`
  grid-area: projects;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  background: linear-gradient(#ff9a9e, #fad0c4);
  transition: 1s ease-in-out;
  & :hover {
    transition: 1s ease-in-out;
    transform: scale(1.03);
  }
`

export const Header = styled.p`
  display: flex;
  align-items: center;
  font-weight:700;
  justify-content: center;
  padding: ${spacingScale.spacing_l};
  color: ${Neutral[600]};
  font-size: ${typeScale.paragraph};
  margin: ${spacingScale.spacing_s};
  height: 4em;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    padding-left: ${spacingScale.spacing_l};
    padding-right: ${spacingScale.spacing_l};
  }
`

export const Anchor = styled(AnchorLink)`
text-decoration: none;
`
export default ProjectsWrapper
