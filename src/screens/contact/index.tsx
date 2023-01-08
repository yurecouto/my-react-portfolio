import React from "react";
import { useWindowSize } from "../../hooks/window";

import styles from "./styles.module.css";

function Contact () {
  const {height, width} = useWindowSize();

  return (
    <>
      <div
        id="section-contact"
        className={styles.contact_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          height: `${height}px`,
        }}
      >
      </div>
    </>
  );
};

export default Contact;
