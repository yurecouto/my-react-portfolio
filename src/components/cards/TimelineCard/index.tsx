import React from "react";
import { useSelector } from "react-redux";
import Timeline from "../../../interfaces/Timeline";
import { selectLanguage } from "../../../providers/slices/language.slice";
import { selectTheme } from "../../../providers/slices/theme.slice";
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
  const theme = useSelector(selectTheme);
  const language:
  "pt_BR" |
  "en_US" |
  "es_ES" |
  "et" = useSelector(selectLanguage);

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
            <div
              className={styles.timeline_card_line_top}
              style={{backgroundColor: theme.COLORS.PAGE_SEPARATOR}}
            />
            <div
              className={styles.timeline_card_indicator}
              style={{backgroundColor: theme.COLORS.TEXT_HIGHLIGHT}}
            >
              <div
                className={styles.timeline_card_indicator_core}
                style={{backgroundColor: theme.COLORS.PAGE_SEPARATOR}}
              />
            </div>
            <div
              className={styles.timeline_card_line_bottom}
              style={{backgroundColor: theme.COLORS.PAGE_SEPARATOR}}
            />
          </div>
        </div>

        <div className={styles.timeline_card_column}>
          <div className={styles.timeline_card_name}>
            <TitleCurriculum textAlign="left" text={timeline.what[language]} />
          </div>
          <div className={styles.timeline_card_description}>
            <TextCurriculum textAlign="left" text={timeline.description[language]}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TimelineCard
