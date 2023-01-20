import React, { useState } from "react";
import { Icon } from "@iconify/react";
import i18n from "../../../translations/i18n";

import styles from "./styles.module.css";

interface Language {
  code: string,
  icon: string,
  name: string
}

function ChangeLanguage() {
  const storageLang = localStorage.getItem("LANGUAGE") || ""

  const parsedLang = JSON.parse(storageLang) || {
    code: "pt_BR",
    icon: "openmoji:flag-brazil",
    name: "Portuguese"
  }

  const [isOpen, setIsOpen] = useState<boolean>();
  const [actualLang, setActualLang] = useState<Language>(parsedLang);

  async function handleChangeLang(lang: Language) {
    switch (lang.code) {
      case "pt_BR":
        setActualLang(lang)
        i18n.changeLanguage("pt_BR")
        break

      case "en_US":
        setActualLang(lang)
        i18n.changeLanguage("en_US")
        break

      case "es_ES":
        setActualLang(lang)
        i18n.changeLanguage("es_ES")
        break

      case "et":
        setActualLang(lang)
        i18n.changeLanguage("et")
        break
    }
  }

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={styles.change_lang_container}>
      {isOpen ? (
        <div className={styles.change_lang_options_container}>
          <div
            className={styles.change_lang_option}
            onClick={() => handleChangeLang({code: "pt_BR", icon: "openmoji:flag-brazil", name: "Portuguese"})}
          >
            <p className={styles.change_lang_option_text}>Portugues</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-brazil"/>
          </div>

          <div
            className={styles.change_lang_option}
            onClick={() => handleChangeLang({code: "et", icon: "openmoji:flag-estonia", name: "Estoniano"})}
          >
            <p className={styles.change_lang_option_text}>Estoniano</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-estonia"/>
          </div>

          <div
            className={styles.change_lang_option}
            onClick={() => handleChangeLang({code: "en_US", icon: "openmoji:flag-canada", name: "Ingles"})}
          >
            <p className={styles.change_lang_option_text}>Ingles</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-canada"/>
          </div>

          <div
            className={styles.change_lang_option}
            onClick={() => handleChangeLang({code: "es_ES", icon: "openmoji:flag-spain", name: "Espanhol"})}
          >
            <p className={styles.change_lang_option_text}>Espanhol</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-spain"/>
          </div>

        </div>
      ) : (
        <></>
      )}
      <div className={styles.change_lang_selected}>
        <p className={styles.change_lang_option_text}>{actualLang.name}</p>
        <Icon className={styles.change_lang_option_icon} icon={actualLang.icon}/>
      </div>

    </div>
  )
};

export { ChangeLanguage };
