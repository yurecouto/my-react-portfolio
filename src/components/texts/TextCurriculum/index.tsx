import React from "react";

import styles from "./styles.module.css";

interface InputProps {
  text?: string;
}

function TextCurriculum({
  text,
  }: InputProps) {

  return (
    <p
      className={styles.text_curriculum}
      style={{ color: "white" }}
    >
      {text}
    </p>
  )
};

export { TextCurriculum };
