import React from "react";
import { useTranslation } from "react-i18next";
import SkillCard from "../../components/cards/SkillCard";
import TimelineCard from "../../components/cards/TimelineCard";
import { SubTitleDefault } from "../../components/texts/SubTitleDefault";
import { SubTitleSecondary } from "../../components/texts/SubTitleSecondary";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";

import styles from "./styles.module.css";

function Curriculum () {
  const { t } = useTranslation();
  const {height, width} = useWindowSize();

  return (
    <>
      <div
        id="section-curriculum"
        className={styles.curriculum_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          minHeight: height,
          height: "auto",
        }}
      >
        <div className={styles.curriculum_title}>
          <TitlePage text={`${t("Curriculum")}:`}/>
        </div>

        <div className={styles.curriculum_sub_container}>
          <div className={styles.curriculum_timeline_container}>
            <div className={styles.curriculum_professional}>
              <div className={styles.curriculum_professional_title}>
                <SubTitleDefault text="Experience"/>
              </div>
              <div className={styles.curriculum_professional_cards}>
                <TimelineCard />
                <TimelineCard />
              </div>
            </div>
            <div className={styles.curriculum_education}>
              <div className={styles.curriculum_education_title}>
                <SubTitleDefault text="Education"/>
              </div>
              <div className={styles.curriculum_education_cards}>
                <TimelineCard />
              </div>
            </div>
          </div>

          <div className={styles.curriculum_sub_container_line}/>

          <div className={styles.curriculum_skills}>
            <div className={styles.curriculum_skills_title}>
              <SubTitleDefault text="Skills"/>
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
