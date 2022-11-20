import styles from './SectionTitle.module.scss';

interface SectionTitle {
    title: string
}

export const SectionTitle = ({title}: SectionTitle) => {
  return (
    <h1 className={styles['section-title']}>{title}</h1>
  )
}
