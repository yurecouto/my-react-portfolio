import React from "react";

import styles from "./styles.module.css";

interface Props {
  text?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

function SubTitleSecondary({
  text,
  textAlign = "center"
  }: Props) {

  return (
    <h2
      className={styles.sub_title_secondary}
      style={{
        textAlign: textAlign
      }}
    >
      {text}
    </h2>
  )
};

export { SubTitleSecondary };
