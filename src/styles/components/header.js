import { Link } from "gatsby"
import styled from "styled-components"
import { spacingScale, Neutral, Red, Green } from "../utils"

const HeaderContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color:${Green[100]};
  height:5em;
`

export const HeaderNavAlignRight = styled.div`
  margin-left: auto;
  padding-right: ${spacingScale.spacing_m};
`

export const HeaderNavAlignLeft = styled.div`
  padding-right: ${spacingScale.spacing_m};
`

export const HeaderTitle = styled.h1`
  font-size: 2.441rem;
  font-weight: 700;
  font-family: "Karla, sans-serif";
`

export const HeaderLink = styled(Link)`
  padding:${spacingScale.spacing_m};
  text-decoration: none;
  color: ${Neutral[600]};
  transition: all 0.1s ease;
  &:hover {
    color: ${Red[100]};
  }
`
export const HeaderTitleLink = styled(Link)`
  text-decoration: none;
  color: ${Neutral[600]};
`
export const SocialLink = styled.a`
  text-decoration: none;
  color: ${Neutral[600]};
  transition: all 0.1s ease;
  &:hover {
    color: ${Red[100]};
  }
`
export default HeaderContainer