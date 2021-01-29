import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ImgWrapper, {
  AboutGridLink,
  AboutGridTitle,
  AboutGridText,
  ColourWrap,
  TextWrap,
} from "../styles/components/about"

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

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      mural: file(relativePath: { eq: "mural.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.mural?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <ColourWrap>
      <ImgWrapper
        fluid={data.mural.childImageSharp.fluid}
        alt="Colourful painting on a wall"
      >
        <AboutGridLink to="about" title="about me">
          <TextWrap>
            <AboutGridTitle >
              About
            </AboutGridTitle>
            <AboutGridText >
              The true tales of Osania the front-end developer
            </AboutGridText>
          </TextWrap>
        </AboutGridLink>
      </ImgWrapper>
    </ColourWrap>
  )
}

export default About
