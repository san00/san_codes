import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Container from "../styles/global/container"
import {
  TextDetailFirst,
  InnerWrap,
  TextWrap,
} from "../styles/components/columnLayout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Container>
      <p>Posted by {post.frontmatter.author}</p>
      <TextDetailFirst>{post.frontmatter.title}</TextDetailFirst>
      <TextWrap>
        <InnerWrap>
          <MDXRenderer>{post.body}</MDXRenderer>
          <Link to="/blog">back to all posts</Link>
        </InnerWrap>
      </TextWrap>
    </Container>
  </Layout>
)

export default PostTemplate
