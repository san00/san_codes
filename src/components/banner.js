import React from "react"

import BannerWrapper, { Circle } from "../styles/components/banner"
import Container from "../styles/global/container"

function Banner() {
  return (
    <Container>
      <BannerWrapper>
        <Circle>
          <p>sancodes presents</p>
        </Circle>
      </BannerWrapper>
    </Container>
  )
}

export default Banner
