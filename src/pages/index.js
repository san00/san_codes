import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Projects from "../pages/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid />
    <Projects />
  </Layout>
)

export default IndexPage
