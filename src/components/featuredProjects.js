import React from "react"

import ShoppyProject from "./shoppyProject"
import ColourWrapper from "../styles/components/featuredProjects"
import MernProject from "./mernProject"
import Container from "../styles/global/container"
import ProjectGrid from "../styles/components/projectGrid"

function FeaturedProjects() {
  return (
    <Container>
      <ColourWrapper id="projects">
        <ProjectGrid>
          <ShoppyProject />
          <MernProject />
        </ProjectGrid>
      </ColourWrapper>
    </Container>
  )
}

export default FeaturedProjects
