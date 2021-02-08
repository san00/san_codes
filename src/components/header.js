import React from "react"

import HeaderContainer, {
  HeaderNavAlignRight,
  HeaderLink,
  Logo,
  Anchor,
} from "../styles/components/header"
import Container from "../styles/global/container"

const Header = () => {
  return (
    <Container small>
      <Logo to="/" title="home">
        sancodes
      </Logo>
      <HeaderContainer>
        <HeaderNavAlignRight>
          <HeaderLink to="/about" title="about me">
            about
          </HeaderLink>
        </HeaderNavAlignRight>
        <Anchor to="/#projects" title="view projects">
          projects
        </Anchor>
        <Anchor to="/#contact" title="contact me">
          connnect
        </Anchor>
        <HeaderLink to="/blog" title="blog">
            blog
          </HeaderLink>
      </HeaderContainer>
    </Container>
  )
}

export default Header
