import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ShoppyContainer, {
  InnerWrapper,
  ShoppyImg,
  ShoppyHeader,
  ShoppyText
} from "../styles/components/shoppyProject"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

function ShoppyProject() {
  const shoppyImage = useStaticQuery(graphql`
    query {
      appImage: file(relativePath: { eq: "shoppy.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!shoppyImage?.appImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <ShoppyContainer>
      <ShoppyImg
        fluid={shoppyImage.appImage.childImageSharp.fluid}
        alt="shopping cart with drinks"
        backgroundColor="#546387"
      ></ShoppyImg>
      <InnerWrapper>
        <ShoppyHeader>Shoppy e-commerce</ShoppyHeader>
        <ShoppyText>
          Buy drinks from the store, add drinks to the cart, then check out and
          pay. The app uses a headless CMS architecture to edit and manage
          content and consumes the API with GraphQl.
        </ShoppyText>
        <ShoppyText>React, GraphQL, Strapi, Stripe, MongoDB </ShoppyText>
        <ShoppyText>social links to go here</ShoppyText>
      </InnerWrapper>
    </ShoppyContainer>
  )
}

export default ShoppyProject
