import * as React from 'react'
import { Row, Col } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'

import face from '../assets/face.png'

const IndexPage = () => (
  <PageLayout pageTitle="">
    <Row className="d-flex flex-wrap h-100 align-items-center align-content-center">
      <Col md={{ span: 6, offset: 1 }}>
        <Row>
          <h1>Hi,</h1>
        </Row>
        <Row>
          <h1>
            I'm <span> Emilia Paz </span>
          </h1>
        </Row>
        <Row>
          <h5>Computer Scientist &nbsp; | &nbsp; Design Enthusiast &nbsp; | &nbsp; Active Learner</h5>
        </Row>
      </Col>
      <Col md={4}>
        <img src={face} alt="icon" width="75%" />
      </Col>
    </Row>
  </PageLayout>
)

export default IndexPage
