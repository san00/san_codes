import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe"
import FeaturedProjects from "../components/featuredProjects"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <AboutMe />
    <FeaturedProjects />
  </Layout>
)

export default IndexPage
