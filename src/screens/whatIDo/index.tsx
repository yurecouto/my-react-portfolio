import React from "react";
import { useWindowSize } from "../../hooks/window";

import styles from "./styles.module.css";

function WhatIDo () {
  const {height, width} = useWindowSize();

  return (
    <>
      <div
        id="section-what-i-do"
        className={styles.what_i_do_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          height: `${height}px`,
        }}
      >
      </div>
    </>
  );
};

export default WhatIDo;
