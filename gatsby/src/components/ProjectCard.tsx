import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './projectCard.module.scss'

interface ProjectInfo {
  title: string
  description: string
  technologies: string
  imageSrc: any
}

const ProjectCard = (project: ProjectInfo) => (
  <Card className={styles['card']}>
    <img className={styles['card-image']} src={project.imageSrc} alt="Card image"></img>
    <div>
      <Card.ImgOverlay className={styles['card-content']}>
        <Card.Title className={styles['card-content-text']}> {project.title} </Card.Title>
        <Card.Text className={styles['card-content-text']}> {project.description} </Card.Text>
        <Card.Text className={styles['card-content-text']}> {project.technologies} </Card.Text>
      </Card.ImgOverlay>
    </div>
  </Card>
)
export default ProjectCard
