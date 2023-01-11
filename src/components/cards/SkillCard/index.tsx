import React from "react";
import { TextSecondary } from "../../texts/TextSecondary";

import styles from "./styles.module.css";

interface Props {
  skill?: string;
}

function SkillCard({
  skill,
  }: Props) {

  return (
    <div className={styles.skill_card}>
      <TextSecondary text={skill}/>
    </div>
  )
}

export default SkillCard
