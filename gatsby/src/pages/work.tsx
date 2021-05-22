import * as React from 'react'
import { Row } from 'react-bootstrap'

import PageLayout from '../layouts/pageLayout/pageLayout'
import Timeline from '../components/Timeline/Timeline'

export default class Work extends React.Component {
  jobs: { title: string; location: string; date: string; description: string[] }[] = [
    {
      title: 'Software Engineer',
      location: 'Google LLC, Mountain View, CA.',
      date: 'Summer 2020 - current',
      description: [
        'Provided in-memory storage that is not persisted to disk for the duration of a browser session',
        'Implemented a new back end service to show help content in product',
        'Extracted and annotated help content to be matched with the user',
        'Designed and implemented the storage and provider of the help content'
      ]
    },
    {
      title: 'Co-founder',
      location: 'Applican, Lawrence, KS.',
      date: 'Summer 2019 - Spring 2020',
      description: [
        'College startup with four classmates. Sought to make the CS internship application process more efficient and insightful for companies and applicants.',
        'Earned seed grant from 1517 fund, partnered with 10 local companies. ~$10K in external funding / grants earned',
        'Led frontend development using Angular and Flask'
      ]
    },
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
      title: 'Undergraduate Researcher',
      location: 'Information & Telecommunication Technology Center, University of Kansas',
      date: 'July 2018 – May 2019',
      description: [
        'Interpreted and analyzed functional programming languages, with an emphasis on Haskell and Habit',
        'Developed a website that analyzes and type checks functional expressions using Elm and Chevrotrain'
      ]
    },
    {
      title: 'Supplemental Instruction Leader (Programming I and II)',
      location: 'School of Engineering, University of Kansas',
      date: 'Spring 2018 – Spring 2020',
      description: ['Supported students during coding exercises during lecture and provided one-on-one help during office hours']
    },
    {
      title: 'Technical Assistant',
      location: 'Ermal Garinger Academic Resource Center, University of Kansas',
      date: 'Spring 2017 – Fall 2017',
      description: ['Provided friendly and punctual service to faculty, staff, and students for IT related issues and projects']
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
