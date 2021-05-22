import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'
import AboutLinks from '../components/AboutLinks/AboutLinks'

import picture from '../assets/about/ku_google_bw.jpg'

const About = () => (
  <PageLayout pageTitle="About">
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            <p>Hey! I'm Emilia, a software engineer from Arequipa, Peru &#127477;&#127466; living Kansas, US. &#128205;</p>
          </Row>
          <Row>
            <p>
              I enjoy turning complex problems into clean, elegant and intiutive designs &#128161;. With a skillset across frontend, design
              and backend, I love to create fullstack products that are friendly for devs &#128187; and engaging for users &#129311;.
            </p>
          </Row>
          <Row>
            <p>
              Currently working in enabling users to safely extend their Chrome browser experience as part of the Chrome Extensions team,
              while collaborating with the Open Source community.
            </p>
          </Row>
          <Row>
            <p>
              When I'm not coding or designing , you'll find me travelling &#9992;&#65039;, geocaching &#127758;, watercolor painting
              &#127912; or grabbing a coffee/beer &#9749;/&#127866; with friends.
            </p>
          </Row>
          <Row>
            <AboutLinks></AboutLinks>
          </Row>
        </Col>
        <Col md={4}>
          <img src={picture} width="100%" height="auto"></img>
        </Col>
      </Row>
    </Container>
  </PageLayout>
)

export default About
