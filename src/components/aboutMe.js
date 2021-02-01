import React from "react"

import { AboutMeText, BioLink, Text } from "../styles/components/aboutMe"
import Container from "../styles/global/container"

function AboutMe() {
  return (
    <Container>
      <AboutMeText>Hey, I'm Osania.</AboutMeText>
      <Text>
        I'm a software developer, building & making things for the web.
        <BioLink to="/about" title="about me">
          Learn more about me,
        </BioLink>
         view some of my projects, read a post or say hi.
      </Text>
    </Container>
  )
}

export default AboutMe
