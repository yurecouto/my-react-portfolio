import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { SubTitleCurriculum } from "../../texts/SubTitleCurriculum";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

interface Props {
  icon?: string;
  name?: string;
  color?: string;
  link?: string;
}

function ContactCard({
  icon = "",
  name = "",
  color = "",
  link = "",
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
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className={styles.contact_card_link}
    >
      <div
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        className={styles.contact_sub_container_row}
        style={{backgroundColor: theme.COLORS.CARD_BACKGROUND}}
      >
        <div className={styles.contact_sub_container_icon}>
          <Icon
            className={styles.contact_icon}
            style={{ color: hover ? color : theme.COLORS.TEXT_DEFAULT }}
            icon={icon}
          />
        </div>

        <div className={styles.contact_sub_container_title}>
          <SubTitleCurriculum hover={hover} text={name}/>
        </div>
      </div>
    </a>
  )
}

export default ContactCard
