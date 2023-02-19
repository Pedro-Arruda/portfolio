import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowCircleRight } from "phosphor-react";

import styles from "./ProjectCard.module.scss";

export interface ProjectCardPros {
  imgUrl: string;
  urlProject: string;
  description: string;
  technologies: {
    url: string;
  }[];
}

export const ProjectCard = ({
  imgUrl,
  technologies,
  description,
  urlProject,
}: ProjectCardPros) => {
  const [openDescription, setOpenDescription] = useState(false);
  const navigate = useNavigate();

  return (
    <Link
      to={urlProject}
      target="_blank"
      className={styles["projects-list"]}
      onMouseOver={() => setOpenDescription(true)}
      onMouseOut={() => setOpenDescription(false)}
    >
      <div className={styles["project-item"]}>
        <div className={styles["item-header"]}>
          <img src={imgUrl} height={240} width={"100%"} />
        </div>

        <div className={styles["item-body"]}>
          <div className={styles["item-technologies"]}>
            {technologies.map((item, index) => (
              <img src={`${item.url}`} height={35} key={index} />
            ))}
          </div>
          <ArrowCircleRight color="#e5e7eb" size={32} />
        </div>

        {openDescription && (
          <div className={styles["item-description"]}>{description}</div>
        )}
      </div>
    </Link>
  );
};
