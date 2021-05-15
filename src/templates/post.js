import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

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
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <p>Posted by {post.frontmatter.author}</p>
    <h1>{post.frontmatter.title}</h1>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Link to="/">back to all posts</Link>
  </Layout>
);

export default PostTemplate;