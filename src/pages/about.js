import React from "react"

import Layout from "../components/layout"
import Container from "../styles/global/container"
import { AboutText, AboutLink } from "../styles/components/about"

function About() {
  return (
    <Layout>
      <Container>
        <AboutText>
          Hello! I'm currently working on this page. <br /> For now, heres a
          random dad joke:
        </AboutText>
        <AboutText>
          What did one plate say to the other plate? <br /> Dinner is on me!
        </AboutText>
        <AboutLink to="/">
          Go back to the home page. It's currently nicer there
        </AboutLink>
      </Container>
    </Layout>
  )
}

export default About
