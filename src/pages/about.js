import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Container from "../styles/global/container"
import { AboutLink } from "../styles/components/about"
import { Bio } from "../styles/components/aboutMe"

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Bio>
          Hey, I'm Osania. I've retooled as a software dev and now build & make
          things with code. <br />
          This site is a place for my projects, code, learning and musings on
          things I might like and post on here from time to time.
        </Bio>
        <Bio>
          Design & UX are also my thing. And I really hate sites that require
          you to sign up for an account. Hey, I'm happy to talk about it.
        </Bio>
        <AboutLink to="/">
          Go back to the home page. It's currently nicer there
        </AboutLink>
      </Container>
    </Layout>
  )
}

export default About
