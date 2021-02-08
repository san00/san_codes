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
          Hi I’m Osania. I’m a software developer. I’ve made the leap to tech
          after working in non-tech roles and I’m open to new opportunities. I
          really enjoy the creative side of front-end development and <TalkLink href="https://www.youtube.com/watch?v=SC18G2ksrDI">gave my
          first ever tech talk on CSS specificity here.</TalkLink> 
        </BioText>
        <Wrap>
          <GoalsHeader>Goals for 2021</GoalsHeader>
          <Goals>
            Learn in public.
            <Goals>Write & share more content,</Goals>Land a software dev role.
          </Goals>
        </Wrap>
        <BioText>
          Continuing to learn React and also now experimenting with GSAP
          animations. This site is a place for my projects, code, writing,
          and learning. Including other interesting things I might like, appreciate and
          post on here from time to time. <br />
          Welcome to my little piece of the web.
          <Twitter href="https://twitter.com/sancodes">
            Say hello @sancodes
          </Twitter>
        </BioText>
        <AboutLink to="/">Go back to the home page. It's currently nicer there.</AboutLink>
      </Container>
    </Layout>
  )
}

export default About
