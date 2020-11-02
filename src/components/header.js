import React from "react"

import HeaderContainer, {
  HeaderNavAlignRight,
  HeaderNavAlignLeft,
  HeaderLink,
} from "../styles/components/header"
import Container from "../styles/global/container"

const Header = () => {
  return (
    <Container small>
      <HeaderContainer>
        <HeaderNavAlignRight>
          <HeaderLink to="/about">About</HeaderLink>
        </HeaderNavAlignRight>
        <HeaderNavAlignLeft>
          <HeaderLink to="/projects">Projects</HeaderLink>
        </HeaderNavAlignLeft>
        <HeaderLink to="/blog">Blog</HeaderLink>
      </HeaderContainer>
    </Container>
  )
}

export default Header
