import { InputNote } from "./input-note";
import styles from "./input.module.css";

export const Input = (props: {
  title: React.ReactNode;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}) => {
  return (
    <div className={`${styles['input-group']}`}>
      <label htmlFor={props.id} className={`${styles['title']}`}>{props.title}</label>
      <input
        id={props.id}
        type={props.type}
        className={`${styles['input']}`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
      {props.error && <InputNote>{props.error}</InputNote>}
    </div>
  );
};
