import React, { ReactNode } from "react";

import styles from "./styles.module.css";
import avatar from "../../static/avatar.png"
import { TitleDefault } from "../texts/TitleDefault";
import { TextList } from "../texts/TextList";
import { IconDefault } from "../texts/IconDefault";

interface Props {
  children?: ReactNode;
}

function Header({
  children,
  }: Props) {

  return (
    <header className={styles.header}>
      <div className={styles.header_profile_pic_container} >
        <img className={styles.header_profile_pic} src={avatar} alt=""/>
        <TitleDefault text={"Yure Couto"}/>
      </div>

      <div className={styles.header_menu}>
        <ul className={styles.header_menu_ul}>
          <TextList text="Home"/>
          <TextList text="What I Do"/>
          <TextList text="Curriculum"/>
          <TextList text="Portfolio"/>
          <TextList text="Contact"/>
        </ul>
      </div>

      <div className={styles.header_links_container}>
        <IconDefault icon="mdi:linkedin" hoverColor="#0072b1"/>
        <IconDefault icon="mdi:github" hoverColor="#63686a"/>
        <IconDefault icon="mdi:twitter" hoverColor="#00acee"/>
      </div>
    </header>
  )
};

export { Header };
