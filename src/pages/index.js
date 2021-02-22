import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import AboutMe from "../components/aboutMe"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <AboutMe/>
    <Grid />
  </Layout>
)

export default IndexPage
