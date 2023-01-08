import React from "react";
import { useWindowSize } from "../../hooks/window";

import styles from "./styles.module.css";

function Portfolio () {
  const {height, width} = useWindowSize();

  return (
    <>
      <div
        id="section-portfolio"
        className={styles.portfolio_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          height: `${height}px`,
        }}
      >
      </div>
    </>
  );
};

export default Portfolio;
