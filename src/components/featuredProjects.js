import React from "react"

import ShoppyProject from "./shoppyProject"
import ColourWrapper from "../styles/components/featuredProjects"
import MernProject from "./mernProject"
import Container from "../styles/global/container"

function FeaturedProjects() {
  return (
    <Container>
      <ColourWrapper>
        <ShoppyProject />
        <MernProject />
      </ColourWrapper>
    </Container>
  )
}

export default FeaturedProjects
