import styled from "styled-components"
import { typeScale, spacingScale, mediaQuery, Neutral, Blue } from "../utils"
import { Link } from "gatsby"

const ProjectsWrapper = styled.section`
  grid-area: projects;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${Blue[100]};
  position: relative;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${spacingScale.spacing_s};
`

export const Triangle = styled.div`
  width: 100;
  height: 100;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid black;
`

export const ProjectsGridHeader = styled.h5`
  color: ${Neutral[600]};
  font-size: 1.25rem;
  margin: ${spacingScale.spacing_s};
  padding-left: ${spacingScale.spacing_l};
  padding-right: ${spacingScale.spacing_l};
  text-align: center;
`

export const ProjectsGridTextOne = styled.p`
  color: ${Neutral[100]};
  font-size: ${typeScale.paragraph};
  font-weight: 400;
  position: absolute;
  left: 60px;
  bottom: 10px;
  word-break: normal;
  visibility: hidden;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    left: 77px;
    bottom: 80px;
    text-align: center;
    visibility: visible;
  }
`
export const ProjectsGridTextTwo = styled.p`
  color: ${Neutral[100]};
  font-size: ${typeScale.paragraph};
  font-weight: 400;
  position: absolute;
  left: 80px;
  bottom: 40px;
  visibility: hidden;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    left: 97px;
    bottom: 50px;
    text-align: center;
    font-size: 1.125em;
    visibility: visible;
  }
`

export const ProjectsGridLink = styled(Link)`
  text-decoration: none;
`

export const ProjectsText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: ${Neutral[600]};
  word-break: normal;
`

export const ProjectsLink = styled(Link)`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`

export default ProjectsWrapper
