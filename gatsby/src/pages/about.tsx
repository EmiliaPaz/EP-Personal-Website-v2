import * as React from 'react'
import { Row, Col } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'
import AboutLinks from '../components/AboutLinks/AboutLinks'

import picture from "../assets/about/ku_google_bw.jpg"

const About = () => (
  <PageLayout pageTitle="About">
    <Row>
      <Col md={8}>
        <p>
          I'm a Computer Scientist from Peru currently residing in the United States after finishing my degree at the University of Kansas. 
        </p>
        <p>
          I enjoy turning complex problems into clean, elegant and intiutive designs. Currently working on personal projects before starting my Engineering Residency at Google.
        </p>
        <p>
          When I'm not coding or designing, you'll find me travelling, painting or grabbing a beer with friends.
        </p>
        <Row>
          <AboutLinks></AboutLinks>   
        </Row>
      </Col>
      <Col md={4}>
        <img src={picture} width="100%" height="auto"></img>
      </Col>
    </Row>
    
  </PageLayout>
)

export default About
