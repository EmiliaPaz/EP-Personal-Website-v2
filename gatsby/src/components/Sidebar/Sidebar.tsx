import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'gatsby'
import styles from './sidebar.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'
import { faToolbox } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <Navbar collapseOnSelect expand="lg" className={styles.wrapper}>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="flex-column">
        <Link to="/about">
          <FontAwesomeIcon icon={faUser} size="lg" className={styles.icon} />
        </Link>
        <Link to="/work">
          <FontAwesomeIcon icon={faIndustry} size="lg" className={styles.icon} />
        </Link>
        <Link to="/skills">
          <FontAwesomeIcon icon={faToolbox} size="lg" className={styles.icon} />
        </Link>
        <Link to="/projects">
          <FontAwesomeIcon icon={faLightbulb} size="lg" className={styles.icon} />
        </Link>
        <Link to="/design_projects">
          <FontAwesomeIcon icon={faPalette} size="lg" className={styles.icon} />
        </Link>
        <Link to="/contact">
          <FontAwesomeIcon icon={faEnvelope} size="lg" className={styles.icon} />
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
export default Sidebar
