import React from "react";
import { useWindowSize } from "../../hooks/window";

import keyboard from "../../static/keyboard.jpg"

import styles from "./styles.module.css";

function CoverLetter () {
  const {height, width} = useWindowSize();

  return (
    <>
      <div
        id="section-1"
        className={styles.cover_letter_container}
        style={{
          width: `${width - 260}px`,
          height: `${height}px`,
          backgroundImage: `url(${keyboard})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.cover_letter_sub_container}>
          <div>
            <p className={styles.hello_world}>Hello World!</p>
          </div>

          <div
            className={styles.typing_text}
          >
            I'm a Full Stack Web Developer.
          </div>

        </div>
      </div>
    </>
  );
};

export default CoverLetter;
