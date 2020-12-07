import styled from "styled-components"
import { spacingScale, Neutral, Blue, Red} from "../utils"

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Twitter = styled.a`
  color: ${Neutral[600]};
  padding: ${spacingScale.spacing_m};
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.1s ease;
  & :hover {
    border-bottom:3px solid ${Blue[200]};
    color:${Blue[200]};
  }
`
export const Github = styled.a`
  color: ${Neutral[600]};
  padding: ${spacingScale.spacing_m};
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.1s ease;
  & :hover {
    border-bottom:3px solid ${Red[100]};
    color:${Red[100]};
  }
`
