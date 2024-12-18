import styles from "./badge.module.css";

export const Badge = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles['badge']}>
      {props.children}
    </div>
  );
};
