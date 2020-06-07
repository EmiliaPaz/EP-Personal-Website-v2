import * as React from 'react'
import { Row, Col, CardColumns } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'

import { Card } from 'react-bootstrap'

import hk_1day from '../assets/design/hackku_1day.gif'
import hk_2days from '../assets/design/hackku_2days.gif'
import hk_3days from '../assets/design/hackku_3days.gif'
import hackku from '../assets/design/hackku.png'
import hackku18 from '../assets/design/hackku18.jpg'
import hackku19 from '../assets/design/hackku19.jpg'
import p1 from '../assets/design/painting1.jpg'
import p2 from '../assets/design/painting2.jpg'
import p3 from '../assets/design/painting3.jpg'
import p4 from '../assets/design/painting4.jpg'
import p5 from '../assets/design/painting5.jpg'
import p6 from '../assets/design/painting6.jpg'

export default class DesignProjects extends React.Component {
  projects: any[] = [hk_1day, hk_2days, hk_3days, hackku, hackku18, hackku19, p1, p2, p3, p4, p5, p6]

  renderProjects() {
    let projectsHTML: any = []
    this.projects.forEach(project => {
      projectsHTML.push(
        <Card>
          <Card.Img src={project}/>
        </Card>
      )
    })
    return projectsHTML
  }

  render() {
    return (
      <PageLayout pageTitle="Design Projects">
        <Row>
          <Col md={12}>
            <CardColumns> {this.renderProjects()} </CardColumns>
          </Col>
        </Row>
      </PageLayout>
    )
  }
}
