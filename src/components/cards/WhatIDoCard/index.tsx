import { Icon } from "@iconify/react";
import React, { ReactNode } from "react";

import { TextSecondary } from "../../texts/TextSecondary";
import { TitleSecondary } from "../../texts/TitleSecondary";

import styles from "./styles.module.css";

interface Props {
  children?: ReactNode;
  icon: string
}

function WhatIDoCard({
  children,
  icon
  }: Props) {

  return (
    <div className={styles.what_i_do_card}>
      <div className={styles.what_i_do_card_icon_container}>
        <Icon
          icon={icon}
          className={styles.what_i_do_card_icon}
        />
      </div>

      <div className={styles.what_i_do_card_container}>
        <div className={styles.what_i_do_card_container_title}>
          <TitleSecondary textAlign="left" text="Web Development" />
        </div>
        <div className={styles.what_i_do_card_container_text}>
          <TextSecondary textAlign="left" text="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."/>
        </div>
      </div>
    </div>
  )
}

export default WhatIDoCard
