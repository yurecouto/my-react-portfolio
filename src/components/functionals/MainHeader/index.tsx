import React, { ReactNode } from "react";
import { BarTitleDefault } from "../../texts/BarTitleDefault";
import { ButtonDefault } from "../ButtonDefault";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
}

function MainHeader({
  children,
  }: InputProps) {

  return (
    <div className={styles.main_header_container}>
      <div className={styles.main_header_sub_container}>
        <div className={styles.main_header_name_container}>
          <BarTitleDefault text="Yure Couto"/>
        </div>

        <div className={styles.main_header_button_container}>
          <ButtonDefault title={"Home"}/>
          <ButtonDefault title={"About"}/>
          <ButtonDefault title={"Portfolio"}/>
          <ButtonDefault title={"Curriculum"}/>
        </div>
      </div>
    </div>
  )
};

export { MainHeader };
