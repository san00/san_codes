import styled from "styled-components"
import { mediaQuery, spacingScale } from "../utils"

const ProjectGrid = styled.section`
  display: grid;
  gap: 0.8em;
  grid-template-columns: repeat(auto-fit);
  grid-template-areas:
    "shoppyApp"
    "mernProject";

  @media (min-width: ${mediaQuery.breakpoint1}) {
    grid-template-rows: 2, 1fr, 1fr;
    grid-template-areas: " shoppyApp mernProject";
  }
`
export default ProjectGrid