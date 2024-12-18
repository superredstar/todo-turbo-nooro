"use client";

import { ReactNode } from "react";
import styles from "./button.module.css";

export const Button = (props: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`${styles['button']} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
