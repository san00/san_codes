import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import AboutMe from "../components/aboutMe"
import FeaturedProjects from "../components/featuredProjects"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <AboutMe/>
    {/* <Grid /> */}
    <FeaturedProjects></FeaturedProjects>
  </Layout>
)

export default IndexPage
