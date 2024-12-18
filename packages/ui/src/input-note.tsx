import styles from "./input-node.module.css";

export const InputNote = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles['input-note']}>
      {props.children}
    </div>
  );
};
