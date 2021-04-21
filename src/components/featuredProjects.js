import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Wrapper,
  AppOne,
  AppTwo,
  InnerWrapper,
  Title,
  Description,
  AppDetail,
  ReadMore,
} from "../styles/components/featuredProjects"

function FeaturedProjects() {
  const apps = useStaticQuery(graphql`
    query {
      mern: file(relativePath: { eq: "mernBlueBkgrnd.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shoppy: file(relativePath: { eq: "e-comm.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  if (!apps?.mern.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return (
    <div>
      <Wrapper id="projects">
        <AppDetail to="/mernApp/">
          <InnerWrapper>
            <AppOne
              fluid={apps.mern.childImageSharp.fluid}
              alt="App UI showing a list of jobs "
            />
            <Title>Vacancy manager app</Title>
            <Description>
              Create, read, update and delete (CRUD) a list of job vacancies.
              The MERN app uses a NoSQL database, consumed through REST API
              endpoints. MongoDB, Express, React, Node, Heroku, Jest & Enzyme
              unit tests.
            </Description>
            <ReadMore>Read more</ReadMore>
          </InnerWrapper>
        </AppDetail>
        <AppDetail to="/shoppyApp/">
          <InnerWrapper>
            <AppTwo
              fluid={apps.shoppy.childImageSharp.fluid}
              alt="App UI showing a list of jobs "
            />
            <Title>Shoppy e-commerce app</Title>
            <Description>
              Add items to the cart, then check out and pay for drinks using the
              e-store. The app uses a headless CMS to edit and manage content
              and uses GraphQL to consume the API. Strapi, React, GraphQL,
              Stripe, MongoDB.
            </Description>
            <ReadMore>Read more</ReadMore>
          </InnerWrapper>
        </AppDetail>
      </Wrapper>
    </div>
  )
}

export default FeaturedProjects
