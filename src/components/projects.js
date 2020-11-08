import React from "react"

import ProjectsWrapper, {
  ProjectsGridHeader,
  ProjectsGridLink,
  ProjectsGridText,
} from "../styles/components/projects"

function Projects() {
  return (
    <ProjectsWrapper>
      <ProjectsGridHeader>
        Starring the following apps and projects
      </ProjectsGridHeader>
      <ProjectsGridLink to="projects">
        <ProjectsGridText>
          Shop a lot, GraphQl, React and Strapi
        </ProjectsGridText>
      </ProjectsGridLink>
      <ProjectsGridLink to="projects">
        <ProjectsGridText> MERN job lister, a CRUD app</ProjectsGridText>
      </ProjectsGridLink>
    </ProjectsWrapper>
  )
}

export default Projects
