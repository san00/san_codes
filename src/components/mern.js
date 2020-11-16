import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MernWrapper, {
  InnerWrapper,
  MernImg,
  MernHeader,
  MernText,
} from "../styles/components/mern"

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

function Mern() {
  const mernImage = useStaticQuery(graphql`
    query {
      appImage: file(relativePath: { eq: "mern.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!mernImage?.appImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <MernWrapper>
      <InnerWrapper>
        <MernHeader>MERN vacancy manager</MernHeader>
        <MernText>
          Create, read, update and delete (CRUD) a list of job vacancies. The
          app uses a NoSQL database to manage content. Consumed through REST API
          endpoints.
        </MernText>
        <MernText>MongoDB, Express, React, Node </MernText>
        <MernText>social links to go here</MernText>
      </InnerWrapper>
      <p>
        <MernImg
          fluid={mernImage.appImage.childImageSharp.fluid}
          alt="A list with job information"
        ></MernImg>
      </p>
    </MernWrapper>
  )
}

export default Mern
