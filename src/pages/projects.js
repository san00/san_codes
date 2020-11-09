import React from "react"
import Layout from "../components/layout"
import { ProjectsText, ProjectsLink } from "../styles/components/projects"

function Projects() {
  return (
    <Layout>
      <ProjectsText>
        Hi There!, I'm working on this projects page, but for now, heres a
        random dad joke:{" "}
      </ProjectsText>
      <ProjectsText>
        What did one plate say to the other plate? Dinner is on me!
      </ProjectsText>
      <ProjectsLink to="/">
        Go back to the home page, its currently nicer there.
      </ProjectsLink>{" "}
      <br />
    </Layout>
  )
}

export default Projects
