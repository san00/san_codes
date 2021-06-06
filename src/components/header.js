import React from "react"

import HeaderContainer, {
  HeaderNavAlignRight,
  HeaderLink,
  Logo,
} from "../styles/components/header"

const Header = () => {
  return (
    <div>
      
      <HeaderContainer>
      <Logo to="/" title="home">
        sancodes
      </Logo>
        <HeaderNavAlignRight>
          <HeaderLink to="/about" title="about me">
            about
          </HeaderLink>
        </HeaderNavAlignRight>
      </HeaderContainer>
    </div>
  )
}

export default Header
