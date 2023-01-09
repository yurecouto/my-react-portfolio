import React from "react";

import styles from "./styles.module.css";

interface Props {
  text?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

function TextSecondary({
  text,
  textAlign = "center"
  }: Props) {

  return (
    <h2
      className={styles.text_secondary}
      style={{
        textAlign: textAlign
      }}
    >
      {text}
    </h2>
  )
};

export { TextSecondary };
