import React from 'react'
import Layout from '../components/layout'
import { AboutText, AboutLink } from "../styles/components/about"
function About() {
    return (
        <Layout>
            
           <AboutText>Welcome to my world.</AboutText>
           <AboutText>I'm a front-end dev, making usable things for the web.</AboutText>
           <AboutText>To be continued...</AboutText> 
           <AboutLink to="/">Go back to the home page, its currently nicer there.</AboutLink> <br />
        </Layout>
    )
}

export default About
