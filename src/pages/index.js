import React from "react"
import { Link } from "gatsby"

import Aside from "../components/aside"
import Article from "../components/article"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Aside/>
    <Article/>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
