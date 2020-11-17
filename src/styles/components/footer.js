import styled from "styled-components"
import { spacingScale, Neutral, Blue, Red } from "../utils"

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  /* margin: ${spacingScale.spacing_xl}; */
`
export const Twitter = styled.a`
  color: ${Neutral[600]};
  padding: ${spacingScale.spacing_m};
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.2s ease;
  & :hover {
    color: ${Blue[200]};
    border-bottom:3px solid ${Neutral[600]};
  }
`
export const Github = styled.a`
  color: ${Neutral[600]};
  padding: ${spacingScale.spacing_m};
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.2s ease;
  & :hover {
    color: ${Red[100]};
    border-bottom:3px solid ${Neutral[600]};
  }
`
