import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Posts from "../components/posts"
import SEO from "../components/seo"
import Container from "../styles/global/container"

function Blog() {
  return (
    <Layout>
      <SEO title="blog" />
      <Container>
        <h1>hellooo it's a blog</h1>
        <Posts />
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Layout>
  )
}

export default Blog
