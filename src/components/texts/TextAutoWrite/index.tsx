import React from "react";

import styles from "./styles.module.css";

interface Props {
  text?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

function TextAutoWrite({
  text,
  textAlign = "center"
  }: Props) {

  return (
    <div
      className={styles.typing_text}
      style={{
        width: `${text?.length}ch`,
      }}
    >
      {text}
    </div>
  )
};

export { TextAutoWrite };
