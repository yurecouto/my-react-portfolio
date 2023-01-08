import React from "react";
import { useWindowSize } from "../../hooks/window";

import styles from "./styles.module.css";

function Curriculum () {
  const {height, width} = useWindowSize();

  return (
    <>
      <div
        id="section-curriculum"
        className={styles.curriculum_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          height: `${height}px`,
        }}
      >
      </div>
    </>
  );
};

export default Curriculum;
