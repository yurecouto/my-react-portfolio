import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import PortfolioCard from "../../components/cards/PortfolioCard";
import { TextDefault } from "../../components/texts/TextDefault";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";
import { selectTheme } from "../../providers/slices/theme.slice";

import styles from "./styles.module.css";

function Portfolio () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);

  return (
    <>
      <div
        id="section-portfolio"
        className={styles.portfolio_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          minHeight: height,
          height: "auto",
          borderBottom: `1px solid ${theme.COLORS.PAGE_SEPARATOR}`
        }}
      >
        <div className={styles.portfolio_container_title}>
          <TitlePage text={`${t("Portfolio")}:`}/>
        </div>

        <div className={styles.portfolio_sub_container}>
          <div className={styles.portfolio_menu}>
            <div className={styles.portfolio_menu_items}>
              <TextDefault text="Back-End"/>
              <TextDefault text="Front-End"/>
              <TextDefault text="Mobile"/>
            </div>
          </div>

          <div className={styles.portfolio_card_container}>
            <PortfolioCard
              img="https://rafaelcruz.azurewebsites.net/wp-content/uploads/2020/02/apis-logo.jpg"
              title="Node API Rest"
              description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
              skills={["Node", "TypeScript", "Express", "JWT", "MongoDB"]}
            />

            <PortfolioCard
              img="https://miro.medium.com/max/1400/1*jWZIbgnF4UCFnMXC2pZXRg.png"
              title="Client React"
              description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
              skills={["React", "TypeScript", "Axios", "Token/Refresh Token", "Chart.js", "Flexbox"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
