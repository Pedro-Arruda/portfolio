import classNames from 'classnames';
import { List } from 'phosphor-react';
import { useState } from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(true)
  return (
    <section className={styles["header-container"]}>
        <h1> Pedro <br /> Arruda</h1>
          <div>
            <ul>
              <li>
                <a href="#about">
                  Sobre
                </a>
                </li>
              <li>
                <a href="#technologies">
                Tecnologias
                </a>
              </li>
              <li>
                <a href="#projects">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#experiences">            
                Experiências
                </a>
              </li>
              {menuMobile}
            </ul>
              <button className={classNames(styles['menu-icon'])} >
                <List size={40} color={'#fff'} onClick={() => alert('oi')}/>
              </button>
          </div>
    </section>
  )
}
