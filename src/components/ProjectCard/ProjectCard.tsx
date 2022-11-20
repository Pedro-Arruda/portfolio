import {useState} from 'react'
import styles from './ProjectCard.module.scss'

export interface ProjectCardPros {
    imgUrl: string
    description: string
    technologies: {
        url: string
    }[]
}

export const ProjectCard = ({imgUrl, technologies, description}: ProjectCardPros) => {
  const [openDescription, setOpenDescription] = useState(false)
  return (
    <div className={styles["projects-list"]} 
        onMouseOver={() => setOpenDescription(true)} 
        onMouseOut={() => setOpenDescription(false)}
        >
        <div className={styles['project-item']}>
          <div className={styles["item-header"]}>
            <img src={imgUrl} height={240} width={'100%'}/>
          </div>

          <div className={styles["item-technologies"]}>
            {technologies.map((item) => (
                <img src={`${item.url}`} height={35}/>
            ))}
          </div>

          {openDescription && (
            <div className={styles['item-description']}>
              {description}
            </div>
          )}
        </div>

      </div>
  )
}
