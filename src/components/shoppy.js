import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ShoppyWrapper, {
  InnerWrapper,
  ShoppyImg,
  ShoppyHeader,
  ShoppyText,
} from "../styles/components/shoppy"

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

function Shoppy() {
  const shoppyImage = useStaticQuery(graphql`
    query {
      appImage: file(relativePath: { eq: "shoppy.png" }) {
        childImageSharp {
          fluid {
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
    <ShoppyWrapper>
      <p>
        <ShoppyImg
          fluid={shoppyImage.appImage.childImageSharp.fluid}
          alt="shopping cart with drinks"
          backgroundColor="#546387"
        ></ShoppyImg>
      </p>
      <InnerWrapper>
        <ShoppyHeader>Shoppy e-commerce</ShoppyHeader>
        <ShoppyText>
          Buy drinks from the store by adding them to a cart and checking out.
          The app uses a headless CMS architecture to edit and manage content.
          Consuming the API using GraphQl.
        </ShoppyText>
        <ShoppyText>React, GraphQL, Strapi, Stripe, MongoDB </ShoppyText>
        <ShoppyText>social links to go here</ShoppyText>
      </InnerWrapper>
    </ShoppyWrapper>
  )
}

export default Shoppy
