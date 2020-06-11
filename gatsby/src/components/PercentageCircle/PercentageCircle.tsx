import React from 'react'
import styles from './percentageCircle.module.scss'

interface percentageCircleProps {
  skill: string
  percentage: string
  circleClass: string
}

const PercentageCircle: React.FC<percentageCircleProps> = ({ skill, percentage, circleClass }) => (
  <div className={styles['percentage-circle']}>
    <svg viewBox="0 0 36 36" className={styles['circular-chart']}>
      <path
        className={styles['circle-bg']}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className={[styles['circle'], styles[circleClass]].join(' ')}
        strokeDasharray={percentage}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />

      <text x="18" y="20.35" className={styles['circle-label']}>
        {skill}
      </text>
    </svg>
  </div>
)

export default PercentageCircle
