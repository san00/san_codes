import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Container from "../styles/global/container"
import { AboutLink } from "../styles/components/about"
import { BioText } from "../styles/components/aboutMe"

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <BioText>
          Hey, I'm Osania. I've re-skilled as a software dev and now build &
          make things with code. This site is a place for my projects, code,
          writing, learning and other interesting things I might like and post
          on here from time to time.
        </BioText>

        <AboutLink to="/">
          Go back to the home page. It's currently nicer there
        </AboutLink>
      </Container>
    </Layout>
  )
}

export default About
