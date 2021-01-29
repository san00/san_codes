import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { TextDetail, } from "../styles/components/mernDetail"
import Container from "../styles/global/container"
import Heading from "../styles/global/heading"
import { AboutLink } from "../styles/components/about"

function shoppyApp() {
  return (
    <Layout>
      <SEO title="Shoppy app" />
      <Container>
        <Heading h4>Whoops nothing to see here yet! I'm working on this page </Heading>
        <AboutLink to="/">
          Go back to the home page. It's currently nicer there
        </AboutLink>
      </Container>
    </Layout>
  )
}

export default shoppyApp
