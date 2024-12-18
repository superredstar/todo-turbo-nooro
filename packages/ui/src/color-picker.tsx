import styles from "./color-picker.module.css";
import { InputNote } from "./input-note";

const colors = [
  '#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#007AFF', '#5856D6', '#AF52DE', '#FF2D55', '#A2845E'
];

export const ColorPicker = (props: {
  title: React.ReactNode;
  activeColor?: string;
  onChange?: (color: string) => void;
  error?: string;
}) => {
  return (
    <div className={styles['color-picker-group']}>
      <label className={styles['title']}>{props.title}</label>
      <div className={styles['colors']}>
        {colors.map((color, id) => (
          <button
            key={id}
            className={styles['color-button']}
            style={{
              backgroundColor: color,
              borderColor: props.activeColor === color ? "white" : "transparent"
            }}
            onClick={() => props.onChange?.(color)}
          />
        ))}
      </div>
      {props.error && <InputNote>{props.error}</InputNote>}
    </div>
  );
};
