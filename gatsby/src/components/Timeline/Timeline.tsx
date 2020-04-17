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
            <h4>{job.title}</h4>
          </span>
          <div className={styles['content']}>
            <h5 className={styles['location']}>{job.location}</h5>
            <p className={styles.date}>{job.date}</p>
            <p className={styles['description']}>{job.description}</p>
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

// const Timeline: React.FC<timelineProps> = ({ jobs }) => (
//   <Col md={12} className={styles['timeline']}>
//     <div className={styles['entry']}>
//       <span className={styles['timeline-icon']}></span>
//       <span className={styles['year']}>2017</span>
//       <div className={styles['content']}>
//         <h3 className={styles['title']}>Web Desginer</h3>
//         <p className={styles['description']}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula
//           erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam
//           accumsan ornare posuere. Nullam est.
//         </p>
//       </div>
//     </div>
//     <div className={styles['entry']}>
//       <span className={styles['timeline-icon']}></span>
//       <span className={styles['year']}>2016</span>
//       <div className={styles['content']}>
//         <h3 className={styles['title']}>Web Developer</h3>
//         <p className={styles['description']}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula
//           erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam
//           accumsan ornare posuere. Nullam est.
//         </p>
//       </div>
//     </div>
//     <div className={styles['entry']}>
//       <span className={styles['timeline-icon']}></span>
//       <span className={styles['year']}>2015</span>
//       <div className={styles['content']}>
//         <h3 className={styles['title']}>Web Desginer</h3>
//         <p className={styles['description']}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula
//           erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam
//           accumsan ornare posuere. Nullam est.
//         </p>
//       </div>
//     </div>
//     <div className={styles['entry']}>
//       <span className={styles['timeline-icon']}></span>
//       <span className={styles['year']}>2014</span>
//       <div className={styles['content']}>
//         <h3 className={styles['title']}>Web Developer</h3>
//         <p className={styles['description']}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula
//           erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam
//           accumsan ornare posuere. Nullam est.
//         </p>
//       </div>
//     </div>
//   </Col>
// )

// export default Timeline
