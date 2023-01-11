import React, { ReactNode } from "react";
import { TextCurriculum } from "../../texts/TextCurriculum";
import { TextCurriculumSecondary } from "../../texts/TextCurriculumSecondary";
import { TitleCurriculum } from "../../texts/TitleCurriculum";

import styles from "./styles.module.css";

interface Props {
  children?: ReactNode;
}

function TimelineCard({
  children,
  }: Props) {

  return (
    <div className={styles.timeline_card}>
      <div className={styles.timeline_card_container}>

        <div className={styles.timeline_card_column}>
          <div className={styles.timeline_card_when}>
            <TextCurriculumSecondary textAlign="right" text="ago/2022 dec/2023" />
          </div>
          <div className={styles.timeline_card_where}>
            <TextCurriculumSecondary textAlign="right" text="Spro It Solutions" />
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
            <TitleCurriculum textAlign="left" text="Full Stack developer" />
          </div>
          <div className={styles.timeline_card_description}>
            <TextCurriculum textAlign="left" text="Integrando o time de Inovação da SPRO, atuando no Back-end, com API RESTs em Node com TypeScript, banco de dados MongoDB, e no Mobile em React Native construindo um aplicativo multiplataforma para consumir dados de sensores em campo e enviar informações e comandos para equipamentos, tudo utilizando padrões SOLID e clean code. "/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TimelineCard
