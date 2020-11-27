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
      <HeaderContainer>
        <Logo to="/">sancodes</Logo>
        <HeaderNavAlignRight>
          <HeaderLink to="/about">about</HeaderLink>
        </HeaderNavAlignRight>
        <Anchor to="/#projects">projects</Anchor>
        <Anchor to="/#contact">connnect</Anchor>
      </HeaderContainer>
    </Container>
  )
}

export default Header
