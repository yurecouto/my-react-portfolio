import React, { useState } from "react";

import { useWindowSize } from "../../hooks/window"

import styles from "./styles.module.css";
import avatar from "../../static/avatar.png"
import { TitleDefault } from "../texts/TitleDefault";
import { TextList } from "../texts/TextList";
import { Icon } from "@iconify/react";
import { SwitchTheme } from "../buttons/SwitchTheme";
import { ChangeLanguage } from "../buttons/ChangeLanguage";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectTheme } from "../../providers/slices/theme.slice";


function Header() {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const theme = useSelector(selectTheme);

  const [hoverIcon, setHoverIcon] = useState<boolean>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMouseInIcon = () => {
    setHoverIcon(true);
  };

  const handleMouseOutIcon = () => {
    setHoverIcon(false);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDropDown = () => {
    setIsOpen((oldstate) => !oldstate)
  }

  return (
    width > 960 ? (
      <header
        style={{ backgroundColor: theme.COLORS.HEADER_BACKGROUND }}
        className={styles.header}
      >
        <div className={styles.header_profile_pic_container} >
          <img className={styles.header_profile_pic} src={avatar} alt=""/>
          <TitleDefault text={"Yure Couto"}/>
        </div>

        <div className={styles.header_menu}>
          <ul className={styles.header_menu_ul}>
            <TextList text={`${t("Home")}`} handleSomething={() => handleScroll("section-home")}/>
            <TextList text={`${t("AboutMe")}`} handleSomething={() => handleScroll("section-about-me")}/>
            <TextList text={`${t("WhatIDo")}`} handleSomething={() => handleScroll("section-what-i-do")}/>
            <TextList text={`${t("Curriculum")}`} handleSomething={() => handleScroll("section-curriculum")}/>
            <TextList text={`${t("Portfolio")}`} handleSomething={() => handleScroll("section-portfolio")}/>
            <TextList text={`${t("Contact")}`} handleSomething={() => handleScroll("section-contact")}/>
          </ul>
        </div>

        <div className={styles.header_links_container}>
          <SwitchTheme/>
          <ChangeLanguage/>
        </div>
      </header>
    ) : (
      <header
        className={styles.header}
        style={{ backgroundColor: theme.COLORS.HEADER_BACKGROUND }}
      >
        <div>
          <TitleDefault text={"Yure Couto"}/>
        </div>

        <div className={styles.header_links_container_main}>
          <div className={styles.header_links_container}>
            <SwitchTheme/>
            <ChangeLanguage/>
          </div>

          <div>
            <Icon
              className={styles.icon_menu}
              onMouseOver={handleMouseInIcon}
              onMouseOut={handleMouseOutIcon}
              onClick={handleDropDown}
              style={{
                color: hoverIcon
                ? theme.COLORS.TEXT_HIGHLIGHT
                : theme.COLORS.TEXT_DEFAULT
              }}
              icon={ !isOpen ? "material-symbols:menu-rounded" : "ph:x-bold"}
            />

            {isOpen && (
              <div className={styles.header_menu}>
                <ul className={styles.header_menu_ul}>
                  <TextList text={`${t("Home")}`} handleSomething={() => handleScroll("section-home")}/>
                  <div className={styles.header_menu_line} style={{ borderBottomColor: theme.COLORS.PAGE_SEPARATOR}}/>
                  <TextList text={`${t("AboutMe")}`} handleSomething={() => handleScroll("section-about-me")}/>
                  <div className={styles.header_menu_line} style={{ borderBottomColor: theme.COLORS.PAGE_SEPARATOR}}/>
                  <TextList text={`${t("WhatIDo")}`} handleSomething={() => handleScroll("section-what-i-do")}/>
                  <div className={styles.header_menu_line} style={{ borderBottomColor: theme.COLORS.PAGE_SEPARATOR}}/>
                  <TextList text={`${t("Curriculum")}`} handleSomething={() => handleScroll("section-curriculum")}/>
                  <div className={styles.header_menu_line} style={{ borderBottomColor: theme.COLORS.PAGE_SEPARATOR}}/>
                  <TextList text={`${t("Portfolio")}`} handleSomething={() => handleScroll("section-portfolio")}/>
                  <div className={styles.header_menu_line} style={{ borderBottomColor: theme.COLORS.PAGE_SEPARATOR}}/>
                  <TextList text={`${t("Contact")}`} handleSomething={() => handleScroll("section-contact")}/>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    )
  )
};

export { Header };
