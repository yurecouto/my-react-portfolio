import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { SubTitleCurriculum } from "../../texts/SubTitleCurriculum";

import styles from "./styles.module.css";

interface Props {
  icon?: string;
  name?: string;
  link?: string;
}

function ContactCard({
  icon = "",
  name = "",
  link = "",
  }: Props) {

  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      className={styles.contact_sub_container_row}
    >
      <div className={styles.contact_sub_container_icon}>
        <Icon
          className={styles.contact_icon}
          style={{ color: "whitesmoke" }}
          icon={icon}
        />
      </div>

      <div className={styles.contact_sub_container_title}>
        <SubTitleCurriculum hover={hover} text={name}/>
      </div>
    </div>
  )
}

export default ContactCard
