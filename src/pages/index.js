import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Projects from "../pages/projects"
import AboutMe from "../components/aboutMe"
import TextSection from "../components/textSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe/>
    <Grid />
    <TextSection/>
    <Projects />
  </Layout>
)

export default IndexPage
