import React from "react"
import AsideWrapper, {
  Rectangle,
  Circle,
  AsideText,
} from "../styles/components/aside"

function Aside() {
  return (
    <AsideWrapper>
      <Rectangle></Rectangle>
      <Circle></Circle>
      <AsideText>Live in the browser!</AsideText>
    </AsideWrapper>
  )
}

export default Aside
