import styled from "styled-components"
import { typeScale, spacingScale, Neutral, Blue } from "../utils"
import { Link } from "gatsby"

const ProjectsWrapper = styled.section`
  grid-area: projects;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${Blue[100]};
`
export const ProjectsGridHeader = styled.h5`
  color: ${Neutral[600]};
  font-size: 1.25rem;
  margin: ${spacingScale.spacing_s};
  padding-left: ${spacingScale.spacing_l};
  padding-right: ${spacingScale.spacing_l};
  text-align: center;
`

export const ProjectsGridText = styled.p`
  color: ${Neutral[600]};
  font-size: ${typeScale.paragraph};
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
