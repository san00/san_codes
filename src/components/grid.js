import React from "react"

import Aside from "../components/aside"
import Article from "../components/article"
import Banner from "../components/banner"
import About from "./about"

import GridWrapper, {
  Box1Aside,
  Box2Article,
  Box3Banner,
  Box4About,
} from "../styles/components/grid"

function Grid() {
  return (
    <GridWrapper>
      <Box1Aside>
        <Aside />
      </Box1Aside>
      <Box2Article>
        <Article />
      </Box2Article>
      <Box3Banner>
        <Banner />
      </Box3Banner>
      <Box4About>
        <About/>
      </Box4About>
    </GridWrapper>
  )
}

export default Grid
