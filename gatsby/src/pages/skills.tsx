import * as React from 'react'
import { Row, Col } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'
import PercentageCircle from '../components/PercentageCircle/PercentageCircle'

export default class Skills extends React.Component {
  designSkills: { skill: string; percentage: string; circleClass: string }[] = [
    {
      skill: 'Balsamiq',
      percentage: '30, 100',
      circleClass: 'circle-beginner'
    },
    {
      skill: 'Figma',
      percentage: '50, 100',
      circleClass: 'circle-intermediate'
    },
    {
      skill: 'Illustrator',
      percentage: '75, 100',
      circleClass: 'circle-advanced'
    },
    {
      skill: 'Photoshop',
      percentage: '50, 100',
      circleClass: 'circle-intermediate'
    }
  ]

  devSkills: { skill: string; percentage: string; circleClass: string }[] = [
    {
      skill: 'Angular',
      percentage: '60, 100',
      circleClass: 'circle-intermediate'
    },
    {
      skill: 'C',
      percentage: '20, 100',
      circleClass: 'circle-beginner'
    },
    {
      skill: 'C++',
      percentage: '80, 100',
      circleClass: 'circle-advanced'
    },
    {
      skill: 'Git',
      percentage: '70, 100',
      circleClass: 'circle-advanced'
    },
    {
      skill: 'Haskell',
      percentage: '60, 100',
      circleClass: 'circle-intermediate'
    },
    {
      skill: 'HTML/CSS',
      percentage: '80, 100',
      circleClass: 'circle-intermediate'
    },
    {
      skill: 'JavaScript',
      percentage: '70, 100',
      circleClass: 'circle-advanced'
    },
    {
      skill: 'Git',
      percentage: '80, 100',
      circleClass: 'circle-advanced'
    },
    {
      skill: 'MySQL',
      percentage: '30, 100',
      circleClass: 'circle-beginner'
    },
    {
      skill: 'Pandas',
      percentage: '60, 100',
      circleClass: 'circle-intermediate'
    },
    {
      skill: 'PHP',
      percentage: '40, 100',
      circleClass: 'circle-beginner'
    },
    {
      skill: 'Python',
      percentage: '70, 100',
      circleClass: 'circle-advanced'
    },
    {
      skill: 'React',
      percentage: '60, 100',
      circleClass: 'circle-intermediate'
    },
    {
      skill: 'TypeScript',
      percentage: '70, 100',
      circleClass: 'circle-advanced'
    }
  ]

  renderDesignSkills() {
    let designSkillsHTML: any[] = []
    this.designSkills.forEach(skill => {
      designSkillsHTML.push(
        <Col xs={6} sm={4} md={2} key={skill.skill}>
          <PercentageCircle skill={skill.skill} percentage={skill.percentage} circleClass={skill.circleClass} />
        </Col>
      )
    })
    return designSkillsHTML
  }

  renderDevSkills() {
    let devSkillsHTML: any[] = []
    this.devSkills.forEach(skill => {
      devSkillsHTML.push(
        <Col xs={6} sm={4} md={2} key={skill.skill}>
          <PercentageCircle skill={skill.skill} percentage={skill.percentage} circleClass={skill.circleClass} />
        </Col>
      )
    })
    return devSkillsHTML
  }

  render() {
    return (
      <PageLayout pageTitle="Skills">
        <h3> Development </h3>
        <Row>{this.renderDevSkills()}</Row>
        <h3> Design </h3>
        <Row>{this.renderDesignSkills()}</Row>
      </PageLayout>
    )
  }
}
