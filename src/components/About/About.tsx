import { DownloadSimple } from 'phosphor-react'
import styles from './About.module.scss'

export const About = () => {
  return (
    <section className={styles["about-container"]} id='about'>
        <div className={styles["about-img"]}></div>

        <div className={styles["about-text"]}>
            <h3>Sobre mim</h3>
            <p>Bauru, SP</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever 
            </p>
            <div>
                <button> 
                    <DownloadSimple size={24} />
                    <p>Curriculo</p>
                </button>
            </div>
        </div>
    </section>
  )
}
