import styled from "styled-components"

const GridWrapper = styled.section`
  display: grid;
  gap: 0.5em;
  grid-template-rows: auto;
  grid-template-columns: auto;
  grid-template-areas:
    "banner"
    "about"
    "article"
    "aside ";
`

export const Box1Aside = styled.div`
  grid-area: aside;
`
export const Box2Article = styled.div`
  grid-area: article;
`
export const Box3Banner = styled.div`
  grid-area: banner;
`
export const Box4About = styled.div`
  grid-area: about;
`

export default GridWrapper
