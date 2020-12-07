import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ShoppyContainer, {
  InnerWrapper,
  ShoppyImg,
  ShoppyHeader,
  ShoppyText,
  Github,
  IconWrapper,
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
        alt="shopping cart app interface"
      ></ShoppyImg>
      <InnerWrapper>
        <ShoppyHeader>Shoppy e-commerce</ShoppyHeader>
        <ShoppyText>
          Buy drinks from the store, add drinks to the cart, then check out and
          pay. The app uses a headless CMS to edit and manage content and uses
          GraphQL to consume the API.
        </ShoppyText>
        <ShoppyText>React, GraphQL, Strapi, Stripe, MongoDB.</ShoppyText>
        <IconWrapper>
          <Github href="https://github.com/san00/online-store">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <title>github repo</title>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            project code
          </Github>
        </IconWrapper>
      </InnerWrapper>
    </ShoppyContainer>
  )
}

export default ShoppyProject
