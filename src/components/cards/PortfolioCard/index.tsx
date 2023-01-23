import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { TextPortfolio } from "../../texts/TextPortfolio";
import { TitlePortfolio } from "../../texts/TitlePortfolio";
import SkillCard from "../SkillCard";


import styles from "./styles.module.css";

interface Props {
  img?: string;
  title?: string;
  description?: string;
  skills?: string[];
}

function PortfolioCard({
  img = "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=",
  title,
  description,
  skills
  }: Props) {
  const theme = useSelector(selectTheme);

  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      className={styles.portfolio_card}
      style={{backgroundColor: theme.COLORS.CARD_BACKGROUND}}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
    >
      <div className={styles.portfolio_card_image}>
        <img
          className={styles.portfolio_card_image}
          src={img} alt=""
        />
      </div>

      <div className={styles.portfolio_card_info}>
        {/* {hover && ( */}
          <div className={styles.portfolio_card_skills}>
            {skills?.map(skill => (
              <SkillCard skill={skill}/>
            ))}
          </div>
        {/* )} */}
        <div className={styles.portfolio_card_name}>
          <TitlePortfolio textAlign="left" text={title} />
        </div>

        <div className={styles.portfolio_card_description}>
          <TextPortfolio textAlign="left" text={description}/>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
