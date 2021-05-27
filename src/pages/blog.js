import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { InnerWrap, TextWrap } from "../styles/components/columnLayout"
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
            tags
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="blog" />
      <Container>
        <TextWrap>
          <InnerWrap>
            {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
              <article key={id}>
                <Link to={frontmatter.slug}>
                  <h2>{frontmatter.title}</h2>
                  <p>{frontmatter.tags}</p>
                </Link>
              </article>
            ))}
            <InnerWrap>
              <Link to="/">Go back to the homepage</Link>
            </InnerWrap>
          </InnerWrap>
        </TextWrap>
      </Container>
    </Layout>
  )
}

export default Blog
