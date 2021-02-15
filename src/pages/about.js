import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Container from "../styles/global/container"
import { AboutLink } from "../styles/components/about"
import {
  BioText,
  Goals,
  Wrap,
  GoalsHeader,
  Twitter,
  TalkLink,
} from "../styles/components/aboutMe"

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <BioText>
          Hi I’m Osania. I’m a software developer. Welcome to my little piece of
          the web. This site is a place for my projects, writing, learning and
          musings. <br />
          <Twitter href="https://twitter.com/sancodes">
            Say hello @sancodes
          </Twitter>
          or watch my first ever tech talk <br/>
          <TalkLink href="https://www.youtube.com/watch?v=SC18G2ksrDI">
           on CSS specificity.
          </TalkLink>
        </BioText>
        <AboutLink to="/">
          Go back to the home page. It's currently nicer there.
        </AboutLink>
      </Container>
    </Layout>
  )
}

export default About
