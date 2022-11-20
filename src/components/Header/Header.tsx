import styles from './Header.module.scss';

export const Header = () => {
  return (
    <section className={styles["header-container"]}>
        <h1> Pedro <br /> Arruda</h1>
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
        </ul>
    </section>
  )
}
