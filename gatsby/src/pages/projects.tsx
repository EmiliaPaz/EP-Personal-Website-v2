import * as React from 'react'
import { Row, Col, CardColumns } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'
import ProjectCard from '../components/ProjectCard'

import applican from '../assets/applican.png'
import attend from '../assets/attend.png'
import datamusic from '../assets/datamusic.png'
import gitmpse from '../assets/gitmpse.png'
import datascience from '../assets/datascience.png'

export default class Projects extends React.Component {
  projects: { title: string; description: string; technologies: string; imageSrc: any }[] = [
    {
      title: 'Applican',
      description: 'Startup that matches students with internships based on cultural and technical strengths',
      technologies: 'Angular, Flask',
      imageSrc: applican
    },
    {
      title: 'Attend.io',
      description: 'Front end functionality of an app that identifies potential drop out students by taking attendance data',
      technologies: 'Flutter',
      imageSrc: attend
    },
    {
      title: 'DataMusic',
      description: 'Web platform where users can organize and discover music based on their personal likes',
      technologies: 'HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, Python, Spotify API',
      imageSrc: datamusic
    },
    {
      title: 'Gitmpse',
      description: 'Website that displays GitHub repository information and statistics per given user',
      technologies: 'React, GitHub GraphQL, Semantic UI React',
      imageSrc: gitmpse
    },
    {
      title: 'DataScience projects',
      description: 'Variety of projects',
      technologies: 'Python, Pandas, Jupyter Notebooks',
      imageSrc: datascience
    }
  ]

  renderProjects() {
    let projectsHTML: any = []
    this.projects.forEach(project => {
      projectsHTML.push(
        <ProjectCard
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          imageSrc={project.imageSrc}
        />
      )
    })
    return projectsHTML
  }

  render() {
    return (
      <PageLayout pageTitle="Projects">
        <Row>
          <Col md={12}>
            <CardColumns className="text-center">{this.renderProjects()}</CardColumns>
          </Col>
        </Row>
      </PageLayout>
    )
  }
}
