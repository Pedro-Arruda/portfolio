import styles from "./Technologies.module.scss";

import htmlImg from "../../assets/technologies/iconHtml.svg";
import cssImg from "../../assets/technologies/iconCSS.svg";
import bootstraplImg from "../../assets/technologies/iconBootstrap.svg";
import javascriptImg from "../../assets/technologies/iconJavascript.svg";
import reactImg from "../../assets/technologies/iconReact.svg";
import typescriptImg from "../../assets/technologies/iconTypescript.svg";
import sassImg from "../../assets/technologies/iconSass.svg";
import githubImg from "../../assets/technologies/iconGithub.svg";

import { SectionTitle } from "../SectionTitle/SectionTitle";
import { TechnologieCard } from "../TechnologieCard/TechnologieCard";

export const Technologies = () => {
  return (
    <section className={styles["technologies-container"]} id={"technologies"}>
      <SectionTitle title="Tecnologias" />

      <div className={styles["technologie-cards-container"]}>
        <TechnologieCard img={htmlImg} name="HTML" />
        <TechnologieCard img={cssImg} name="CSS" />
        <TechnologieCard img={bootstraplImg} name="Bootstrap" />
        <TechnologieCard img={javascriptImg} name="Javascript" />
        <TechnologieCard img={reactImg} name="React" />
        <TechnologieCard img={typescriptImg} name="Typescript" />
        <TechnologieCard img={sassImg} name="Sass" />
        <TechnologieCard img={githubImg} name="Git" />
      </div>
    </section>
  );
};
