import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import AboutMe from "../components/aboutMe"
import TextSection from "../components/textSection"
import ShoppyProject from "../components/shoppyProject"
import FeaturedProjects from "../components/featuredProjects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe/>
    <Grid />
    <TextSection/>
    <FeaturedProjects/>
  </Layout>
)

export default IndexPage
