import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedProjects from "../components/featuredProjects"
import  TextSection  from "../components/textSection"

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <TextSection/>
    <FeaturedProjects/>
  </Layout>
)

export default Projects
