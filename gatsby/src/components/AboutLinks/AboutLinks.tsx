import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './aboutLinks.module.scss'

import github from '../../assets/about/github.png'
import linkedin from '../../assets/about/linkedin.png'
import resume from '../../assets/about/resume.png'

const AboutLinks = () => (
  <Row className="justify-content-md-center text-center">
    <Col xs md={2}>
      <a href="https://github.com/EmiliaPaz">
        <img className={styles.img} src={github}></img>
      </a>
    </Col>
    <Col xs md={2}>
      <a href="https://drive.google.com/file/d/1geH1vXBgEh1JPyWElqaBLR6V6yKd0_PG/view?usp=sharing">
        <img className={styles.img} src={resume}></img>
      </a>
    </Col>
    <Col xs md={2}>
      <a href="https://www.linkedin.com/in/emiliapaz/">
        <img className={styles.img} src={linkedin}></img>
      </a>
    </Col>
  </Row>
)
export default AboutLinks
