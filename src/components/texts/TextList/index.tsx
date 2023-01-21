import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface Props {
  text?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
  handleSomething?: (param: any) => void;
}

function TextList({
  text,
  textAlign = "center",
  handleSomething
  }: Props) {
  const theme = useSelector(selectTheme);

  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <li
      className={styles.text_list_li}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      onClick={handleSomething}
    >
      <h2
        className={styles.text_list}
        style={{
          textAlign: textAlign,
          color: hover
            ? theme.COLORS.TEXT_HIGHLIGHT
            : theme.COLORS.TEXT_DEFAULT,
        }}
      >
        {text}
      </h2>
    </li>
  )
};

export { TextList };
