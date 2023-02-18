import { ReactNode } from "react";
import styles from "./TechnologieCard.module.scss";

interface TechnologieCardProps {
  name: string;
  img: string;
}

export const TechnologieCard = ({ img, name }: TechnologieCardProps) => {
  return (
    <div className={styles["technologie-card"]}>
      <img src={img} height={90} />
      {name}
    </div>
  );
};
