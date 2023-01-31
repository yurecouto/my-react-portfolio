import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Project from "../../../interfaces/Project";

import { selectLanguage } from "../../../providers/slices/language.slice";
import { selectTheme } from "../../../providers/slices/theme.slice";

import FilterButton from "../../buttons/FilterButton";
import SkillCard from "../SkillCard";
import { TextPortfolio } from "../../texts/TextPortfolio";
import { TitleSecondary } from "../../texts/TitleSecondary";

import styles from "./styles.module.css";

interface Props {
  project: Project;
  onClick?: (param: any) => void;
}

function DetailsCard({ project, onClick }: Props) {
  const { t } = useTranslation();
  const theme = useSelector(selectTheme);
  const [hover, setHover] = useState<boolean>();
  const language:
  "pt_BR" |
  "en_US" |
  "es_ES" |
  "et" = useSelector(selectLanguage);

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  console.log(project.link)

  return (
    <div className={styles.details_card_container}>
      <div
        className={styles.details_card_header}
        style={{
          backgroundColor: theme.COLORS.CARD_BACKGROUND,
          borderColor: theme.COLORS.PAGE_SEPARATOR,
          boxShadow: `0 -4px 16px 1px ${theme.COLORS.CARD_SHADOW}`
        }}
      >
        <div className={styles.details_card_title}>
          <TitleSecondary textAlign="left" text={project.title[language]}/>
        </div>

        <Icon
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          icon="ph:x-bold"
          style={{
            color: hover
              ? theme.COLORS.TEXT_HIGHLIGHT
              : theme.COLORS.TEXT_DEFAULT,
            cursor: "pointer"
          }}
          onClick={onClick}
        />
      </div>

      <div
        className={styles.details_card_subcontainer}
        style={{
          backgroundColor: theme.COLORS.CARD_BACKGROUND,
          boxShadow: `-2px 8px 18px ${theme.COLORS.CARD_SHADOW}`
        }}
      >
        <img
          className={styles.details_card_image}
          src={project.image} alt=""
        />

        <div className={styles.details_card_info}>
          <div className={styles.details_card_info_description}>
            <TextPortfolio textAlign="left" text={project.description[language]}/>
          </div>

          <div className={styles.details_card_info_sub_container}>
            {project.link && (
              <a
                href={project.link}
                rel="noreferrer"
                target="_blank"
                className={styles.details_card_link}
                style={{
                  color: theme.COLORS.TEXT_DEFAULT,
                }}
              >
                <FilterButton
                  text={`${t("AccessProject")}`}
                />
              </a>
            )}
            <div className={styles.details_card_info_skills}>
              {project.skills.map(skill => (
                <SkillCard skill={skill}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsCard
