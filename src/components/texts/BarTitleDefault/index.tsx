import React from "react";

import styles from "./styles.module.css";

interface InputProps {
  text?: string;
}

function BarTitleDefault({
  text,
  }: InputProps) {

  return (
    <p
      className={styles.bar_title}
      style={{ color: "white" }}
    >
      {text}
    </p>
  )
};

export { BarTitleDefault };
