import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useWindowSize } from "../../hooks/window";
import { selectTheme } from "../../providers/slices/theme.slice";

import { TextAutoWrite } from "../../components/texts/TextAutoWrite";
import { TitlePage } from "../../components/texts/TitlePage";

import styles from "./styles.module.css";

function Home () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);
  const localTheme = localStorage.getItem("THEME");

  const homeDark = "https://raw.githubusercontent.com/yurecouto/my-portfolio-files/master/static/images/app/homeDark.png"
  const homeLight = "https://raw.githubusercontent.com/yurecouto/my-portfolio-files/master/static/images/app/homeLight.jpg"

  return (
    <>
      <div
        id="section-home"
        className={styles.cover_letter_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px` ,
          height: `${height}px`,
          backgroundImage: localTheme === "dark"
            ? `url(${homeDark})`
            : `url(${homeLight})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderBottom: `1px solid ${theme.COLORS.PAGE_SEPARATOR}`
        }}
      >
        <div className={styles.cover_letter_sub_container}>
          <TitlePage text={`${t("HelloWorld")}!`}/>

          <TextAutoWrite text={`${t("IAmAFullstack")}.`}/>
        </div>
      </div>
    </>
  );
};

export default Home;
