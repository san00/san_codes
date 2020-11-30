import styled from "styled-components"
import { mediaQuery, spacingScale } from "../utils"

const GridWrapper = styled.section`
  display: grid;
  gap: 0.8em;
  grid-template-columns: repeat(auto-fit, minmax(0.5fr));
  grid-template-areas:
    "banner"
    "about"
    "projects"
    "aside";
  font-family: "Mukta Vaani", sans-serif;
  font-weight: 300;

  @media (min-width: ${mediaQuery.breakpoint1}) {
    grid-template-columns: 2, 1fr, 2fr;
    grid-template-rows: 2, 1fr, 2fr;
    grid-template-areas:
      "aside banner"
      "projects about";
    margin-bottom: ${spacingScale.spacing_xl};
  }
`

export default GridWrapper
