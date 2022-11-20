import {useState} from 'react'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import styles from './Projects.module.scss'

import { ProjectCard } from '../ProjectCard/ProjectCard'
import { projects } from '../../utils/projects'

export const Projects = () => {
  const [openDescription, setOpenDescription] = useState(false)

  return (
    <section className={styles['projects-container']} id={'projects'}>
      <SectionTitle title='Meus projetos'/>

      <div className={styles["projects-list"]} 
        onMouseOver={() => setOpenDescription(true)} 
        onMouseOut={() => setOpenDescription(false)}
        >

        {projects.map((project) => (
          <ProjectCard 
            description={project.description} 
            imgUrl={require(`../../assets/projects/${project.imgUrl}`)} 
            technologies={project.technologies}/>
        ))}
      </div>
    </section>
  )
}
