import React from "react"

import HeaderContainer, {
  HeaderNavAlignRight,
  HeaderLink,
  Logo,
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
        <HeaderLink to="/projects" title="view projects">
          projects
        </HeaderLink>
        <HeaderLink to="/blog" title="blog">
            blog
          </HeaderLink>
      </HeaderContainer>
    </Container>
  )
}

export default Header
