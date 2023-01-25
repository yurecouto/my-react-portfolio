import React from "react";
import Timeline from "../../../interfaces/Timeline";
import { TextCurriculum } from "../../texts/TextCurriculum";
import { TextCurriculumSecondary } from "../../texts/TextCurriculumSecondary";
import { TitleCurriculum } from "../../texts/TitleCurriculum";

import styles from "./styles.module.css";

interface Props {
  timeline: Timeline
}

function TimelineCard({
  timeline
  }: Props) {
  // const { t } = useTranslation();

  return (
    <div className={styles.timeline_card}>
      <div className={styles.timeline_card_container}>

        <div className={styles.timeline_card_column}>
          <div className={styles.timeline_card_when}>
            <TextCurriculumSecondary textAlign="right" text={timeline.when} />
          </div>
          <div className={styles.timeline_card_where}>
            <TextCurriculumSecondary textAlign="right" text={timeline.where} />
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
            <TitleCurriculum textAlign="left" text={timeline.what} />
          </div>
          <div className={styles.timeline_card_description}>
            <TextCurriculum textAlign="left" text={timeline.description}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TimelineCard
