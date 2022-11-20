import classNames from 'classnames'
import { useState } from 'react'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import styles from './Expereciences.module.scss'

export const Expereciences = () => {
    const [active, setActive] = useState('job')
  return (
    <section className={styles['expereciences-container']} id={'experiences'}>
        <SectionTitle title='Experiências'/>

        <div className={styles["expereciences-content"]}>
            <div className={classNames(styles["current-experecience"])}>
                <div className={classNames(styles["experecience"], active === 'job' ? styles["active"] : '')}
                onClick={() => setActive('job')}>
                    <p>AllCom Sistemas</p>
                    <span>junho-2022 / atualmente</span>
                </div>

                <div className={classNames(styles["experecience"], active === 'college' ? styles["active"] : '')} 
                onClick={() => setActive('college')}>
                    <p>Análise e Desenvolvimento de Sistemas - ITE</p>
                    <span>2022-2024</span>
                </div>
            </div>
            <div className={(styles["experecience-text"])} >
                {active === 'job' ?
                <p>TEXTO DO TRABALHOOOOOOOOOOOOOOO <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever 
                </p> : 
                <p>TEXTO DA FACULDADEEEEEEEE <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever 
                </p>}
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever 
                </p>
            </div>
        </div>
    </section>
  )
}
