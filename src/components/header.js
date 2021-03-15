import React from "react"

import HeaderContainer, {
  HeaderNavAlignRight,
  HeaderLink,
  Logo,
} from "../styles/components/header"
import Container from "../styles/global/container"

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
        {/* <HeaderLink to="/blog" title="blog">
            dev.to - blog
          </HeaderLink> */}
      </HeaderContainer>
    </div>
  )
}

export default Header
