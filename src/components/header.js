import React from "react"

import HeaderContainer, {
  HeaderNavAlignRight,
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
      </HeaderContainer>
    </Container>
  )
}

export default Header
