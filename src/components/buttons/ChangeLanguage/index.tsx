import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import i18n from "../../../translations/i18n";

import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks/window";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { setLanguage } from "../../../providers/slices/language.slice";
import { LanguageOption } from "./LanguageOption";

interface Language {
  code: string,
  icon: string,
  name: string
}

function ChangeLanguage() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const theme = useSelector(selectTheme);

  let parsedLang;

  if (localStorage.getItem("LANGUAGE")) {
    const storageLang = localStorage.getItem("LANGUAGE") || ""
    parsedLang = JSON.parse(storageLang)
  } else {
    parsedLang = {
      code: "pt_BR",
      icon: "openmoji:flag-brazil",
      name: "Portuguese"
    }
  };

  const [actualLang, setActualLang] = useState<Language>(parsedLang);
  const [isOpen, setIsOpen] = useState<boolean>();
  const [isHover, setIsHover] = useState<boolean>();
  const [hover, setHover] = useState<boolean>();

  const handleMouseInContainer = () => {setIsHover(true);};
  const handleMouseOutContainer = () => {setIsHover(false);};

  const handleMouseIn = () => {setHover(true);};
  const handleMouseOut = () => {setHover(false);};

  const handleOpenContainer = () => {setIsOpen(!isOpen)}

  useEffect(() => {
    if (isOpen && !isHover) {
      setTimeout(() => {
        setIsOpen(false)
      }, width > 960 ? 500 : 2000)
    }
  }, [isOpen, isHover, width])

  async function handleChangeLang(lang: Language) {
    console.log(lang)
    switch (lang.code) {
      case "pt_BR":
        setActualLang(lang);
        i18n.changeLanguage("pt_BR");
        localStorage.setItem("LANGUAGE", JSON.stringify(lang));
        dispatch(setLanguage("pt_BR"));
        break

      case "en_US":
        setActualLang(lang);
        i18n.changeLanguage("en_US");
        localStorage.setItem("LANGUAGE", JSON.stringify(lang));
        dispatch(setLanguage("en_US"));
        break;

      case "es_ES":
        setActualLang(lang);
        i18n.changeLanguage("es_ES");
        localStorage.setItem("LANGUAGE", JSON.stringify(lang));
        dispatch(setLanguage("es_ES"));
        break

      case "et":
        setActualLang(lang);
        i18n.changeLanguage("et");
        localStorage.setItem("LANGUAGE", JSON.stringify(lang));
        dispatch(setLanguage("et"));
        break;
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
            <LanguageOption
              first={true}
              language={{code: "en_US", icon: "openmoji:flag-united-kingdom", name: "English"}}
              onClick={handleChangeLang}
            />
            <LanguageOption
              language={{code: "es_ES", icon: "openmoji:flag-spain", name: "Spanish"}}
              onClick={handleChangeLang}
            />
            <LanguageOption
              language={{code: "et", icon: "openmoji:flag-estonia", name: "Estonian"}}
              onClick={handleChangeLang}
            />
            <LanguageOption
              last={true}
              language={{code: "pt_BR", icon: "openmoji:flag-brazil", name: "Portuguese"}}
              onClick={handleChangeLang}
            />
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
            <LanguageOption
              first={true}
              language={{code: "en_US", icon: "openmoji:flag-united-kingdom", name: "English"}}
              onClick={handleChangeLang}
            />
            <LanguageOption
              language={{code: "es_ES", icon: "openmoji:flag-spain", name: "Spanish"}}
              onClick={handleChangeLang}
            />
            <LanguageOption
              language={{code: "et", icon: "openmoji:flag-estonia", name: "Estonian"}}
              onClick={handleChangeLang}
            />
            <LanguageOption
              last={true}
              language={{code: "pt_BR", icon: "openmoji:flag-brazil", name: "Portuguese"}}
              onClick={handleChangeLang}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    )
  )
};

export { ChangeLanguage };
