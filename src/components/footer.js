import React from "react"
import { Twitter, Github, LinksContainer } from "../styles/components/footer"
import Container from "../styles/global/container"

function Footer() {
  return (
    <nav>
      <Container>
        <LinksContainer id="contact">
          <Twitter href="https://twitter.com/sancodes">Twitter</Twitter>
          <Github href="https://github.com/san00">Github</Github>
        </LinksContainer>
      </Container>
    </nav>
  )
}

export default Footer
