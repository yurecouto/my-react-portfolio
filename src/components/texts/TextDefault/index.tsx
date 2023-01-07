import React from "react";

import styles from "./styles.module.css";

interface InputProps {
  text?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

function TextDefault({
  text,
  textAlign = "center"
  }: InputProps) {

  return (
    <h2
      className={styles.text_default}
      style={{
        textAlign: textAlign
      }}
    >
      {text}
    </h2>
  )
};

export { TextDefault };
