import { DownloadSimple } from "phosphor-react";
import styles from "./About.module.scss";
import donwloadFile from "../../assets/files/cv.pdf";
import profilePick from "../../assets/about/profile3.jpeg";

export const About = () => {
  return (
    <section className={styles["about-container"]} id="about">
      <img src={profilePick} alt="" width={600} height={320} />

      <div className={styles["about-text"]}>
        <h3>Sobre mim</h3>
        <p>Bauru, SP</p>
        <p>
          Olá! <br />
          Meu nome é Pedro Arruda, estudo programação desde 2021. Sempre amei e
          tive contato com tecnologia, e em 2022 dediquei meus estudos á área
          que mais tenho interesse, o front end. Estudo e trabalho com
          tecnologias com React, Typescript, Sass, entre outros. Também tive
          contato com Node e softwares de design como o Figma, desenvolvendo
          algumas interfaces essencialmente para projetos pessoais. Também estou
          cursando Análise e Desenvolvimento na ITE. Em constante aprendizado.
        </p>

        <a
          href={donwloadFile}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <DownloadSimple size={24} />
          <p>Curriculo</p>
        </a>
      </div>
    </section>
  );
};
