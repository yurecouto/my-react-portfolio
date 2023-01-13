import React from "react";
import PortfolioCard from "../../components/cards/PortfolioCard";
import { TextDefault } from "../../components/texts/TextDefault";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";

import styles from "./styles.module.css";

function Portfolio () {
  const {height, width} = useWindowSize();

  return (
    <>
      <div
        id="section-portfolio"
        className={styles.portfolio_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          minHeight: height,
          height: "auto",
        }}
      >
        <div className={styles.portfolio_container_title}>
          <TitlePage text="Portfolio"/>
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
            <PortfolioCard img="https://rafaelcruz.azurewebsites.net/wp-content/uploads/2020/02/apis-logo.jpg"/>
            <PortfolioCard img="https://igorgomes.eti.br/images/app-developing.png"/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
