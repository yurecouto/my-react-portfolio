import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import SkillCard from "../../components/cards/SkillCard";
import TimelineCard from "../../components/cards/TimelineCard";
import { SubTitleDefault } from "../../components/texts/SubTitleDefault";
import { SubTitleSecondary } from "../../components/texts/SubTitleSecondary";
import { TitlePage } from "../../components/texts/TitlePage";

import { useWindowSize } from "../../hooks/window";
import Timeline from "../../interfaces/Timeline";
import { selectTheme } from "../../providers/slices/theme.slice";

import styles from "./styles.module.css";

function Curriculum () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);

  const timelines: Timeline[] = [
    {
      what: {
        pt_BR: "Titulo em portugues.",
        en_US: "Titulo em ingles.",
        es_ES: "Titulo em espanhol.",
        et: "Titulo em estoniano.",
      },
      where: "SPRO IT Solutions",
      when: "ago - 2022 / now",
      description: {
        pt_BR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        en_US: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        es_ES: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        et: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      what: {
        pt_BR: "Titulo em portugues.",
        en_US: "Titulo em ingles.",
        es_ES: "Titulo em espanhol.",
        et: "Titulo em estoniano.",
      },
      where: "UNIDESC - Centro Universitário de Desenvolvimento do Centro-Oeste",
      when: "jan - 2022 / now",
      description: {
        pt_BR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        en_US: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        es_ES: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        et: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
  ];

  return (
    <>
      <div
        id="section-curriculum"
        className={styles.curriculum_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          minHeight: height,
          height: "auto",
          borderBottom: `1px solid ${theme.COLORS.PAGE_SEPARATOR}`
        }}
      >
        <div className={styles.curriculum_title}>
          <TitlePage text={`${t("Curriculum")}:`}/>
        </div>

        <div className={styles.curriculum_sub_container}>
          <div className={styles.curriculum_timeline_container}>
            <div className={styles.curriculum_professional}>
              <div className={styles.curriculum_professional_title}>
                <SubTitleDefault text={`${t("Experience")}`}/>
              </div>
              <div className={styles.curriculum_professional_cards}>
                <TimelineCard
                  timeline={timelines[0]}
                />
              </div>
            </div>
            <div className={styles.curriculum_education}>
              <div className={styles.curriculum_education_title}>
                <SubTitleDefault text={`${t("Education")}`}/>
              </div>
              <div className={styles.curriculum_education_cards}>
                <TimelineCard
                  timeline={timelines[1]}
                />
              </div>
            </div>
          </div>

          <div className={styles.curriculum_sub_container_line}/>

          <div className={styles.curriculum_skills}>
            <div className={styles.curriculum_skills_title}>
              <SubTitleDefault text={`${t("Technologies")}`}/>
            </div>

            <div className={styles.curriculum_skills_container}>
              <div className={styles.curriculum_skills_container_title}>
                <SubTitleSecondary text="Back-end"/>
              </div>
              <div className={styles.curriculum_skills_sub_container}>
                <SkillCard skill="Golang"/>
                <SkillCard skill="TypeScript"/>
                <SkillCard skill="Node"/>
                <SkillCard skill="Rest API"/>
              </div>
            </div>

            <div className={styles.curriculum_skills_container}>
              <div className={styles.curriculum_skills_container_title}>
                <SubTitleSecondary text="Front-end"/>
              </div>
              <div className={styles.curriculum_skills_sub_container}>
                <SkillCard skill="React"/>
                <SkillCard skill="Redux"/>
                <SkillCard skill="Axios"/>
                <SkillCard skill="CSS"/>
                <SkillCard skill="HTML"/>
                <SkillCard skill="Flexbox"/>
              </div>
            </div>

            <div className={styles.curriculum_skills_container}>
              <div className={styles.curriculum_skills_container_title}>
                <SubTitleSecondary text="Data Base"/>
              </div>
              <div className={styles.curriculum_skills_sub_container}>
                <SkillCard skill="MongoDB"/>
                <SkillCard skill="PostgreSQL"/>
                <SkillCard skill="MySQL"/>
              </div>
            </div>

            <div className={styles.curriculum_skills_container}>
              <div className={styles.curriculum_skills_container_title}>
                <SubTitleSecondary text="Mobile"/>
              </div>
              <div className={styles.curriculum_skills_sub_container}>
                <SkillCard skill="Dart"/>
                <SkillCard skill="Flutter"/>
                <SkillCard skill="React Native"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
