import * as React from 'react'
import { Row, Col } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'
import ContactForm from '../components/ContactForm/ContactForm'

const Contact = () => (
  <PageLayout pageTitle="Contact">
    <Row className="justify-content-md-center">
      <Col md={6}>
        <ContactForm />
      </Col>
    </Row>
  </PageLayout>
)

export default Contact
