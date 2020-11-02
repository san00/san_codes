import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ImageBkGrndWrapper from "../styles/components/background-image"

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

const ImageBkgrnd = () => {
  const data = useStaticQuery(graphql`
    query {
      explorerImage: file(relativePath: { eq: "explorer.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.explorerImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <ImageBkGrndWrapper fluid={data.explorerImage.childImageSharp.fluid}>
     <p>About</p>
    </ImageBkGrndWrapper>
  )
}

export default ImageBkgrnd
