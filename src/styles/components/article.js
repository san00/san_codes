import styled from "styled-components"
import { spacingScale, typeScale, Neutral, Blue } from "../utils"

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: ${spacingScale.spacing_l};
  background:${Blue[100]};
`

export const ArticleText = styled.p`
  color: ${Neutral[600]};
  font-size: ${typeScale.paragraph};
`
export default ArticleWrapper
