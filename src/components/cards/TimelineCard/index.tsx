import React from "react";
import { TextCurriculum } from "../../texts/TextCurriculum";
import { TextCurriculumSecondary } from "../../texts/TextCurriculumSecondary";
import { TitleCurriculum } from "../../texts/TitleCurriculum";

import styles from "./styles.module.css";

interface Props {
  position?: string;
  company?: string;
  period?: string;
  description: string;
}

function TimelineCard({
  position,
  company,
  period,
  description
  }: Props) {
  // const { t } = useTranslation();

  return (
    <div className={styles.timeline_card}>
      <div className={styles.timeline_card_container}>

        <div className={styles.timeline_card_column}>
          <div className={styles.timeline_card_when}>
            <TextCurriculumSecondary textAlign="right" text={period} />
          </div>
          <div className={styles.timeline_card_where}>
            <TextCurriculumSecondary textAlign="right" text={company} />
          </div>
        </div>


        <div className={styles.timeline_card_column}>
          <div className={styles.timeline_card_line_container}>
            <div className={styles.timeline_card_line_top}/>
            <div className={styles.timeline_card_indicator}>
              <div className={styles.timeline_card_indicator_core}/>
            </div>
            <div className={styles.timeline_card_line_bottom}/>
          </div>
        </div>

        <div className={styles.timeline_card_column}>
          <div className={styles.timeline_card_name}>
            <TitleCurriculum textAlign="left" text={position} />
          </div>
          <div className={styles.timeline_card_description}>
            <TextCurriculum textAlign="left" text={description}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TimelineCard
