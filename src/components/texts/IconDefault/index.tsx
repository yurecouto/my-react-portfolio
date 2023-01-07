import React, { useState } from "react";
import { Icon } from "@iconify/react";

import styles from "./styles.module.css";

interface Props {
  icon?: string;
  hoverColor?: string;
}

function IconDefault({
  icon = "",
  hoverColor
  }: Props) {

  const [hoverIcon, setHoverIcon] = useState<boolean>();

  const handleMouseInIcon = () => {
    setHoverIcon(true);
  };

  const handleMouseOutIcon = () => {
    setHoverIcon(false);
  };

  return (
    <Icon
      className={styles.icon_default}
      onMouseOver={handleMouseInIcon}
      onMouseOut={handleMouseOutIcon}
      style={{
        color: hoverIcon ? hoverColor : "whitesmoke"
      }}
      icon={icon}
    />
  )
};

export { IconDefault };
