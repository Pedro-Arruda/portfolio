import styles from './Footer.module.scss'

import githubIcon from '../../assets/footer/iconGithub.svg';
import linkedinIcon from '../../assets/footer/iconLinkedin.svg';
import whatsappIcon from '../../assets/footer/iconWhatsapp.svg';
import { EnvelopeSimple } from 'phosphor-react';

export const Footer = () => {
  return (
    <div className={styles['footer-container']}>
        <div className={styles['wpp-container']}>
            <img src={whatsappIcon} height={30} />
            <p>14 998861503</p>
        </div>

        <div className={styles['mail-container']}>
            <EnvelopeSimple size={30}/>
            <p>arruda.pedro014@gmail.com</p>
        </div>

        <div className={styles['links-container']}>
            <a href="">
             <img src={githubIcon} height={30} />
            </a>
            <a href="">
                <img src={linkedinIcon} height={30}/>
            </a>
        </div>
    </div>
  )
}
