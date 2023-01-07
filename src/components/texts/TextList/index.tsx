import React, { useState } from "react";

import styles from "./styles.module.css";

interface InputProps {
  text?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
  handleSomething?: (param: any) => void;
}

function TextList({
  text,
  textAlign = "center",
  handleSomething
  }: InputProps) {
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
          color: hover ? "red" : "whitesmoke"
        }}
      >
        {text}
      </h2>
    </li>
  )
};

export { TextList };
