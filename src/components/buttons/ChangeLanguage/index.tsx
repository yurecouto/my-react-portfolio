import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

function ChangeLanguage() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const localTheme = localStorage.getItem("THEME")
  const [nightMode, setNightMode] = useState<boolean>(localTheme === "dark");
  const [isOpen, setIsOpen] = useState<boolean>(localTheme === "dark");

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={styles.change_lang_container}>

      {isOpen ? (
        <div className={styles.change_lang_options_container}>
          <div className={styles.change_lang_option}>
            <p className={styles.change_lang_option_text}>Portugues</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-brazil"/>
          </div>
          <div className={styles.change_lang_option}>
            <p className={styles.change_lang_option_text}>Estoniano</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-estonia"/>
          </div>
          <div className={styles.change_lang_option}>
            <p className={styles.change_lang_option_text}>Ingles</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-canada"/>
          </div>
        </div>
      ) : (
        <div className={styles.change_lang_selected}>
          <p className={styles.change_lang_option_text}>Portugues</p>
          <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-brazil"/>
        </div>
      )}
    </div>
  )
};

export { ChangeLanguage };
