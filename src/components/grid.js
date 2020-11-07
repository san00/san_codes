import React from "react"

import Aside from "../components/aside"
import Projects from "./projects"
import Banner from "../components/banner"
import About from "./about"

import GridWrapper from "../styles/components/grid"
import Container from "../styles/global/container"

function Grid() {
  return (
    <Container>
      <GridWrapper>
        <Aside />
        <Projects />
        <Banner />
        <About />
      </GridWrapper>
    </Container>
  )
}

export default Grid
