import { Icon } from "@iconify/react";
import React from "react";
import { useSelector } from "react-redux";
import Project from "../../../interfaces/project";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { TextPortfolio } from "../../texts/TextPortfolio";
import { TitleDefault } from "../../texts/TitleDefault";
import { TitlePortfolio } from "../../texts/TitlePortfolio";
import { TitleSecondary } from "../../texts/TitleSecondary";
import SkillCard from "../SkillCard";

import styles from "./styles.module.css";

interface Props {
  project: Project;
  onClick?: (param: any) => void;
}

function DetailsCard({ project }: Props) {
  const theme = useSelector(selectTheme);

  return (
    <div className={styles.details_card_container}>
      <div className={styles.details_card_header}>
        <TitleSecondary text={project.title}/>

        <Icon icon="ph:x-bold"/>
      </div>

      <div className={styles.details_card_subcontainer}>
        <img
          className={styles.details_card_image}
          src={project.image} alt=""
        />

        <div className={styles.details_card_info}>
          <div className={styles.details_card_info_description}>
            <TitlePortfolio textAlign="left" text="Description" />
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
