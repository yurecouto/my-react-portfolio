import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectTheme } from "../../../providers/slices/theme.slice";

import { TextDefault } from "../../../components/texts/TextDefault";

import styles from "./styles.module.css";

interface Props {
  text: string;
  onClick?: (param: any) => void;
}

function FilterButton ({
  text,
  onClick }: Props) {
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
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      className={styles.portfolio_menu_option}
      onClick={onClick}
      style={{
        backgroundColor: hover ? theme.COLORS.TEXT_HIGHLIGHT : "transparent"
      }}
    >
      <TextDefault text={text}/>
    </div>
  );
};

export default FilterButton;
