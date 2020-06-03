import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './timeline.module.scss'

interface timelineProps {
  jobs: {
    title: string
    location: string
    date: string
    description: string[]
  }[]
}

export default class Timeline extends React.Component<timelineProps> {
  constuctor(props) {}
  
  renderJobs() {
    let jobsHTML: any = []
    this.props.jobs.forEach(job => {
        jobsHTML.push(
        <div className={styles['entry']}>
          <span className={styles['timeline-icon']}></span>
          <span className={styles['title']}>
            <h3>{job.title}</h3>
          </span>
          <div className={styles['content']}>
            <h5 className={styles['location']}>{job.location}</h5>
            <p className={styles.date}>{job.date}</p>
            {job.description.map(item =>{
              return(
                <p className={styles['description']}>{item}</p>
              )
            })}
          </div>
        </div>
      )
    })
    return jobsHTML
  }

  render() {
    return (
      <Col md={12} className={styles['timeline']}>
        {this.renderJobs()}
      </Col>
    )
  }
}