import React, { useState } from "react";
import { Icon } from "@iconify/react";
import i18n from "../../../translations/i18n";

import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

interface Language {
  code: string,
  icon: string,
  name: string
}

function ChangeLanguage() {
  const { t } = useTranslation();

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
        localStorage.setItem("LANGUAGE", JSON.stringify(lang))
        break

      case "en_US":
        setActualLang(lang)
        i18n.changeLanguage("en_US")
        localStorage.setItem("LANGUAGE", JSON.stringify(lang))
        break

      case "es_ES":
        setActualLang(lang)
        i18n.changeLanguage("es_ES")
        localStorage.setItem("LANGUAGE", JSON.stringify(lang))
        break

      case "et":
        setActualLang(lang)
        i18n.changeLanguage("et")
        localStorage.setItem("LANGUAGE", JSON.stringify(lang))
        break
    }
  }

  console.log(t(actualLang.name))

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={styles.change_lang_container}>
      {isOpen ? (
        <div className={styles.change_lang_options_container}>
          <div
            className={styles.change_lang_option}
            style={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}
            onClick={() => handleChangeLang({code: "pt_BR", icon: "openmoji:flag-brazil", name: "Portuguese"})}
          >
            <p className={styles.change_lang_option_text}>{t("Portuguese")}</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-brazil"/>
          </div>
          <div
            className={styles.change_lang_option}
            onClick={() => handleChangeLang({code: "et", icon: "openmoji:flag-estonia", name: "Estonian"})}
          >
            <p className={styles.change_lang_option_text}>{t("Estonian")}</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-estonia"/>
          </div>
          <div
            className={styles.change_lang_option}
            onClick={() => handleChangeLang({code: "en_US", icon: "openmoji:flag-canada", name: "English"})}
          >
            <p className={styles.change_lang_option_text}>{t("English")}</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-canada"/>
          </div>
          <div
            className={styles.change_lang_option}
            style={{border: 0, borderEndEndRadius: 8, borderEndStartRadius: 8}}
            onClick={() => handleChangeLang({code: "es_ES", icon: "openmoji:flag-spain", name: "Spanish"})}
          >
            <p className={styles.change_lang_option_text}>{t("Spanish")}</p>
            <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-spain"/>
          </div>

        </div>
      ) : (
        <></>
      )}
      <div className={styles.change_lang_selected}>
        <p className={styles.change_lang_option_text}>{t(actualLang.name)}</p>
        <Icon className={styles.change_lang_option_icon} icon={actualLang.icon}/>
      </div>

    </div>
  )
};

export { ChangeLanguage };
