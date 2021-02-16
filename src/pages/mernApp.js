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
  AppHeading,
  InnerWrap,
} from "../styles/components/mernDetail"
import Container from "../styles/global/container"

function MernApp() {
  const mernImage = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "mernBlueBkgrnd.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobile: file(relativePath: { eq: "mernMobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      form: file(relativePath: { eq: "mernForm.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
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
      <DesktopImg
        fluid={mernImage.desktop.childImageSharp.fluid}
        alt="App UI showing a list of jobs with a blue background"
      />
      <Container>
        <ImgWrap>
          <InnerWrap>
            <TextDetail>
              A proof-of-concept MERN CRUD app to manage a selection of job listings.
              <br />
              <b>
                Tech: MongoDB Atlas, Express, React, NodeJS, Jest and Enzyme,
                Axios, Heroku, Sass, BEM, Flexbox.
              </b>
            </TextDetail>
            <AppHeading>Why the MERN stack?</AppHeading>
            <TextDetail>
              The project was originally a fullstack solution for a tech test
              and was partially completed. <br></br>Although I didn’t get the
              job, I wanted to finish the app and saw it as a good opportunity
              to continue learning and improving my skills. As the original
              challenge didn’t stipulate any specific technologies or
              frameworks. I chose the MERN stack, as I'd been using JavaScript,
              learning React and could use
              <b> modern hooks-based React components</b> on the front-end and
              <b> NodeJS</b> for the API and CRUD functionality on the backend.
            </TextDetail>

            <AppHeading>Challenges and things I'm proud of</AppHeading>
            <TextDetail>
              Building a responsive and functional application involved lots of
              design and architecture decisions. <br /> Following SOLID
              principles, writing resuable code, adding accessibility features
              and getting a better understanding of scope, props drilling and
              using promises are some of the things I'm proud of.
            </TextDetail>
            <AppHeading>Lessons learned</AppHeading>
            <TextDetail>
              Separating concerns, creating reusable components, client and
              server side form validation. <br />
              TDD - unit testing with Jest and Enzyme and understanding what to
              test, managing and updating state in React, extracting reusable
              functionality with custom hooks, adding responsiveness, achieving
              better UI design's, creating API routes and connecting to a
              database.
            </TextDetail>
          </InnerWrap>
        </ImgWrap>
        <ImgWrap>
          <MobileImg
            fluid={mernImage.mobile.childImageSharp.fluid}
            alt="App interface showing a list of jobs as a column for mobile screen"
          />
          <FigTxt>Responsive UI, mobile screen</FigTxt>
          <FormImg
            fluid={mernImage.form.childImageSharp.fluid}
            alt="App interface showing a user form"
          />
          <FigTxt>User form</FigTxt>
        </ImgWrap>
      </Container>
    </Layout>
  )
}

export default MernApp
