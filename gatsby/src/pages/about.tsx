import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'

const About = () => (
  <PageLayout pageTitle="About">
    <Row>
      <Col md={12}>
        <p>
          <span> Name: </span> Emilia Paz Ojeda
        </p>
        <p>
          <span> Phone: </span> (913)-206-7900
        </p>
        <p>
          <span> Email: </span> emilia.paz@ku.edu
        </p>
      </Col>
    </Row>
  </PageLayout>
)

export default About
