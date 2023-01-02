import React from "react";

import styles from "./styles.module.css";

import { PageContainer } from "../../components/containers/PageContainer";
import { TextCurriculum } from "../../components/texts/TextCurriculum";
import { TitleDefault } from "../../components/texts/TitleDefault";


const Curriculum = () => {
  return (
    <PageContainer>
      <div className={styles.curriculum_container}>
        <div className={styles.curriculum_container_timeline}>
          <div className={styles.curriculum_timeline}>
            <div className={styles.curriculum_timeline_card}>
              <div className={styles.curriculum_timeline_card_date}>
                <div className={styles.curriculum_timeline_card_date_container}>
                  <TextCurriculum text="Atualmente"/>
                  <TextCurriculum text="ago 2022"/>
                </div>
                <div className={styles.curriculum_timeline_card_date_arrow}/>
              </div>
              <div className={styles.curriculum_timeline_card_content}>
                <div className={styles.curriculum_timeline_card_content_title}>
                  <TitleDefault text="FullStack Developer"/>
                </div>
                <TextCurriculum text="Integrando o time de Inovação da SPRO, atuando no Back-end, com API RESTs em Node com TypeScript, banco de dados MongoDB, Socket.io para mensageria, e no Mobile em React Native construindo um aplicativo multiplataforma para consumir dados de sensores em campo e enviar informações e comandos para equipamentos, tudo utilizando padrões SOLID e clean code."/>
              </div>
            </div>
            <div className={styles.curriculum_timeline_card}>
              <div className={styles.curriculum_timeline_card_date}>
                <TextCurriculum text="12/3/1234"/>
              </div>
              <div className={styles.curriculum_timeline_card_content}>
              </div>
            </div>
            <div className={styles.curriculum_timeline_card}>
              <div className={styles.curriculum_timeline_card_date}>
                <TextCurriculum text="12/3/1234"/>
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
