import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const language:
  "pt_BR" |
  "en_US" |
  "es_ES" |
  "et" = useSelector(selectLanguage);

  return (
    <div className={styles.timeline_card}>
      <div className={styles.timeline_card_container}>

        <div className={styles.timeline_card_column}>
          <div
            className={styles.timeline_card_when}
            style={{borderColor: theme.COLORS.PAGE_SEPARATOR}}
          >
            <div className={styles.timeline_card_when_row}>
              <TextCurriculumSecondary textAlign="right" text={`${t("From")}:`} />
              <TextCurriculumSecondary textAlign="right" text={`${timeline.when.start}`} />
            </div>
            <div className={styles.timeline_card_when_row}>
              <TextCurriculumSecondary textAlign="right" text={`${t("To")}:`} />
              <TextCurriculumSecondary textAlign="right" text={`${timeline.when.end
                ? timeline.when.end
                : t("Currently")}`}
              />
            </div>
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
