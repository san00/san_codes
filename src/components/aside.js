import React from "react"
import AsideWrapper, {
  Rectangle,
  Circle,
  AsideText,
} from "../styles/components/aside"

import Container from "../styles/global/container"

function Aside() {
  return (
    <Container>
      <AsideWrapper>
        <Rectangle></Rectangle>
        <Circle></Circle>
        <AsideText>Live in the browser!</AsideText>
      </AsideWrapper>
    </Container>
  )
}

export default Aside
