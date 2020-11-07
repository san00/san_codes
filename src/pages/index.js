import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid/>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
