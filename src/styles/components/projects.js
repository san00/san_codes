import styled from "styled-components"
import {typeScale, Neutral, Blue } from "../utils"

const ProjectsWrapper = styled.section`
  grid-area: projects;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${Blue[100]};
`

export const ProjectsText = styled.p`
  color: ${Neutral[600]};
  font-size: ${typeScale.paragraph};
`
export default ProjectsWrapper
