import React from "react"
import Layout from "../components/layout"
import Mern from "../components/mern"
import Shoppy from "../components/shoppy"
import { ProjectsText, ProjectsLink } from "../styles/components/projects"
import Heading from "../styles/global/heading"

function Projects() {
  return (
    <Layout>
      <Shoppy />
      <Mern/>
      <ProjectsLink to="/">
        Go back to the home page, its currently nicer there.
      </ProjectsLink>
    </Layout>
  )
}

export default Projects
