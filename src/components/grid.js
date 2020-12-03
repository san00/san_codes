import React from "react"

import Projects from "./projects"
import About from "./about"

import GridWrapper from "../styles/components/grid"
import Container from "../styles/global/container"

function Grid() {
  return (
    <Container>
      <GridWrapper>
        <Projects />
        <About />
      </GridWrapper>
    </Container>
  )
}

export default Grid
