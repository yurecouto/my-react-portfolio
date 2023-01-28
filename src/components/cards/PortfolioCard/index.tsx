import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Project from "../../../interfaces/Project";

import { selectLanguage } from "../../../providers/slices/language.slice";
import { selectTheme } from "../../../providers/slices/theme.slice";

import { TextPortfolio } from "../../texts/TextPortfolio";
import { TitlePortfolio } from "../../texts/TitlePortfolio";

import styles from "./styles.module.css";

interface Props {
  project: Project;
  onClick?: (param: any) => void;
}

function PortfolioCard({ project, onClick }: Props) {
  const { t } = useTranslation();
  const theme = useSelector(selectTheme);
  const language:
  "pt_BR" |
  "en_US" |
  "es_ES" |
  "et" = useSelector(selectLanguage);

  return (
    <div
      className={styles.portfolio_card}
      style={{
        backgroundColor: theme.COLORS.CARD_BACKGROUND,
        boxShadow: `0 0 16px ${theme.COLORS.CARD_SHADOW}`
      }}
      onClick={onClick}
    >
      <div className={styles.portfolio_card_image}>
        <div
          className={styles.portfolio_card_see_details}
          style={{ backgroundColor: theme.COLORS.CARD_TRANSPARENCY }}
        >
          <TextPortfolio textAlign="left" text={`${t("ClickToSee")}`}/>
        </div>

        <img
          className={styles.portfolio_card_image}
          src={project.image} alt=""
        />
      </div>

      <div className={styles.portfolio_card_info}>
        <div className={styles.portfolio_card_name}>
          <TitlePortfolio textAlign="left" text={project.title[language]} />
        </div>

        <div className={styles.portfolio_card_description}>
          <TextPortfolio textAlign="left" text={project.subDescription[language]}/>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
