import React from "react";

import styles from "./styles.module.css";

import { PageContainer } from "../../components/containers/PageContainer";
import { TitleDefault } from "../../components/texts/TitleDefault";
import { TextDefault } from "../../components/texts/TextDefault";


const Curriculum = () => {
  return (
    <PageContainer>
      <div className={styles.curriculum_container}>
        <div className={styles.curriculum_container_timeline}>
          <div className={styles.curriculum_timeline}>
            <div className={styles.curriculum_timeline_card}>
              <div className={styles.curriculum_timeline_card_date}>
                <TextDefault text="12/3/1234"/>
              </div>
              <div className={styles.curriculum_timeline_card_content}>
              </div>
            </div>
            <div className={styles.curriculum_timeline_card}>
              <div className={styles.curriculum_timeline_card_date}>
                <TextDefault text="12/3/1234"/>
              </div>
              <div className={styles.curriculum_timeline_card_content}>
              </div>
            </div>
            <div className={styles.curriculum_timeline_card}>
              <div className={styles.curriculum_timeline_card_date}>
                <TextDefault text="12/3/1234"/>
              </div>
              <div className={styles.curriculum_timeline_card_content}>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.curriculum_container_skills}>

        </div>
      </div>
    </PageContainer>
  );
};

export default Curriculum;
