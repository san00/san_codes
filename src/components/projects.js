import React from "react"

import ProjectsWrapper, {
  ProjectsGridHeader,
  ProjectsGridTextOne,
  ProjectsGridTextTwo,
  Triangle,
  InnerContainer,
} from "../styles/components/projects"

function Projects() {
  return (
    <ProjectsWrapper>
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
    </ProjectsWrapper>
  )
}

export default Projects
