import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Project from "../../../interfaces/Project";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { TextPortfolio } from "../../texts/TextPortfolio";
import { TitleSecondary } from "../../texts/TitleSecondary";
import SkillCard from "../SkillCard";

import styles from "./styles.module.css";

interface Props {
  project: Project;
  onClick?: (param: any) => void;
}

function DetailsCard({ project, onClick }: Props) {
  const theme = useSelector(selectTheme);
  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div className={styles.details_card_container}>
      <div
        className={styles.details_card_header}
        style={{backgroundColor: theme.COLORS.CARD_BACKGROUND}}
      >
        <TitleSecondary text={project.title}/>

        <Icon
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          icon="ph:x-bold"
          style={{color: hover
            ? theme.COLORS.TEXT_HIGHLIGHT
            : theme.COLORS.TEXT_DEFAULT
          }}
          onClick={onClick}
        />
      </div>

      <div
        className={styles.details_card_subcontainer}
        style={{backgroundColor: theme.COLORS.CARD_BACKGROUND}}
      >
        <img
          className={styles.details_card_image}
          src={project.image} alt=""
        />

        <div className={styles.details_card_info}>
          <div className={styles.details_card_info_description}>
            <TextPortfolio textAlign="left" text={project.description}/>
          </div>

          <div className={styles.details_card_info_skills}>
            {project.skills.map(skill => (
              <SkillCard skill={skill}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsCard
