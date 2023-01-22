import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { TextSecondary } from "../../texts/TextSecondary";

import styles from "./styles.module.css";

interface Props {
  skill?: string;
}

function SkillCard({
  skill,
  }: Props) {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.skill_card}
      style={{ backgroundColor: theme.COLORS.TEXT_HIGHLIGHT}}
    >
      <TextSecondary text={skill}/>
    </div>
  )
}

export default SkillCard
