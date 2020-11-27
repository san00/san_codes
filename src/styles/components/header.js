import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"
import { spacingScale, Neutral, Red } from "../utils"

const HeaderContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 5em;
`

export const HeaderNavAlignRight = styled.div`
  margin-left: auto;
  padding-right: ${spacingScale.spacing_s};
`

export const HeaderNavAlignLeft = styled.div`
  padding-right: ${spacingScale.spacing_m};
`

export const HeaderLink = styled(Link)`
  padding: ${spacingScale.spacing_m};
  text-decoration: none;
  color: ${Neutral[600]};
  transition: all 0.1s ease;
  font-family: "Mukta Vaani", sans-serif;
  font-weight: 400;
  &:hover {
    color: ${Red[100]};
  }
`

export const Logo = styled(Link)`
  text-decoration: none;
  color: ${Neutral[600]};
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Quicksand", sans-serif;
`

export const Anchor = styled(AnchorLink)`
  padding: ${spacingScale.spacing_m};
  text-decoration: none;
  color: ${Neutral[600]};
  transition: all 0.1s ease;
  font-family: "Mukta Vaani", sans-serif;
  font-weight: 400;
  &:hover {
    color: ${Red[100]};
  }
`

export default HeaderContainer
