import React from "react";

import styles from "./styles.module.css";

interface Props {
  text?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
  hover?: boolean
}

function SubTitleCurriculum({
  text,
  textAlign = "center",
  hover = false
  }: Props) {

  return (
    <h2
      className={styles.sub_title_curriculum}
      style={{
        textAlign: textAlign,
        textDecoration: hover ? "underline" : "none"
      }}
    >
      {text}
    </h2>
  )
};

export { SubTitleCurriculum };
