import * as React from 'react'
import { Row, Col, CardColumns } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'
import ProjectCard from '../components/ProjectCard/ProjectCard'

import applican from '../assets/applican.png'
import arboretum from '../assets/arboretum.png'
import attend from '../assets/attend.png'
import bayta from '../assets/bayta.png'
import datascience from '../assets/datascience.png'
import datamusic from '../assets/datamusic.png'
import gitmpse from '../assets/gitmpse.png'
import minesweeper from '../assets/minesweeper.png'
import personalweb from '../assets/personalweb.png'

export default class Projects extends React.Component {
  projects: { title: string; date: string; description: string; technologies: string[]; imageSrc: any; link: string }[] = [
    {
      title: 'Applican',
      date: 'August 2019 - May 2020',
      description: 'Startup that matches students with internships based on cultural and technical strengths',
      technologies: ['Angular', 'Bootstrap', 'Flask', 'Figma'],
      imageSrc: applican,
      link: 'https://www.applican.ai/'
    },
    {
      title: 'Arboretum',
      date: 'February 2019 - May 2019',
      description:
        'In-browser parser and type interpreter for a functional language written in Elm. Research project worked with Alex Shadley and Brian Quiroz, under Dr. Garret Morris supervision. ',
      technologies: ['Elm', 'JavaScript'],
      imageSrc: arboretum,
      link: 'https://github.com/EmiliaPaz/Arboretum'
    },
    {
      title: 'Attend.io',
      date: 'April 2019',
      description: 'Front end functionality of an app that identifies potential drop out students by taking attendance data',
      technologies: ['Flutter'],
      imageSrc: attend,
      link: 'https://github.com/harryl6798/attend_demo'
    },
    {
      title: 'The Bay-ta Scientists',
      date: 'December 2019',
      description:
        'Data analysis about where should people buy an Airbnb for maximum profit based external factors, property value change overtime and airbnb listings. Group project for EECS 731 - Introduction to Data Science',
      technologies: ['Python', 'Pandas', 'Jupyther Notebooks'],
      imageSrc: bayta,
      link: 'https://prezi.com/view/mm2a8oXJFuX7bFacFMTz/'
    },
    {
      title: 'DataMusic',
      date: 'April 2019',
      description: 'Web platform where users can organize and discover music based on their personal likes',
      technologies: ['JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'Python', 'Spotify API'],
      imageSrc: datamusic,
      link: 'https://github.com/EmiliaPaz/EECS647'
    },
    {
      title: 'DataScience projects',
      date: 'September 2019 - December 2019',
      description: 'Variety of projects',
      technologies: ['Python', 'Pandas', 'Jupyter Notebooks'],
      imageSrc: datascience,
      link: 'https://github.com/EmiliaPaz/ComputerScienceKU/tree/master/EECS731'
    },
    {
      title: 'Gitmpse',
      date: 'July 2019',
      description: 'Website that displays GitHub repository information and statistics per given user',
      technologies: ['React', 'GitHub GraphQL', 'Semantic UI React'],
      imageSrc: gitmpse,
      link: 'https://github.com/EmiliaPaz/Gitmpse'
    },
    {
      title: 'Minesweeper',
      date: 'September 2018',
      description:
        'Website implementation of the classic minesweeper game. Group project for EECS 448 - Software Engineering I, with personal focus on the algorithm implementation',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      imageSrc: minesweeper,
      link: 'https://github.com/tonyponyexpress/minesweeper-game'
    },
    {
      title: 'Personal Website',
      date: 'April 2020 - current',
      description: 'This website!',
      technologies: ['React', 'React Bootstrap', 'Gatsby', 'GraphQL'],
      imageSrc: personalweb,
      link: 'https://github.com/EmiliaPaz/EmiliaPaz.github.io/tree/react-gatsby'
    }
  ]

  renderProjects() {
    let projectsHTML: any = []
    this.projects.forEach(project => {
      projectsHTML.push(
        <ProjectCard
          title={project.title}
          date={project.date}
          description={project.description}
          technologies={project.technologies}
          imageSrc={project.imageSrc}
          link={project.link}
          key={project.title}
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
