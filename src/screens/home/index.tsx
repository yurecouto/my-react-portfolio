import React from "react";
import { useSelector } from "react-redux";
import { TextAutoWrite } from "../../components/texts/TextAutoWrite";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";
import { selectTheme } from "../../providers/slices/theme.slice";

import keyboard from "../../static/keyboard_color.png"

import styles from "./styles.module.css";

function Home () {
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);

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
          borderBottom: `1px solid ${theme.COLORS.PAGE_SEPARATOR}`
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
