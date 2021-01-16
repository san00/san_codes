import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import {
  TextDetail,
  DesktopImg,
  MobileImg,
  FormImg,
  ImgWrap,
  FigTxt,
} from "../styles/components/mernDetail"
import Container from "../styles/global/container"
import Heading from "../styles/global/heading"

function MernApp() {
  const mernImage = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "mernDesktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile: file(relativePath: { eq: "mernMobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      form: file(relativePath: { eq: "mernForm.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!mernImage?.desktop.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return (
    <Layout>
      <SEO title="MERN project" />
      <Container>
        <Heading h3>Jobs board</Heading>
        <TextDetail>
          A proof-of-concept CRUD app to manage a selection of job listings.
          <br />
          <b>
            Tech: MongoDB Atlas, Express, React, NodeJS, Jest & Enzyme, Axios,
            Heroku, Sass, BEM, Flexbox.
          </b>
          <DesktopImg
            fluid={mernImage.desktop.childImageSharp.fluid}
            alt="App interface showing a list of jobs"
          ></DesktopImg>
          <FigTxt>Responsive UI, desktop screen </FigTxt>
        </TextDetail>

        <Heading h5>Why the MERN stack?</Heading>
        <TextDetail>
          The project was originally a fullstack solution for a tech test and
          was partially completed. <br></br>Although I didn’t get the job, I
          wanted to finish the app and saw it as a good opportunity to continue
          learning & improving my skills. As the original challenge didn’t
          stipulate any specific technologies or frameworks. I chose the MERN
          stack, as I'd been using JavaScript, learning React and could use
          <b> modern hooks-based React components</b> on the front-end &{" "}
          <b> NodeJS</b> for the API & CRUD functionality on the backend.
        </TextDetail>

        <Heading h5>Challenges & things I'm proud of</Heading>
        <TextDetail>
          Building a responsive & functional application involved lots of design
          & architecture decisions. <br /> Following SOLID principles, writing
          resuable code, adding accessibility features and getting a better
          understanding of scope, props drilling & using promises are some of
          the things I'm proud of.
        </TextDetail>
        <Heading h5>Lessons learned</Heading>
        <TextDetail>
          Separating concerns, creating reusable components, client & server
          side form validation. <br />
          TDD - unit testing with Jest & Enzyme and understanding what to test,
          managing & updating state in React, extracting reusable functionality
          with custom hooks, adding responsiveness, achieving better UI
          design's, creating API routes & connecting to a database.
        </TextDetail>
        <ImgWrap>
          <MobileImg
            fluid={mernImage.mobile.childImageSharp.fluid}
            alt="small app interface showing a list of jobs"
          ></MobileImg>
          <FigTxt>Responsive UI, mobile screen</FigTxt>
          <FormImg
            fluid={mernImage.form.childImageSharp.fluid}
            alt="App interface user form"
          ></FormImg>
          <FigTxt>User form</FigTxt>
        </ImgWrap>
      </Container>
    </Layout>
  )
}

export default MernApp
