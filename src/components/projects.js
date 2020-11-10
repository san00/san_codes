import React from "react"

import ProjectsWrapper, {
  ProjectsGridHeader,
  ProjectsGridLink,
  ProjectsGridTextOne,
  ProjectsGridTextTwo,
  Triangle,
  InnerContainer,
} from "../styles/components/projects"

function Projects() {
  return (
    <ProjectsWrapper>
      <ProjectsGridLink to="projects">
        <InnerContainer>
          <Triangle>
            <ProjectsGridTextOne>
              Shop a lot, GraphQl, React and Strapi
            </ProjectsGridTextOne>
          </Triangle>
          <Triangle>
            <ProjectsGridTextTwo>MERN job lister, CRUD app</ProjectsGridTextTwo>
          </Triangle>
        </InnerContainer>
        <ProjectsGridHeader>
          Starring the following apps and projects
        </ProjectsGridHeader>
      </ProjectsGridLink>
    </ProjectsWrapper>
  )
}

export default Projects
