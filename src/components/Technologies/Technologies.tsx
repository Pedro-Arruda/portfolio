import styles from './Technologies.module.scss'

import htmlImg from '../../assets/technologies/iconHtml.svg'
import cssImg from '../../assets/technologies/iconCSS.svg'
import bootstraplImg from '../../assets/technologies/iconBootstrap.svg'
import javascriptImg from '../../assets/technologies/iconJavascript.svg'
import reactImg from '../../assets/technologies/iconReact.svg'
import typescriptImg from '../../assets/technologies/iconTypescript.svg'
import sassImg from '../../assets/technologies/iconSass.svg'
import githubImg from '../../assets/technologies/iconGithub.svg'

import { SectionTitle } from '../SectionTitle/SectionTitle'

export const Technologies = () => {
  return (
    <section className={styles["technologies-container"]} id={'technologies'}>
        <SectionTitle title='Tecnologias'/>

        <div className={styles["technologie-cards-container"]}>
            <div className={styles["technologie-card"]}>
                <img src={htmlImg} height={90}/>
                HTML
            </div>
            <div className={styles["technologie-card"]}>
                <img src={cssImg} height={90}/>
                CSS
            </div>
            <div className={styles["technologie-card"]}>
                <img src={bootstraplImg} height={90}/>
                Bootstrap
            </div>
            <div className={styles["technologie-card"]}>
                <img src={javascriptImg} height={90}/>
                Javascript
            </div>
            <div className={styles["technologie-card"]}>
                <img src={reactImg} height={90}/>
                React
            </div>
            <div className={styles["technologie-card"]}>
                <img src={typescriptImg} height={90}/>
                Typescript
            </div>
            <div className={styles["technologie-card"]}>
                <img src={sassImg} height={90}/>
                Sass
            </div>
            <div className={styles["technologie-card"]}>
                <img src={githubImg} height={90}/>
                Git
            </div>
        </div>
    </section>
  )
}
