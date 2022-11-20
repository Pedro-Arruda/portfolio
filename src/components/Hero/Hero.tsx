import styles from './Hero.module.scss'
import githubImg from '../../assets/hero/gitHubIcon.png'
import linkedinImg from '../../assets/hero/linkedinIcon.png'

export const Hero = () => {
  return (
    <section className={styles['hero-container']}>
        <div className={styles["hero-text"]}>
            <p>OLÁ, EU SOU</p>
            <h1>PEDRO ARRUDA</h1>
            <p>DESENVOLVEDOR FRONT END</p>
            <div className={styles["hero-buttons"]}>
                <button className={styles["btn-linkedin"]}>
                    <a href='https://www.linkedin.com/in/pedro-scucuglia-arruda/' target='_blank'>
                        <img src={linkedinImg} alt="" height={18} width={18}/>
                        <span>Linkedin</span>
                    </a>
                </button>
                <button className={styles["btn-github"]}>
                    <a href='https://github.com/Pedro-Arruda' target='_blank'>
                        <img src={githubImg} alt="" height={20} width={20}/>
                        GitHub
                    </a>
                </button>
            </div>
        </div>
        <div className={styles["hero-img"]}></div>
    </section>
  )
}
