import React from 'react'
import Styles from "../css/Projects.module.css"
import ProjectsCard from './ProjectsCard'
import { PROJECTS } from './utils/data'

export default function Projects({isInView}) {
  return (
    <div>
      <section className={Styles.projectsContainer} id='projects'>
        <h5>My Projects</h5>
        <div className={Styles.projectsContent}>
          {
            PROJECTS.map((item) => (
              <ProjectsCard key={item.title} details={item} isInView={isInView} />
            )
            )
          }
        </div>
      </section>
    </div>
  )
}
