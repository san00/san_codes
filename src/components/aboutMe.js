import React from "react"

import {
  AboutMeText,
  BioLink,
  BlogLink,
  TalkLink,
  Text,
} from "../styles/components/aboutMe"
import Container from "../styles/global/container"

function AboutMe() {
  return (
    <Container>
      <AboutMeText>Hey, I'm Osania.</AboutMeText>
      <Text>
        I'm a software dev. I make things for the web. I'm open to
        opportunities.
        <BioLink to="/about" title="about me">
          Learn more about me,
        </BioLink>
        view some of my projects,
        <TalkLink href="https://www.youtube.com/watch?v=SC18G2ksrDI">
          watch my talk on CSS specificity,
        </TalkLink>
        <BlogLink href="https://dev.to/san00">read a post</BlogLink>
        or say hi.
      </Text>
    </Container>
  )
}

export default AboutMe
