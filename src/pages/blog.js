import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../styles/global/container"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="blog"/>
      <Container>
        {data.allMdx.nodes.map(({ id, frontmatter }) => (
          <article key={id}>
            <Link to={frontmatter.slug}>
              <h2>{frontmatter.title}</h2>
            </Link>
          </article>
        ))}
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Layout>
  )
}

export default Blog
