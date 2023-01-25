import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Project from "../../../interfaces/Project";
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

  return (
    <div
      className={styles.portfolio_card}
      style={{backgroundColor: theme.COLORS.CARD_BACKGROUND}}
      onClick={onClick}
    >
      <div className={styles.portfolio_card_image}>
        <div className={styles.portfolio_card_see_details}>
          <TextPortfolio textAlign="left" text={`${t("ClickToSee")}`}/>
        </div>

        <img
          className={styles.portfolio_card_image}
          src={project.image} alt=""
        />
      </div>

      <div className={styles.portfolio_card_info}>
        <div className={styles.portfolio_card_name}>
          <TitlePortfolio textAlign="left" text={project.title} />
        </div>

        <div className={styles.portfolio_card_description}>
          <TextPortfolio textAlign="left" text={project.subDescription}/>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
