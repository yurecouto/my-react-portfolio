import React, { ReactNode, useState } from "react";

import { useWindowSize } from "../../hooks/window"

import styles from "./styles.module.css";
import avatar from "../../static/avatar.png"
import { TitleDefault } from "../texts/TitleDefault";
import { TextList } from "../texts/TextList";
import { IconDefault } from "../texts/IconDefault";
import { Icon } from "@iconify/react";
import { SwitchTheme } from "../buttons/SwitchTheme";
import { ChangeLanguage } from "../buttons/ChangeLanguage";
import { useTranslation } from "react-i18next";

interface Props {
  children?: ReactNode;
}

function Header({
  children,
  }: Props) {
  const { t } = useTranslation();
  const {width} = useWindowSize();

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
      <header className={styles.header}>
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
      <header className={styles.header}>
        <div>
          <TitleDefault text={"Yure Couto"}/>
        </div>

        <div className={styles.header_links_container_main}>
          <div className={styles.header_links_container}>
            <IconDefault icon="mdi:linkedin" hoverColor="#0072b1"/>
            <IconDefault icon="mdi:github" hoverColor="#63686a"/>
            <IconDefault icon="mdi:twitter" hoverColor="#00acee"/>
          </div>

          <div>
            <Icon
              className={styles.icon_menu}
              onMouseOver={handleMouseInIcon}
              onMouseOut={handleMouseOutIcon}
              onClick={handleDropDown}
              style={{
                color: hoverIcon ? "red" : "whitesmoke"
              }}
              icon={ !isOpen ? "material-symbols:menu-rounded" : "ph:x-bold"}
            />

            {isOpen && (
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
            )}
          </div>
        </div>
      </header>
    )
  )
};

export { Header };
