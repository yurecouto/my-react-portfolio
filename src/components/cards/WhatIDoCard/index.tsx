import React, { useState } from "react";
import { Icon } from "@iconify/react";

import { TextSecondary } from "../../texts/TextSecondary";
import { TitleSecondary } from "../../texts/TitleSecondary";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

interface Props {
  icon: string;
  title: string;
  text: string;
}

function WhatIDoCard({
  icon,
  title,
  text
  }: Props) {
  const theme = useSelector(selectTheme);

  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      className={styles.what_i_do_card}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      style={{
        backgroundColor: theme.COLORS.CARD_BACKGROUND,
        boxShadow: `0 0 16px ${theme.COLORS.CARD_SHADOW}`
      }}
    >
      <div
        className={styles.what_i_do_card_icon_container}
        style={{ backgroundColor: theme.COLORS.CARD_SECONDARY }}
      >
        <Icon
          icon={icon}
          style={{ color: hover
            ? theme.COLORS.TEXT_SUB_HIGHLIGHT
            : theme.COLORS.TEXT_SECONDARY }}
          className={styles.what_i_do_card_icon}
        />
      </div>

      <div className={styles.what_i_do_card_container}>
        <div className={styles.what_i_do_card_container_title}>
          <TitleSecondary textAlign="left" text={title} />
        </div>
        <div className={styles.what_i_do_card_container_text}>
          <TextSecondary textAlign="left" text={text}/>
        </div>
      </div>
    </div>
  )
}

export default WhatIDoCard
