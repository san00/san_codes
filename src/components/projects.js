import React from "react"

import ProjectsWrapper, { Header, Anchor } from "../styles/components/projects"

function Projects() {
  return (
    <ProjectsWrapper title="view projects">
      <Anchor to="/#projects">
        <Header>Apps and projects</Header>
      </Anchor>
    </ProjectsWrapper>
  )
}

export default Projects
