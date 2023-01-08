import React from "react";
import { TextAutoWrite } from "../../components/texts/TextAutoWrite";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";

import keyboard from "../../static/keyboard.jpg"

import styles from "./styles.module.css";

function Home () {
  const {height, width} = useWindowSize();

  return (
    <>
      <div
        id="section-home"
        className={styles.cover_letter_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px` ,
          height: `${height}px`,
          backgroundImage: `url(${keyboard})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.cover_letter_sub_container}>
          <TitlePage text="Hello World!"/>

          <TextAutoWrite text="I'm a Full Stack Web Developer."/>
        </div>
      </div>
    </>
  );
};

export default Home;
