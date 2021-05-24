import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../styles/global/container"
import {
  TextDetailFirst,
  DesktopImg,
  AppHeading,
  InnerWrap,
  TextWrap,
  Tech,
} from "../styles/components/columnLayout"
function ShoppyApp() {
  const shoppyImage = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "e-comm.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  if (!shoppyImage?.desktop.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return (
    <Layout>
      <SEO title="Shoppy app" />
      <TextDetailFirst>A proof-of-concept e-commerce app.</TextDetailFirst>
      <Tech>
        Tech: Strapi, React, GraphQL, MongoDB, Stripe, Styled components,
        Flexbox.
      </Tech>
      <DesktopImg
        fluid={shoppyImage.desktop.childImageSharp.fluid}
        alt="App UI showing a list of jobs with a blue background"
      />
      <Container>
        <TextWrap>
          <InnerWrap>
            <AppHeading>Nothing to read yet! I'm working on this page</AppHeading>
          </InnerWrap>
        </TextWrap>
      </Container>
    </Layout>
  )
}

export default ShoppyApp
