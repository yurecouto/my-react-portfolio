import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface Props {
  text?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

function TextAutoWrite({
  text,
  textAlign = "center"
  }: Props) {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.typing_text}
      style={{
        color: theme.COLORS.TEXT_DEFAULT,
        width: `${text?.length}ch`,
      }}
    >
      {text}
    </div>
  )
};

export { TextAutoWrite };
