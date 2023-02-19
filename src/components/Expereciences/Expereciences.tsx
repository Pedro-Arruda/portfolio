import classNames from "classnames";
import { useState } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./Expereciences.module.scss";

export const Expereciences = () => {
  const [active, setActive] = useState("job");
  return (
    <section className={styles["expereciences-container"]} id={"experiences"}>
      <SectionTitle title="Experiências" />

      <div className={styles["expereciences-content"]}>
        <div className={classNames(styles["current-experecience"])}>
          <div
            className={classNames(
              styles["experecience"],
              active === "job" ? styles["active"] : ""
            )}
            onClick={() => setActive("job")}
          >
            <p>AllCom Sistemas</p>
            <span>junho-2022 / atualmente</span>
          </div>

          <div
            className={classNames(
              styles["experecience"],
              active === "college" ? styles["active"] : ""
            )}
            onClick={() => setActive("college")}
          >
            <p>Sistemas de informação - ITE</p>
            <span>2022-2024</span>
          </div>
        </div>
        <div className={styles["experecience-text"]}>
          {active === "job" ? (
            <>
              <h1>Desenvolvedor Front End</h1>
              <p>
                Estágio como desenvolvedor front end, responsável por auxiliar
                no desenvolvimento e manutenção de sistemas, assim como suas
                interfaces. Durante o período, integrei projetos CRM, sistemas
                de gestão, landing pages, entre outros, essencialmente
                utilizando as tecnologias React e Typescript.
              </p>
            </>
          ) : (
            <>
              <h1>Faculdade</h1>
              <p>
                Graduação na Instituição Toledo de Ensino, onde estou tendo
                contato com diversas áreas não apenas de desenvolvimento, como
                também outros setores da tecnologia.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
