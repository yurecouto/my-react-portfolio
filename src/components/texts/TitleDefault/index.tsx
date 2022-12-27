import React from "react";

import styles from "./styles.module.css";

interface InputProps {
  text?: string;
}

function TitleDefault({
  text,
  }: InputProps) {

  return (
    <p
      className={styles.title}
      style={{ color: "white" }}
    >
      {text}
    </p>
  )
};

export { TitleDefault };
