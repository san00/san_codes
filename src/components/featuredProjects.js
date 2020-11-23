import React from "react"

import ShoppyProject from "./shoppyProject"
import ColourWrapper from "../styles/components/featuredProjects"
import MernProject from "./mernProject"

function FeaturedProjects() {
  return (
    <div>
      <ColourWrapper>
        <ShoppyProject />
        <MernProject />
      </ColourWrapper>
    </div>
  )
}

export default FeaturedProjects
