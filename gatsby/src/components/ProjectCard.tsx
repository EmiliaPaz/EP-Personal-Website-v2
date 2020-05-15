import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './projectCard.module.scss'

interface ProjectInfo {
  title: string
  date: string
  description: string
  technologies: string[]
  imageSrc: any
  link: string
}

const ProjectCard = (project: ProjectInfo) => (
  <a href={project.link} target="_blank">
    <Card className={styles['card']}>
      <div className={styles['card-content']}>
        <Card.Title className={styles['card-content-text']}>
          <h4> {project.title} </h4>
        </Card.Title>
        <Card.Text className={styles['card-content-text']}>
          <p className={styles['card-content-date']}> {project.date} </p>
        </Card.Text>
        <Card.Text className={styles['card-content-text']}>
          <p> {project.description}</p>
        </Card.Text>
        <ul className={styles['card-content-text']}>
          {project.technologies.map(technology => (
            <li className="">{technology}</li>
          ))}
        </ul>
      </div>
      <img className={styles['card-image']} src={project.imageSrc} alt="Card image"></img>
    </Card>
  </a>

  // <a href={project.link} target="_blank">
  //   <Card className={styles['card']}>
  //     <img className={styles['card-image']} src={project.imageSrc} alt="Card image"></img>
  //     <Card.ImgOverlay className={styles['card-content']}>
  //       <Card.Title className={styles['card-content-text']}>
  //         <h4> {project.title} </h4>
  //       </Card.Title>
  //       <Card.Text className={styles['card-content-text']}>
  //         <p className={styles['card-content-date']}> {project.date} </p>
  //       </Card.Text>
  //       <Card.Text className={styles['card-content-text']}>
  //         <p> {project.description}</p>
  //       </Card.Text>
  //       <ul className={styles['card-content-text']}>
  //         {project.technologies.map(technology => (
  //           <li className="">{technology}</li>
  //         ))}
  //       </ul>
  //     </Card.ImgOverlay>
  //   </Card>
  // </a>
)
export default ProjectCard
