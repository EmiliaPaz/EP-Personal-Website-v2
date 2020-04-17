import React from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import styles from './contactForm.module.scss'

const ContactForm = () => (
  <Form action="https://getform.io/f/ee2e8434-7df1-42dd-b813-a23209966768" method="POST" className={styles['form-container']}>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridName">
        {/* <Form.Label>Name</Form.Label> */}
        <Form.Control type="email" name="name" placeholder="Name" className={styles['form-input']} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control type="email" name="email" placeholder="Email" className={styles['form-input']} />
      </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridSubject">
      {/* <Form.Label>Subject</Form.Label> */}
      <Form.Control type="text" name="subject" placeholder="Subject" className={styles['form-input']} />
    </Form.Group>

    <Form.Group controlId="formGridMessage">
      {/* <Form.Label>Message</Form.Label> */}
      <Form.Control as="textarea" rows="3" name="message" placeholder="Message" className={styles['form-input']} />
    </Form.Group>

    <Button variant="primary" type="submit" className={styles['form-submit']}>
      Submit
    </Button>
  </Form>
)
export default ContactForm
