import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import i18n from "../../../translations/i18n";

import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks/window";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

interface Language {
  code: string,
  icon: string,
  name: string
}

function ChangeLanguage() {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const theme = useSelector(selectTheme);

  const storageLang = localStorage.getItem("LANGUAGE") || ""

  const parsedLang = JSON.parse(storageLang) || {
    code: "pt_BR",
    icon: "openmoji:flag-brazil",
    name: "Portuguese"
  }

  const [actualLang, setActualLang] = useState<Language>(parsedLang);
  const [isOpen, setIsOpen] = useState<boolean>();
  const [isHover, setIsHover] = useState<boolean>();
  const [hover, setHover] = useState<boolean>();

  const handleMouseInContainer = () => {
    setIsHover(true);
  };

  const handleMouseOutContainer = () => {
    setIsHover(false);
  };

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const handleOpenContainer = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen && !isHover) {
      setTimeout(() => {
        setIsOpen(false)
      }, width > 960 ? 500 : 2000)
    }
  }, [isOpen, isHover, width])

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


  return (
    width > 960 ? (
      <div
        onMouseOver={handleMouseInContainer}
        onClick={handleOpenContainer}
        className={styles.change_lang_container}
      >
        {isOpen ? (
          <div
            onMouseOut={handleMouseOutContainer}
            className={styles.change_lang_options_container}
          >
            <div
              className={styles.change_lang_option}
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                backgroundColor: theme.COLORS.HEADER_BACKGROUND_HOVER,
                borderColor: theme.COLORS.PAGE_SEPARATOR,
              }}
              onClick={() => handleChangeLang({code: "pt_BR", icon: "openmoji:flag-brazil", name: "Portuguese"})}
            >
              <p
                style={{color: theme.COLORS.TEXT_DEFAULT}}
                className={styles.change_lang_option_text}
              >
                {t("Portuguese")}
              </p>
              <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-brazil"/>
            </div>
            <div
              className={styles.change_lang_option}
              style={{
                backgroundColor: theme.COLORS.HEADER_BACKGROUND_HOVER,
                borderColor: theme.COLORS.PAGE_SEPARATOR,
              }}
              onClick={() => handleChangeLang({code: "et", icon: "openmoji:flag-estonia", name: "Estonian"})}
            >
              <p
                style={{color: theme.COLORS.TEXT_DEFAULT}}
                className={styles.change_lang_option_text}
              >
                {t("Estonian")}
              </p>
              <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-estonia"/>
            </div>
            <div
              className={styles.change_lang_option}
              style={{
                backgroundColor: theme.COLORS.HEADER_BACKGROUND_HOVER,
                borderColor: theme.COLORS.PAGE_SEPARATOR,
              }}
              onClick={() => handleChangeLang({code: "en_US", icon: "openmoji:flag-united-kingdom", name: "English"})}
            >
              <p
                style={{color: theme.COLORS.TEXT_DEFAULT}}
                className={styles.change_lang_option_text}
              >
                {t("English")}
              </p>
              <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-united-kingdom"/>
            </div>
            <div
              className={styles.change_lang_option}
              style={{
                border: 0,
                borderEndEndRadius: 8,
                borderEndStartRadius: 8,
                backgroundColor: theme.COLORS.HEADER_BACKGROUND_HOVER,
                borderColor: theme.COLORS.PAGE_SEPARATOR,
              }}
              onClick={() => handleChangeLang({code: "es_ES", icon: "openmoji:flag-spain", name: "Spanish"})}
            >
              <p
                style={{color: theme.COLORS.TEXT_DEFAULT}}
                className={styles.change_lang_option_text}
              >
                {t("Spanish")}
              </p>
              <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-spain"/>
            </div>

          </div>
        ) : (
          <></>
        )}
        <div
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          className={styles.change_lang_selected}
          style={{ backgroundColor: hover
            ? theme.COLORS.HEADER_BACKGROUND_HOVER
            : theme.COLORS.HEADER_BACKGROUND
          }}
        >
          <p
            style={{color: theme.COLORS.TEXT_DEFAULT}}
            className={styles.change_lang_option_text}
          >
            {t(actualLang.name)}
          </p>
          <Icon className={styles.change_lang_option_icon} icon={actualLang.icon}/>
        </div>

      </div>
    ) : (
      <div
        onMouseOver={handleMouseInContainer}
        onClick={handleOpenContainer}
        className={styles.change_lang_container}
      >
        <div
          className={styles.change_lang_selected}
          style={{ backgroundColor: hover
            ? theme.COLORS.HEADER_BACKGROUND_HOVER
            : theme.COLORS.HEADER_BACKGROUND
          }}
        >
          <Icon className={styles.change_lang_option_icon} icon={actualLang.icon}/>
        </div>

        {isOpen ? (
          <div
          onMouseOut={handleMouseOutContainer}
          className={styles.change_lang_options_container}
          >
            <div
              className={styles.change_lang_option}
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                backgroundColor: theme.COLORS.HEADER_BACKGROUND_HOVER,
                borderColor: theme.COLORS.PAGE_SEPARATOR,
              }}
              onClick={() => handleChangeLang({code: "pt_BR", icon: "openmoji:flag-brazil", name: "Portuguese"})}
            >
              <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-brazil"/>
            </div>
            <div
              className={styles.change_lang_option}
              style={{
                backgroundColor: theme.COLORS.HEADER_BACKGROUND_HOVER,
                borderColor: theme.COLORS.PAGE_SEPARATOR,
              }}
              onClick={() => handleChangeLang({code: "et", icon: "openmoji:flag-estonia", name: "Estonian"})}
            >
              <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-estonia"/>
            </div>
            <div
              className={styles.change_lang_option}
              style={{
                backgroundColor: theme.COLORS.HEADER_BACKGROUND_HOVER,
                borderColor: theme.COLORS.PAGE_SEPARATOR,
              }}
              onClick={() => handleChangeLang({code: "en_US", icon: "openmoji:flag-united-kingdom", name: "English"})}
            >
              <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-united-kingdom"/>
            </div>
            <div
              className={styles.change_lang_option}
              style={{
                border: 0,
                borderEndEndRadius: 8,
                borderEndStartRadius: 8,
                backgroundColor: theme.COLORS.HEADER_BACKGROUND_HOVER,
                borderColor: theme.COLORS.PAGE_SEPARATOR,
              }}
              onClick={() => handleChangeLang({code: "es_ES", icon: "openmoji:flag-spain", name: "Spanish"})}
            >
              <Icon className={styles.change_lang_option_icon} icon="openmoji:flag-spain"/>
            </div>

          </div>
        ) : (
          <></>
        )}
      </div>
    )
  )
};

export { ChangeLanguage };
