import React from "react"
import Seo from "../components/seo"

import Layout from "../components/layout"
import Container from "../styles/global/container"
import { AboutLink } from "../styles/components/about"
import {
  BioText,
  Wrap,
  Twitter,
  TalkLink,
  Bckgrnd,
  BioHeader,
} from "../styles/components/aboutMe"

function About() {
  return (
    <Layout>
      <Seo title="About" />
      <Container>
        <Bckgrnd>
          <Wrap>
            <BioHeader>About </BioHeader>
            <BioText>
              Hi I’m Osania. I’m a software developer. <br/>Welcome to my little
              piece of the web. This site is a place for my projects, writing,
              learning and musings.
              <Twitter href="https://twitter.com/sancodes">
                Say hello @sancodes
              </Twitter>
              or watch my first ever tech talk
              <TalkLink href="https://www.youtube.com/watch?v=SC18G2ksrDI">
                on CSS specificity.
              </TalkLink>
            </BioText>
            <AboutLink to="/">
          Go back to the home page. 
        </AboutLink>
          </Wrap>
        </Bckgrnd>
      </Container>
    </Layout>
  )
}

export default About
