import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'
import Timeline from '../components/Timeline/Timeline'

export default class Work extends React.Component {
  jobs: { title: string; location: string; date: string; description: string[] }[] = [
    {
      title: 'Software Engineer Intern',
      location: 'F5 Networks, Seattle',
      date: 'May 2019 - August 2019',
      description: [
        'Analyzed SIP protocol automation coverage and delivered a stable SIP test set',
        'Improved 22% of specific functional areas by using unit tests and functional test case automation'
      ]
    },
    {
      title: 'Supplemental Instruction Leader (Programming I)',
      location: 'Academic Achievement and Access Center, University of Kansas',
      date: 'January 2018 – May 2018',
      description: ['Supported students during coding exercises during lecture and provided one-on-one help during office hours']
    },
    {
      title: 'Technical Assistant',
      location: 'Ermal Garinger Academic Resource Center, University of Kansas',
      date: 'February 2017 – December 2017',
      description: ['Provided friendly and punctual service to faculty, staff, and students for IT related issues and projects']
    },
    {
      title: 'Undergraduate Researcher',
      location: 'Information & Telecommunication Technology Center, University of Kansas',
      date: 'July 2018 – May 2019',
      description: [
        'Interpreted and analyzed functional programming languages, with an emphasis on Haskell and Habit',
        'Developed a website that analyzes and type checks functional expressions using Elm and Chevrotrain'
      ]
    },
    {
      title: 'Undergraduate Teaching Fellow (Programming II)',
      location: 'School of Engineering, University of Kansas',
      date: 'January 2020 - May 2020',
      description: ['Supported students during coding exercises during lecture']
    }
  ]
  render() {
    return (
      <PageLayout pageTitle="Work">
        <Row>
          <Timeline jobs={this.jobs} />
        </Row>
      </PageLayout>
    )
  }
}
