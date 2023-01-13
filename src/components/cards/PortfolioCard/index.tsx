import React, { ReactNode } from "react";
import { TextPortfolio } from "../../texts/TextPortfolio";
import { TitlePortfolio } from "../../texts/TitlePortfolio";


import styles from "./styles.module.css";

interface Props {
  children?: ReactNode;
  img?: string
}

function PortfolioCard({
  img = "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=",
  }: Props) {

  return (
    <div className={styles.portfolio_card}>
      <div className={styles.portfolio_card_image}>
        <img
          className={styles.portfolio_card_image}
          src={img} alt=""
        />
      </div>

      <div className={styles.portfolio_card_info}>
        <div className={styles.portfolio_card_name}>
          <TitlePortfolio textAlign="left" text="Golang API" />
        </div>

        <div className={styles.portfolio_card_description}>
          <TextPortfolio textAlign="left" text="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."/>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
