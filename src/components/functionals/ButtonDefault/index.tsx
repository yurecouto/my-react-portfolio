import React, { useState } from "react";

import styles from "./styles.module.css";

interface InputProps {
  title?: string;
}

function ButtonDefault({
  title,
  }: InputProps) {

  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      className={styles.header_button}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      style={{
        backgroundColor: hover ? "#121212" : "#000",
      }}
    >
      <p
        className={styles.header_button_title}
        style={{ color: "white"}}
      >
        {title}
      </p>
    </div>
  )
};

export { ButtonDefault };
