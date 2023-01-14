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
          <TitlePage text="Portfolio:"/>
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
            <PortfolioCard img="https://maximizedesenvolvimentos.com.br/uploads/images/2019/05/o-que-e-data-science-1557521131.png"/>
            <PortfolioCard img="https://www.springboard.com/blog/wp-content/uploads/2022/06/data-science-career-outlook.jpg"/>
            <PortfolioCard img="https://th.jobsdb.com/th-th/wp-content/uploads/sites/3/2021/10/data_content-2.png"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
