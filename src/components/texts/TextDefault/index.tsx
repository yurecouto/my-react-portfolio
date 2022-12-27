import React from "react";

import styles from "./styles.module.css";

interface InputProps {
  text?: string;
}

function TextDefault({
  text,
  }: InputProps) {

  return (
    <p
      className={styles.text_default}
      style={{ color: "white" }}
    >
      {text}
    </p>
  )
};

export { TextDefault };
