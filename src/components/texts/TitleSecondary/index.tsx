import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface Props {
  text?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

function TitleSecondary({
  text,
  textAlign = "center"
  }: Props) {
  const theme = useSelector(selectTheme);

  return (
    <h2
      className={styles.title_secondary}
      style={{
        color: theme.COLORS.TEXT_DEFAULT,
        textAlign: textAlign
      }}
    >
      {text}
    </h2>
  )
};

export { TitleSecondary };
