import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import SkillCard from "../../components/cards/SkillCard";
import TimelineCard from "../../components/cards/TimelineCard";
import { SubTitleDefault } from "../../components/texts/SubTitleDefault";
import { SubTitleSecondary } from "../../components/texts/SubTitleSecondary";
import { TitlePage } from "../../components/texts/TitlePage";

import { useWindowSize } from "../../hooks/window";
import Skill from "../../interfaces/Skill";
import Timeline from "../../interfaces/Timeline";
import { selectTheme } from "../../providers/slices/theme.slice";
import api from "../../services/api";

import styles from "./styles.module.css";

function Curriculum () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);

  const [educations, setEducations] = useState<Timeline[]>();
  const [experiences, setExperiences] = useState<Timeline[]>();
  const [skills, setSkills] = useState<Skill[]>();

  useEffect(() => {
    const fetch = async () => {
      const response = await api.get(`education/showall`);
      setEducations(response.data.reverse());
    }

    fetch()
  }, [])

  useEffect(() => {
    const fetch = async () => {
      const response = await api.get(`experience/showall`);
      setExperiences(response.data.reverse());
    }

    fetch()
  }, [])

  useEffect(() => {
    const fetch = async () => {
      const response = await api.get(`skill/showall`);


      setSkills(response.data);
    }

    fetch()
  }, [])

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
                {experiences?.map((experience) => (
                  <TimelineCard
                    timeline={experience}
                  />
                ))}
              </div>
            </div>
            <div className={styles.curriculum_education}>
              <div className={styles.curriculum_education_title}>
                <SubTitleDefault text={`${t("Education")}`}/>
              </div>
              <div className={styles.curriculum_education_cards}>
                {educations?.map((education) => (
                  <TimelineCard
                    timeline={education}
                  />
                ))}
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
                {skills?.map((skill) => skill.type === "backend" && (
                  <SkillCard skill={skill.name}/>
                ))}
              </div>
            </div>

            <div className={styles.curriculum_skills_container}>
              <div className={styles.curriculum_skills_container_title}>
                <SubTitleSecondary text="Front-end"/>
              </div>
              <div className={styles.curriculum_skills_sub_container}>
                {skills?.map((skill) => skill.type === "frontend" && (
                  <SkillCard skill={skill.name}/>
                ))}
              </div>
            </div>

            <div className={styles.curriculum_skills_container}>
              <div className={styles.curriculum_skills_container_title}>
                <SubTitleSecondary text="Data Base"/>
              </div>
              <div className={styles.curriculum_skills_sub_container}>
                {skills?.map((skill) => skill.type === "database" && (
                  <SkillCard skill={skill.name}/>
                ))}
              </div>
            </div>

            <div className={styles.curriculum_skills_container}>
              <div className={styles.curriculum_skills_container_title}>
                <SubTitleSecondary text="Mobile"/>
              </div>
              <div className={styles.curriculum_skills_sub_container}>
                {skills?.map((skill) => skill.type === "mobile" && (
                  <SkillCard skill={skill.name}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
