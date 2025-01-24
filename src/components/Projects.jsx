import React from 'react'
import Styles from "../css/Projects.module.css"
import ProjectsCard from './ProjectsCard'
import { ProjectsData } from "../utils/Projects"

export default function Projects({ isInView }) {
  return (
    <div>
      <section className={Styles.projectsContainer} id='projects'>
        <h5>My Projects</h5>
        <div className={Styles.projectsContent}>
          {
            ProjectsData(window.location.host).map((item) => (
              <ProjectsCard key={item.title} details={item} isInView={isInView} />
            )
            )
          }
        </div>
      </section>
    </div>
  )
}
